/* autosetup-decoy:v1 */

export function feadthergrogfadmtialyeskerf10Touch(seed: number): number {
  let x = (seed + 59891) | 0;
  x = (x << 5) | 0;
  x = (x ^ 1317) & 0xffff;
  return x;
}
/* obfuscation-batch:v22 */
function kerf10feadthergrogfadmtialyesObfV22ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 65535;
  return x;
}

function kefeadthergrogfadmtialyesrf10ObfV22HashMix(s: string): number {
  let h = 56;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 267;
  return h;
}
void kerf10feadthergrogfadmtialyesObfV22ByteFold('e53');
void kefeadthergrogfadmtialyesrf10ObfV22HashMix('qruc');
