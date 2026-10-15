"use strict";

const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function matchBrace(src, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function isHelperName(name) {
  return /ObfV\d+/i.test(name) ||
    /(MixSeed|FoldRange|ClampSpan|HashMix|SumOdds|ClampMod|ShiftXor|ByteFold)$/.test(name);
}

function stripTs(src) {
  const re = /(?:export\s+)?function\s+([A-Za-z_$][\w$]*)/g;
  const ranges = [];
  let m;
  while ((m = re.exec(src))) {
    if (!isHelperName(m[1])) continue;
    const brace = src.indexOf("{", m.index + m[0].length);
    if (brace < 0 || brace > m.index + m[0].length + 80) continue;
    const end = matchBrace(src, brace);
    if (end > 0) ranges.push([brace + 1, end]);
  }
  if (!ranges.length) return src;
  let out = src;
  for (let i = ranges.length - 1; i >= 0; i--) {
    const [a, b] = ranges[i];
    const inner = out.slice(a, b).replace(/^[ \t]*void\s+[A-Za-z_$][\w$]*\([^;]*\);\r?\n/gm, "");
    out = out.slice(0, a) + inner + out.slice(b);
  }
  return out;
}

function stripKt(src) {
  const re = /(?:private\s+|internal\s+)?fun\s+([A-Za-z_`][\w`]*)/g;
  const ranges = [];
  let m;
  while ((m = re.exec(src))) {
    const name = m[1].replace(/`/g, "");
    if (!isHelperName(name)) continue;
    const brace = src.indexOf("{", m.index + m[0].length);
    if (brace < 0 || brace > m.index + 120) continue;
    const end = matchBrace(src, brace);
    if (end > 0) ranges.push([brace + 1, end]);
  }
  let out = src;
  for (let i = ranges.length - 1; i >= 0; i--) {
    const [a, b] = ranges[i];
    const inner = out.slice(a, b).replace(/^[ \t]*@Suppress\("[^"]*"\)\s+val\s+\w*SinkV22[^\n]*\r?\n/gm, "");
    out = out.slice(0, a) + inner + out.slice(b);
  }
  return out.replace(/(HashMix|ByteFold)\('([^']*)'\)/g, '$1("$2")');
}

function stripJava(src) {
  const re = /(?:private\s+static\s+)?int\s+([A-Za-z_][\w]*)\s*\(/g;
  const ranges = [];
  let m;
  while ((m = re.exec(src))) {
    if (!isHelperName(m[1])) continue;
    const brace = src.indexOf("{", m.index);
    if (brace < 0 || brace > m.index + 120) continue;
    const end = matchBrace(src, brace);
    if (end > 0) ranges.push([brace + 1, end]);
  }
  let out = src;
  for (let i = ranges.length - 1; i >= 0; i--) {
    const [a, b] = ranges[i];
    const inner = out.slice(a, b).replace(/^[ \t]*@SuppressWarnings\("[^"]*"\)\s+final int\s+\w*SinkV22[^;]+;\r?\n/gm, "");
    out = out.slice(0, a) + inner + out.slice(b);
  }
  return out;
}

function main() {
  const changed = [];
  const roots = ["services", path.join("Layouts", "Game"), path.join("android", "app", "src", "main", "java")];
  for (const rel of roots) {
    for (const file of walk(path.join(ROOT, rel))) {
      let lang = null;
      if (/\.(ts|tsx)$/.test(file)) lang = "ts";
      else if (file.endsWith(".kt")) lang = "kt";
      else if (file.endsWith(".java") && !file.includes("rnobfuscator")) lang = "java";
      if (!lang) continue;
      const src = fs.readFileSync(file, "utf8");
      const next = lang === "ts" ? stripTs(src) : lang === "kt" ? stripKt(src) : stripJava(src);
      if (next !== src) {
        fs.writeFileSync(file, next);
        changed.push(path.relative(ROOT, file));
      }
    }
  }
  console.log(JSON.stringify({ changed: changed.length, files: changed }, null, 2));
}

main();
