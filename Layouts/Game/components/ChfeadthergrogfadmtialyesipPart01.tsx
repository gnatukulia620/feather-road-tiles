/* autosetup-split:v1 */

export function feadthergrogfadmtialyesGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function feadthergrogfadmtialyesGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function feadthergrogfadmtialyesGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v22 */
function ChipPart01ObfV22ShiftfeadthergrogfadmtialyesXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 135) & 20649;
}
void ChipPart01ObfV22ShiftfeadthergrogfadmtialyesXor(43, 67);
