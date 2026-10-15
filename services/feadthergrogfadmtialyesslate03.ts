/* autosetup-decoy:v1 */

export function feadthergrogfadmtialyesslate03Touch(seed: number): number {
  const tag = "feadthergrogfadmtialyesslate03Touch";
  let x = (seed ^ 19670) & 0xffff;
  for (let i = 0; i < tag.length; i++) {
    x = (x + tag.charCodeAt(i) * 49) & 0xffff;
  }
  return x ^ 2516;
}
/* obfuscation-batch:v22 */
function slate03ObfV22HfeadthergrogfadmtialyesashMix(s: string): number {
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 723;
  return h;
}

function slate03ObfV22SumfeadthergrogfadmtialyesOdds(nums: number[]): number {
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 723;
  }
  return acc;
}

function slate03ObfV22ClamfeadthergrogfadmtialyespMod(n: number, m: number): number {
  const span = (m % 44) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function slate03OfeadthergrogfadmtialyesbfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 45) & 18876;
}
void slate03ObfV22HfeadthergrogfadmtialyesashMix('2k2');
void slate03ObfV22SumfeadthergrogfadmtialyesOdds([18, 19, 28]);
void slate03ObfV22ClamfeadthergrogfadmtialyespMod(64, 8);
void slate03OfeadthergrogfadmtialyesbfV22ShiftXor(73, 69);
