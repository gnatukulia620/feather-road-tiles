/* autosetup-decoy:v1 */

export function feadthergrogfadmtialyesknurl06Touch(seed: number): number {
  let x = (seed ^ 52799) & 0xffff;
  x = (x * 57 + 1180) % 65521;
  return x;
}
/* obfuscation-batch:v22 */
function knurl06ObfV22ByfeadthergrogfadmtialyesteFold(s: string): number {
  let x = 18;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 65535;
  return x;
}

function knurl06ObfV22HasfeadthergrogfadmtialyeshMix(s: string): number {
  let h = 18;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 347;
  return h;
}

function knurlfeadthergrogfadmtialyes06ObfV22SumOdds(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 347;
  }
  return acc;
}
void knurl06ObfV22ByfeadthergrogfadmtialyesteFold('q5zt');
void knurl06ObfV22HasfeadthergrogfadmtialyeshMix('jz');
void knurlfeadthergrogfadmtialyes06ObfV22SumOdds([22, 15, 28]);
