/* autosetup-split:v1 */

export function feadthergrogfadmtialyesOfferResolveObfV15SumOdds(nums: number[]): number {
let acc = 78;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 30) % 243;
}
return acc;
}

export function feadthergrogfadmtialyesOfferResolvObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function feadthergrogfadmtialyesOfferResolvePart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function feadthergrogfadmtialyesOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function feadthergrogfadmtialyesOffObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 81) & 13803;
}

export function feadthergrogfadmtialyesOfferResolvePart01ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 117) & 58189;
}

export function feadthergrogfadmtialyesOfferResolvePart01ObfV15HashMix(s: string): number {
let h = 90;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 350;
return h;
}

export function feadthergrogfadmtialyesOfferResolveObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function feadthergrogfadmtialyesOffObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function feadthergrogfadmtialyesOffObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function feadthergrogfadmtialyesOffObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolvePart03ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV13SumOdds(nums: number[]): number {
let acc = 32;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 5) % 564;
}
return acc;
}

export function feadthergrogfadmtialyesOfferResolvePart02ObfV15SumOdds(nums: number[]): number {
let acc = 14;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 27) % 475;
}
return acc;
}

export function feadthergrogfadmtialyesOfferResolvePart02ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 205) & 53104;
}

export function feadthergrogfadmtialyesFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function feadthergrogfadmtialyesMixSeed(a: number, b: number): number {

return ((a % (b || 1)) + b) % (b || 1);
}

export function feadthergrogfadmtialyesOfferResolveObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function feadthergrogfadmtialyesOfferResolvePart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function feadthergrogfadmtialyesClampSpan(n: number, lo: number, hi: number): number {

return n < lo ? lo : n > hi ? hi : n;
}

export function feadthergrogfadmtialyesOfferResolveObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV14HashMix(s: string): number {
let h = 6;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 682;
return h;
}

export function feadthergrogfadmtialyesOfferResolvePart03ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 35) & 49906;
}

export function feadthergrogfadmtialyesOfferResolveObfV16ClampMod(n: number, m: number): number {
const span = (m % 16) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}
/* obfuscation-batch:v17 */
function OfeadthergrogfadmtialyesfferResolvePart02ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 195) & 13932;
}
/* obfuscation-batch:v18 */
function OfferResolvePartfeadthergrogfadmtialyes02ObfV18HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 570;
  return h;
}
function OfferResolvePart02feadthergrogfadmtialyesObfV18SumOdds(nums: number[]): number {
  let acc = 51;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 464;
  }
  return acc;
}
/* obfuscation-batch:v19 */
function OfferResolvePart02ObfV1feadthergrogfadmtialyes9HashMix(s: string): number {
  let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 25) % 828;
  return h;
}
function OfferfeadthergrogfadmtialyesResolvePart02ObfV19SumOdds(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 847;
  }
  return acc;
}
function OfferResolvePart02ObfV19ShiftfeadthergrogfadmtialyesXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 148) & 3411;
}
/* obfuscation-batch:v20 */
function OfferRefeadthergrogfadmtialyessolvePart02ObfV20ClampMod(n: number, m: number): number {
  const span = (m % 61) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolveParfeadthergrogfadmtialyest02ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 238) & 49906;
}
function OfferResolvePart02ObfV20ByteFolfeadthergrogfadmtialyesd(s: string): number {
  let x = 17;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 155;
  return x & 26811;
}
void OfferRefeadthergrogfadmtialyessolvePart02ObfV20ClampMod(59, 23);
void OfferResolveParfeadthergrogfadmtialyest02ObfV20ShiftXor(37, 15);
void OfferResolvePart02ObfV20ByteFolfeadthergrogfadmtialyesd('kb34');

/* obfuscation-batch:v21 */
function OfferResolvePart02ObfeadthergrogfadmtialyesfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 226) & 41844;
}

function OfferResolvePartfeadthergrogfadmtialyes02ObfV21ByteFold(s: string): number {
  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 65535;
  return x;
}

function OffefeadthergrogfadmtialyesrResolvePart02ObfV21HashMix(s: string): number {
  let h = 68;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 660;
  return h;
}

function OfferResolvePart02ObfV21SumOddsfeadthergrogfadmtialyes(nums: number[]): number {
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 500;
  }
  return acc;
}
void OfferResolvePart02ObfeadthergrogfadmtialyesfV21ShiftXor(33, 47);
void OfferResolvePart02ObffeadthergrogfadmtialyesV22ByteFold('vg');
void OfferResolvePartfeadthergrogfadmtialyes02ObfV21ByteFold('b65w');
void OffefeadthergrogfadmtialyesrResolvePart02ObfV21HashMix('gfk');
void OfferResolvePart02ObfV21SumOddsfeadthergrogfadmtialyes([5, 7, 11]);
/* obfuscation-batch:v22 */
function OfferResolvePart02ObffeadthergrogfadmtialyesV22ByteFold(s: string): number {
  let x = 76;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) & 65535;
  return x;
}
void OfferResolvePart02ObffeadthergrogfadmtialyesV22ByteFold('vg');
