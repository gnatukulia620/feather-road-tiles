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
function LoaderSfeadthergrogfadmtialyescreenPart01ObfV22SumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 419;
  }
  return acc;
}

function LoaderScreenPart01ObfV22ByfeadthergrogfadmtialyesteFold(s: string): number {
  let x = 14;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 35) & 65535;
  return x;
}
void LoaderSfeadthergrogfadmtialyescreenPart01ObfV22SumOdds([18, 25, 26]);
void LoaderScreenPart01ObfV22ByfeadthergrogfadmtialyesteFold('kn5');
