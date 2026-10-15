/* autosetup-decoy:v1 */

export function feadthergrogfadmtialyesplait08Touch(seed: number): number {
  let x = (seed ^ 28985) & 0xffff;
  x = (x * 41 + 2961) % 65521;
  return x;
}
/* obfuscation-batch:v22 */
function plait08ObfV22ByfeadthergrogfadmtialyesteFold(s: string): number {
  let x = 86;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 27) & 65535;
  return x;
}

function plait08ObfV22HafeadthergrogfadmtialyesshMix(s: string): number {
  let h = 86;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 507;
  return h;
}
void plait08ObfV22ByfeadthergrogfadmtialyesteFold('pn7m');
void plait08ObfV22HafeadthergrogfadmtialyesshMix('5bxw');
