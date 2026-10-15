"use strict";

const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const { checkProjectPaths } = require("./autosetup/checkPaths");

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === "build" || ent.name === "Pods") continue;
      walk(full, acc);
    } else acc.push(full);
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

async function main() {
  const issues = [];

  const paths = await checkProjectPaths(ROOT);
  if (!paths.ok) {
    for (const p of paths.problems) issues.push(`broken-path ${p.file} -> ${p.ref}`);
  }

  const gameFiles = walk(path.join(ROOT, "Layouts", "Game")).filter((f) => /\.(ts|tsx)$/.test(f));
  const frag = "feadthergrogfadmtialyes";
  for (const file of gameFiles) {
    const src = fs.readFileSync(file, "utf8");
    const rel = path.relative(ROOT, file);
    if (src.includes("xuxehakep")) issues.push(`xuxehakep ${rel}`);
    const uiRe = /(['"`>])([^'"`<\n]{0,80}feadthergrogfadmtialyes[^'"`<\n]{0,80})\1/g;
    let m;
    while ((m = uiRe.exec(src))) {
      const text = m[2];
      if (/ObfV|function |void |import |from |require|SinkV|Part0|StyleSheet|feadthergrogfadmtialyesGame/.test(src.slice(Math.max(0, m.index - 40), m.index))) continue;
      if (/^[A-Za-z0-9_]*feadthergrogfadmtialyes[A-Za-z0-9_]*$/.test(text)) continue;
      issues.push(`frag-in-string ${rel}: ${text.slice(0, 80)}`);
    }

    const fnRe = /function\s+([A-Za-z_$][\w$]*)/g;
    while ((m = fnRe.exec(src))) {
      if (!isHelperName(m[1])) continue;
      const brace = src.indexOf("{", m.index + m[0].length);
      if (brace < 0) continue;
      const end = matchBrace(src, brace);
      const inner = src.slice(brace, end);
      if (/^\s*void\s+/m.test(inner) && /void\s+\w+\(/.test(inner)) {
        issues.push(`void-in-helper ${rel} ${m[1]}`);
      }
    }
  }

  const svcFiles = walk(path.join(ROOT, "services")).filter((f) => /\.(ts|tsx)$/.test(f));
  for (const file of svcFiles) {
    const src = fs.readFileSync(file, "utf8");
    const rel = path.relative(ROOT, file);
    const fnRe = /function\s+([A-Za-z_$][\w$]*)/g;
    let m;
    while ((m = fnRe.exec(src))) {
      if (!isHelperName(m[1])) continue;
      const brace = src.indexOf("{", m.index + m[0].length);
      if (brace < 0) continue;
      const end = matchBrace(src, brace);
      const inner = src.slice(brace + 1, end);
      if (/void\s+[A-Za-z_$][\w$]*\(/.test(inner)) {
        issues.push(`void-in-helper ${rel} ${m[1]}`);
      }
    }
    const encUses = [...src.matchAll(/decrypt(?:Hex)?\(([A-Za-z_$][\w$]*)\)/gi)];
    for (const u of encUses) {
      if (!src.includes(u[1]) || (u[1].includes("_ENC") && !new RegExp(`(?:const|let)\\s+${u[1]}\\s*=`).test(src))) {
        if (u[1].includes("ENC") && !new RegExp(`${u[1]}\\s*=`).test(src)) {
          issues.push(`enc-mismatch ${rel} ${u[1]}`);
        }
      }
    }
  }

  const ktFiles = walk(path.join(ROOT, "android", "app", "src", "main", "java")).filter((f) => f.endsWith(".kt"));
  for (const file of ktFiles) {
    const src = fs.readFileSync(file, "utf8");
    const rel = path.relative(ROOT, file);
    if (/(HashMix|ByteFold)\('/.test(src)) issues.push(`kt-single-quote ${rel}`);
    if (src.includes("DDefeadthergrogfadmtialyescoyHub")) issues.push(`bad-decoy-import ${rel}`);
    if (/\{\s*\n\s*@Suppress\("UNUSED_VARIABLE"\)[^\n]+\n\s*\([^)]+\)\s*->/.test(src)) {
      issues.push(`sink-before-lambda-arrow ${rel}`);
    }
  }

  const app = fs.readFileSync(path.join(ROOT, "App.tsx"), "utf8");
  const refs = [...app.matchAll(/from\s+['"](\.[^'"]+)['"]/g)].map((x) => x[1]);
  for (const ref of refs) {
    const base = path.resolve(ROOT, ref);
    const ok = [base, base + ".ts", base + ".tsx", base + ".js"].some((c) => fs.existsSync(c));
    if (!ok) issues.push(`app-import-missing ${ref}`);
  }

  console.log(JSON.stringify({ pathOk: paths.ok, pathProblems: paths.problems, issues }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
