/* autosetup-split:v1 */

export function feadthergrogfadmtialyesGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function feadthergrogfadmtialyesGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v22 */
function PlankTilePart01ObfV22SumOddfeadthergrogfadmtialyess(nums: number[]): number {
  let acc = 85;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 29) % 154;
  }
  return acc;
}

function PlankTilePart01ObfV22feadthergrogfadmtialyesClampMod(n: number, m: number): number {
  const span = (m % 27) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function PlanfeadthergrogfadmtialyeskTilePart01ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 100) & 15250;
}
void PlankTilePart01ObfV22SumOddfeadthergrogfadmtialyess([29, 12, 26]);
void PlankTilePart01ObfV22feadthergrogfadmtialyesClampMod(42, 37);
void PlanfeadthergrogfadmtialyeskTilePart01ObfV22ShiftXor(35, 66);
