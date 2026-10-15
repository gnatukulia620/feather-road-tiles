/* autosetup-decoy:v1 */

export function feadthergrogfadmtialyesrime05Touch(seed: number): number {
  const tag = "feadthergrogfadmtialyesrime05Touch";
  let x = (seed ^ 24693) & 0xffff;
  for (let i = 0; i < tag.length; i++) {
    x = (x + tag.charCodeAt(i) * 19) & 0xffff;
  }
  return x ^ 2542;
}
/* obfuscation-batch:v22 */
function rime05ObfV22feadthergrogfadmtialyesByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 65535;
  return x;
}

function rime05ObfeadthergrogfadmtialyesfV22HashMix(s: string): number {
  let h = 35;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 477;
  return h;
}

function rime05ObfV2feadthergrogfadmtialyes2SumOdds(nums: number[]): number {
  let acc = 35;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 477;
  }
  return acc;
}

function rime05ObfV22ClampfeadthergrogfadmtialyesMod(n: number, m: number): number {
  const span = (m % 58) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void rime05ObfV22feadthergrogfadmtialyesByteFold('ed6');
void rime05ObfeadthergrogfadmtialyesfV22HashMix('gjyp');
void rime05ObfV2feadthergrogfadmtialyes2SumOdds([15, 21, 11]);
void rime05ObfV22ClampfeadthergrogfadmtialyesMod(63, 28);
