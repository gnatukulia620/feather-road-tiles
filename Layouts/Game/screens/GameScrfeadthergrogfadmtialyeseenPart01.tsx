/* autosetup-split:v1 */

export function feadthergrogfadmtialyesGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function feadthergrogfadmtialyesGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v22 */
function GameScreenPart01ObfV22ByteFofeadthergrogfadmtialyesld(s: string): number {
  let x = 13;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 65535;
  return x;
}

function GameScreenPart01feadthergrogfadmtialyesObfV22HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 117;
  return h;
}

function GameScreenPart01ObfV22SfeadthergrogfadmtialyesumOdds(nums: number[]): number {
  let acc = 13;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 117;
  }
  return acc;
}
void GameScreenPart01ObfV22ByteFofeadthergrogfadmtialyesld('xadz');
void GameScreenPart01feadthergrogfadmtialyesObfV22HashMix('5c2r');
void GameScreenPart01ObfV22SfeadthergrogfadmtialyesumOdds([4, 6, 6]);
