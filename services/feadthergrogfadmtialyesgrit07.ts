/* autosetup-decoy:v1 */

export function feadthergrogfadmtialyesgrit07Touch(seed: number): number {
  let x = Math.imul(seed | 0, 81);
  x = (x ^ 37298) % 3517;
  if (x < 0) x += 3517;
  return x;
}
/* obfuscation-batch:v22 */
function gfeadthergrogfadmtialyesrit07ObfV22ByteFold(s: string): number {
  let x = 11;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 65535;
  return x;
}
void gfeadthergrogfadmtialyesrit07ObfV22ByteFold('u2');
