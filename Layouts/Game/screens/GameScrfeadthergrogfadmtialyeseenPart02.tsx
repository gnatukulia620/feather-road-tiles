/* autosetup-split:v1 */

export function feadthergrogfadmtialyesGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}
/* obfuscation-batch:v22 */
function GameScreenPfeadthergrogfadmtialyesart02ObfV22HashMix(s: string): number {
  let h = 36;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 32) % 123;
  return h;
}

function GameScreenPart02ObfeadthergrogfadmtialyesfV22SumOdds(nums: number[]): number {
  let acc = 36;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 123;
  }
  return acc;
}

function GameSfeadthergrogfadmtialyescreenPart02ObfV22ClampMod(n: number, m: number): number {
  const span = (m % 19) + 10;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function GameScreenPfeadthergrogfadmtialyesart02ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 174) & 46128;
}
void GameScreenPfeadthergrogfadmtialyesart02ObfV22HashMix('2xv');
void GameScreenPart02ObfeadthergrogfadmtialyesfV22SumOdds([3, 25, 17]);
void GameSfeadthergrogfadmtialyescreenPart02ObfV22ClampMod(44, 27);
void GameScreenPfeadthergrogfadmtialyesart02ObfV22ShiftXor(53, 12);
