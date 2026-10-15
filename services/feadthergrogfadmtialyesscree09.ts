/* autosetup-decoy:v1 */

export function feadthergrogfadmtialyesscree09Touch(seed: number): number {
  let x = (seed + 8470) | 0;
  x = (x << 1) | 0;
  x = (x ^ 3191) & 0xffff;
  return x;
}
/* obfuscation-batch:v22 */
function scree09ObfV22ShiftXfeadthergrogfadmtialyesor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 203) & 61606;
}

function scree09ObffeadthergrogfadmtialyesV22ByteFold(s: string): number {
  let x = 29;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 65535;
  return x;
}

function scree09ObffeadthergrogfadmtialyesV22HashMix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 32) % 591;
  return h;
}
void scree09ObfV22ShiftXfeadthergrogfadmtialyesor(26, 41);
void scree09ObffeadthergrogfadmtialyesV22ByteFold('s3');
void scree09ObffeadthergrogfadmtialyesV22HashMix('cw');
