/* autosetup-split:v1 */

export function feadthergrogfadmtialyesPublicPingObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 215) & 24601;
}

export function feadthergrogfadmtialyesPublicPingObfV14HashMix(s: string): number {
let h = 31;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 6) % 200;
return h;
}

export function feadthergrogfadmtialyesPublicPingObfV14SumOdds(nums: number[]): number {
let acc = 26;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 42) % 388;
}
return acc;
}

export function feadthergrogfadmtialyesPublicPingObfV15SumOdds(nums: number[]): number {
let acc = 73;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 25) % 612;
}
return acc;
}

export function feadthergrogfadmtialyesPublicPingObfV15ClampMod(n: number, m: number): number {
const span = (m % 43) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesPublicPingObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 237) & 30457;
}

export function feadthergrogfadmtialyesPublicPingObfV16ClampMod(n: number, m: number): number {
const span = (m % 60) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesPublicPingObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 6;
return (x ^ 188) & 11575;
}
/* obfuscation-batch:v17 */
function PublicPingPart01OfeadthergrogfadmtialyesbfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 8) & 22981;
}
function PublicPingPartfeadthergrogfadmtialyes01ObfV17ByteFold(s: string): number {
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) ^ 156;
  return x & 16690;
}
function PublicPingParfeadthergrogfadmtialyest01ObfV17HashMix(s: string): number {
  let h = 51;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 381;
  return h;
}
void PublicPingPart01OfeadthergrogfadmtialyesbfV17ShiftXor(69, 65);
void PublicPingPartfeadthergrogfadmtialyes01ObfV17ByteFold('rv');
void PublicPingParfeadthergrogfadmtialyest01ObfV17HashMix('q4');
/* obfuscation-batch:v18 */
function PublicPingPart01ObfV18SfeadthergrogfadmtialyesumOdds(nums: number[]): number {
  let acc = 89;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 28) % 347;
  }
  return acc;
}
function PublicPingPart01OfeadthergrogfadmtialyesbfV18ClampMod(n: number, m: number): number {
  const span = (m % 23) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function PublicPingPart01ObfV18ShiftXofeadthergrogfadmtialyesr(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 52) & 12748;
}
function PublicPingPart01ObfV18ByteFolfeadthergrogfadmtialyesd(s: string): number {
  let x = 13;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) ^ 123;
  return x & 51643;
}
void PublicPingPart01ObfV18SfeadthergrogfadmtialyesumOdds([16, 19, 18]);
void PublicPingPart01OfeadthergrogfadmtialyesbfV18ClampMod(39, 40);
void PublicPingPart01ObfV18ShiftXofeadthergrogfadmtialyesr(50, 51);
void PublicPingPart01ObfV18ByteFolfeadthergrogfadmtialyesd('hw');
/* obfuscation-batch:v19 */
function PublicPifeadthergrogfadmtialyesngPart01ObfV19SumOdds(nums: number[]): number {
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 852;
  }
  return acc;
}
function PublicPingPart01ObfVfeadthergrogfadmtialyes19ClampMod(n: number, m: number): number {
  const span = (m % 28) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function PublicPingPart01ObfeadthergrogfadmtialyesfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 80) & 59817;
}
function PublicfeadthergrogfadmtialyesPingPart01ObfV19ByteFold(s: string): number {
  let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 90;
  return x & 59822;
}
/* obfuscation-batch:v20 */
function PublicPingPart01feadthergrogfadmtialyesObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 134) & 55662;
}

/* obfuscation-batch:v21 */
function PublifeadthergrogfadmtialyescPingPart01ObfV21ByteFold(s: string): number {
  let x = 44;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 65535;
  return x;
}

function PublicPingPart01ObfV21HashMfeadthergrogfadmtialyesix(s: string): number {
  let h = 54;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 394;
  return h;
}

function PublicPingPart01ObfV21feadthergrogfadmtialyesSumOdds(nums: number[]): number {
  let acc = 34;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 181;
  }
  return acc;
}
void PfeadthergrogfadmtialyesublicPingPart01ObfV22HashMix('bm9');
void PublicPingPart01ObffeadthergrogfadmtialyesV22ShiftXor(21, 55);
void PublifeadthergrogfadmtialyescPingPart01ObfV21ByteFold('zr');
void PublicPingPart01ObfV21HashMfeadthergrogfadmtialyesix('2zr3');
void PublicPingPart01ObfV21feadthergrogfadmtialyesSumOdds([20, 9, 16]);
/* obfuscation-batch:v22 */
function PfeadthergrogfadmtialyesublicPingPart01ObfV22HashMix(s: string): number {
  let h = 64;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 7) % 253;
  return h;
}

function PublicPingPart01ObffeadthergrogfadmtialyesV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 98) & 40519;
}
void PfeadthergrogfadmtialyesublicPingPart01ObfV22HashMix('bm9');
void PublicPingPart01ObffeadthergrogfadmtialyesV22ShiftXor(21, 55);
