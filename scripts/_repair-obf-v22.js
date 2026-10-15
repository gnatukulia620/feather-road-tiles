"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const FRAG = "feadthergrogfadmtialyes";
const BATCH = 22;

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function matchParen(src, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === "(") depth++;
    else if (src[i] === ")") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function skipWs(src, i) {
  while (i < src.length && /\s/.test(src[i])) i++;
  return i;
}

function findBodyBraceAfterSig(src, from) {
  let i = from;
  if (src[i] !== "(") {
    const p = src.indexOf("(", from);
    if (p < 0 || p > from + 40) return -1;
    i = p;
  }
  const close = matchParen(src, i);
  if (close < 0) return -1;
  let j = skipWs(src, close + 1);
  if (src[j] === ":") {
    j++;
    let depth = 0;
    while (j < src.length) {
      const ch = src[j];
      if (ch === "<" || ch === "(" || ch === "[") depth++;
      else if (ch === ">" || ch === ")" || ch === "]") depth = Math.max(0, depth - 1);
      else if (depth === 0 && (ch === "{" || src.startsWith("=>", j))) break;
      j++;
      if (j - close > 220) return -1;
    }
    j = skipWs(src, j);
  }
  if (src.startsWith("=>", j)) j = skipWs(src, j + 2);
  return src[j] === "{" ? j : -1;
}

function isHelperName(name) {
  if (!name) return false;
  return /ObfV\d+/i.test(name) ||
    /(MixSeed|FoldRange|ClampSpan|HashMix|SumOdds|ClampMod|ShiftXor|ByteFold)$/.test(name);
}

function isTight(name) {
  return /^(xuxehakep|transform|dumiqovazaker|pegitegim|rezotewezabim|guruhixaciqab)$/.test(name);
}

function extractTsCalls(src) {
  const re = /void\s+[A-Za-z_$][\w$]*ObfV22[A-Za-z_$][\w$]*\s*\([^;]*\);/g;
  const all = [...src.matchAll(re)];
  if (!all.length) return "";
  const cluster = [all[0][0]];
  for (let i = 1; i < all.length; i++) {
    if (all[i].index - (all[i - 1].index + all[i - 1][0].length) < 90) cluster.push(all[i][0]);
    else break;
  }
  return [...new Set(cluster)].join("\n");
}

function extractKtSink(src) {
  const m = src.match(/@Suppress\("UNUSED_VARIABLE"\)\s+val\s+\w*SinkV22\w*\s*=[^\n]+/);
  return m ? m[0].trim() : "";
}

function extractJavaSink(src) {
  const m = src.match(/@SuppressWarnings\("unused"\)\s+final int\s+\w*SinkV22\w*\s*=[^;]+;/);
  return m ? m[0].trim() : "";
}

function findTsFuns(src) {
  const spots = [];
  const re = /(?:export\s+)?(?:default\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)|(?:useCallback|useEffect|useMemo|useLayoutEffect)\s*\(|(?:export\s+)?(?:const|let)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?/g;
  let m;
  while ((m = re.exec(src))) {
    const name = m[1] || m[2] || "";
    if (isHelperName(name) || isTight(name)) continue;
    const from = src.indexOf("(", m.index);
    if (from < 0 || from > m.index + m[0].length + 60) continue;
    const brace = findBodyBraceAfterSig(src, from);
    if (brace < 0) continue;
    spots.push({ name, brace });
  }
  return spots;
}

function findKtFuns(src) {
  const spots = [];
  const re = /(?:override\s+)?(?:private|internal|public|protected)?\s*(?:suspend\s+)?fun\s+([A-Za-z_`][\w`]*)/g;
  let m;
  while ((m = re.exec(src))) {
    const name = m[1].replace(/`/g, "");
    if (isHelperName(name) || isTight(name)) continue;
    const from = src.indexOf("(", m.index + m[0].length - 1);
    if (from < 0 || from > m.index + m[0].length + 30) continue;
    const brace = findBodyBraceAfterSig(src, from);
    if (brace < 0) continue;
    spots.push({ name, brace });
  }
  return spots;
}

function findJavaMethods(src) {
  const spots = [];
  const re = /(?:public|private|protected|static|final|synchronized|\s)+([A-Za-z_][\w]*)\s*\(/g;
  let m;
  while ((m = re.exec(src))) {
    const name = m[1];
    if (/^(if|for|while|switch|catch|return|new|class|interface|synchronized)$/.test(name)) continue;
    if (isHelperName(name) || isTight(name)) continue;
    const open = src.indexOf("(", m.index + m[0].length - 1);
    const close = matchParen(src, open);
    if (close < 0) continue;
    let j = skipWs(src, close + 1);
    if (src.startsWith("throws", j)) {
      const b = src.indexOf("{", j);
      if (b < 0) continue;
      spots.push({ name, brace: b, ctor: false });
      continue;
    }
    if (src[j] === "{") spots.push({ name, brace: j, ctor: /^[A-Z]/.test(name) });
  }
  return spots;
}

function insertIfMissing(src, brace, text, lookFor, ctor) {
  let at = brace + 1;
  if (ctor) {
    const slice = src.slice(at, at + 200);
    const sm = slice.match(/^\s*(?:super|this)\s*\([^;]*\);/);
    if (sm) at += sm[0].length;
  }
  const window = src.slice(at, at + 280);
  if (window.includes(lookFor)) return src;
  return src.slice(0, at) + "\n" + text + src.slice(at);
}

function fixKotlinQuotes(src) {
  return src.replace(/(ObfV22[A-Za-z0-9_]*\()'([^']*)'/g, '$1"$2"');
}

function processTs(file, src) {
  const calls = extractTsCalls(src);
  if (!calls) return src;
  const funs = findTsFuns(src);
  let out = src;
  for (let i = funs.length - 1; i >= 0; i--) {
    out = insertIfMissing(out, funs[i].brace, calls, "ObfV22");
  }
  return out;
}

function processKt(file, src) {
  let out = fixKotlinQuotes(src);
  const sink = extractKtSink(out);
  if (!sink) return out;
  const funs = findKtFuns(out);
  for (let i = funs.length - 1; i >= 0; i--) {
    out = insertIfMissing(out, funs[i].brace, "    " + sink, "SinkV22");
  }
  return out;
}

function processJava(file, src) {
  const sink = extractJavaSink(src);
  if (!sink) return src;
  const methods = findJavaMethods(src);
  let out = src;
  for (let i = methods.length - 1; i >= 0; i--) {
    out = insertIfMissing(out, methods[i].brace, "        " + sink, "SinkV22", methods[i].ctor);
  }
  return out;
}

function collect() {
  const files = [];
  for (const rel of ["services", path.join("Layouts", "Game")]) {
    for (const f of walk(path.join(ROOT, rel))) {
      if (/\.(ts|tsx)$/.test(f)) files.push({ file: f, lang: "ts" });
    }
  }
  for (const f of walk(path.join(ROOT, "android", "app", "src", "main", "java"))) {
    if (f.endsWith(".kt")) files.push({ file: f, lang: "kt" });
    else if (f.endsWith(".java") && !f.includes("rnobfuscator")) files.push({ file: f, lang: "java" });
  }
  return files;
}

function main() {
  const report = { changed: [] };
  for (const { file, lang } of collect()) {
    const src = fs.readFileSync(file, "utf8");
    if (!src.includes(`ObfV${BATCH}`) && !src.includes(`SinkV${BATCH}`)) continue;
    let next = src;
    if (lang === "ts") next = processTs(file, src);
    else if (lang === "kt") next = processKt(file, src);
    else next = processJava(file, src);
    if (next !== src) {
      fs.writeFileSync(file, next);
      report.changed.push(path.relative(ROOT, file));
    }
  }
  console.log(JSON.stringify({ changed: report.changed.length, files: report.changed }, null, 2));
}

main();
