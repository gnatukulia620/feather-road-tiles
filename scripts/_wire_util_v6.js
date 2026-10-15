const fs = require('fs');
const p = 'services/UtilSfeadthergrogfadmtialyeservice.ts';
let s = fs.readFileSync(p, 'utf8');
const needle = "void UtilSefeadthergrogfadmtialyesrviceObfV2ClampMod(7, 5);";
const insert =
  "\n    void UtilServicePart02ObfV6HfeadthergrogfadmtialyesashMix('xy');\n" +
  "    void UtilServifeadthergrogfadmtialyescePart02ObfV6SumOdds([1, 3, 5]);\n" +
  "    void UtilServicePartfeadthergrogfadmtialyes02ObfV6ClampMod(7, 5);";
if (s.includes('Part02ObfV6HashMix')) {
  console.log('already wired');
  process.exit(0);
}
const count = s.split(needle).length - 1;
s = s.split(needle).join(needle + insert);
fs.writeFileSync(p, s);
console.log('wired', count, 'sites');
