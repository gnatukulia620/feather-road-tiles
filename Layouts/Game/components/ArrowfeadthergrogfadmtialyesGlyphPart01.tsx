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
function ArrowGlyphPart01ObfV2feadthergrogfadmtialyes2ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 176) & 55169;
}
void ArrowGlyphPart01ObfV2feadthergrogfadmtialyes2ShiftXor(25, 41);
