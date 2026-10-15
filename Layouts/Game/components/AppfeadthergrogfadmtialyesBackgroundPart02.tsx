/* autosetup-split:v1 */

export function feadthergrogfadmtialyesGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}
/* obfuscation-batch:v22 */
function AppBackgrofeadthergrogfadmtialyesundPart02ObfV22ByteFold(s: string): number {
  let x = 18;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}

function AppBackgroundPart02ObfV22HafeadthergrogfadmtialyesshMix(s: string): number {
  let h = 18;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 442;
  return h;
}

function AppBfeadthergrogfadmtialyesackgroundPart02ObfV22SumOdds(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 442;
  }
  return acc;
}

function AppBackgroundPart02ObfV22ClampMfeadthergrogfadmtialyesod(n: number, m: number): number {
  const span = (m % 49) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void AppBackgrofeadthergrogfadmtialyesundPart02ObfV22ByteFold('v7a');
void AppBackgroundPart02ObfV22HafeadthergrogfadmtialyesshMix('s2p');
void AppBfeadthergrogfadmtialyesackgroundPart02ObfV22SumOdds([15, 28, 16]);
void AppBackgroundPart02ObfV22ClampMfeadthergrogfadmtialyesod(12, 45);
