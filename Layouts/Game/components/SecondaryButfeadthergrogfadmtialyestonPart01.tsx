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
function SecofeadthergrogfadmtialyesndaryButtonPart01ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 177) & 41934;
}

function SeconfeadthergrogfadmtialyesdaryButtonPart01ObfV22ByteFold(s: string): number {
  let x = 61;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}

function SecondaryButtonPart0feadthergrogfadmtialyes1ObfV22HashMix(s: string): number {
  let h = 61;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 796;
  return h;
}

function SecondarfeadthergrogfadmtialyesyButtonPart01ObfV22SumOdds(nums: number[]): number {
  let acc = 61;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 796;
  }
  return acc;
}
void SecofeadthergrogfadmtialyesndaryButtonPart01ObfV22ShiftXor(71, 28);
void SeconfeadthergrogfadmtialyesdaryButtonPart01ObfV22ByteFold('5mzt');
void SecondaryButtonPart0feadthergrogfadmtialyes1ObfV22HashMix('g3');
void SecondarfeadthergrogfadmtialyesyButtonPart01ObfV22SumOdds([6, 20, 7]);
