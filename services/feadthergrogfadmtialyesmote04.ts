/* autosetup-decoy:v1 */

export function feadthergrogfadmtialyesmote04Touch(seed: number): number {
void mofeadthergrogfadmtialyeste04ObfV22HashMix('mhvg');
void mote0feadthergrogfadmtialyes4ObfV22SumOdds([27, 12, 20]);
  let x = (seed ^ 28547) & 0xffff;
  x = (x * 59 + 2956) % 65521;
  return x;
}
/* obfuscation-batch:v22 */
function mote04OfeadthergrogfadmtialyesbfV22ByteFold(s: string): number {
  let x = 62;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) & 65535;
  return x;
}

function mofeadthergrogfadmtialyeste04ObfV22HashMix(s: string): number {
  let h = 62;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 40) % 207;
  return h;
}

function mote0feadthergrogfadmtialyes4ObfV22SumOdds(nums: number[]): number {
  let acc = 62;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 207;
  }
  return acc;
}
void mote04OfeadthergrogfadmtialyesbfV22ByteFold('zd5');
void mofeadthergrogfadmtialyeste04ObfV22HashMix('mhvg');
void mote0feadthergrogfadmtialyes4ObfV22SumOdds([27, 12, 20]);
