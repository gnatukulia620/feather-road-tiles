/* autosetup-split:v1 */

export function feadthergrogfadmtialyesOfferResolveObfV15HashMix(s: string): number {
let h = 67;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 632;
return h;
}

export function feadthergrogfadmtialyesOfferResolveObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function feadthergrogfadmtialyesOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function feadthergrogfadmtialyesOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function feadthergrogfadmtialyesOfferResolvePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolvePart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV13HashMix(s: string): number {
let h = 88;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 539;
return h;
}

export function feadthergrogfadmtialyesOfferResolveObfV14SumOdds(nums: number[]): number {
let acc = 49;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 36) % 335;
}
return acc;
}

export function feadthergrogfadmtialyesOfferResolvePart01ObfV15ByteFold(s: string): number {
let x = 80;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 133;
return x & 13916;
}

export function feadthergrogfadmtialyesOfferResolvePart01ObfV15SumOdds(nums: number[]): number {
let acc = 70;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 269;
}
return acc;
}

export function feadthergrogfadmtialyesOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function feadthergrogfadmtialyesOfferResolvePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function feadthergrogfadmtialyesOfferResolvePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function feadthergrogfadmtialyesOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV14ByteFold(s: string): number {
let x = 71;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 143;
return x & 39056;
}

export function feadthergrogfadmtialyesOfferResolvePart02ObfV15ClampMod(n: number, m: number): number {
const span = (m % 44) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesOfferResolveObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function feadthergrogfadmtialyesOfferResolvePart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function feadthergrogfadmtialyesOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function feadthergrogfadmtialyesOfferResolveObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function feadthergrogfadmtialyesOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolvePart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesOfferResolveObfV13ClampMod(n: number, m: number): number {
const span = (m % 44) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesOfferResolvePart03ObfV15ClampMod(n: number, m: number): number {
const span = (m % 54) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesOfferResolveObfV16SumOdds(nums: number[]): number {
let acc = 90;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 34) % 294;
}
return acc;
}

export function feadthergrogfadmtialyesOfferResolveObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 129) & 6985;
}
/* obfuscation-batch:v17 */
function OfferResolveParfeadthergrogfadmtialyest01ObfV17ByteFold(s: string): number {
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) ^ 229;
  return x & 48430;
}
function OfferResolvePart01ObfV17HafeadthergrogfadmtialyesshMix(s: string): number {
  let h = 75;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 43) % 419;
  return h;
}
function OfferResolvePart01ObfV17SumfeadthergrogfadmtialyesOdds(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 237;
  }
  return acc;
}
function OfferResolvePfeadthergrogfadmtialyesart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 21) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void OfferResolveParfeadthergrogfadmtialyest01ObfV17ByteFold('w7g');
void OfferResolvePart01ObfV17HafeadthergrogfadmtialyesshMix('fzq3');
void OfferResolvePart01ObfV17SumfeadthergrogfadmtialyesOdds([16, 9, 18]);
void OfferResolvePfeadthergrogfadmtialyesart01ObfV17ClampMod(76, 54);
/* obfuscation-batch:v18 */
function OfferResolveParfeadthergrogfadmtialyest01ObfV18SumOdds(nums: number[]): number {
  let acc = 58;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 29) % 171;
  }
  return acc;
}
function OfferResolvePart01ObfV18ClampMofeadthergrogfadmtialyesd(n: number, m: number): number {
  const span = (m % 25) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvefeadthergrogfadmtialyesPart01ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 216) & 48530;
}
void OfferResolveParfeadthergrogfadmtialyest01ObfV18SumOdds([20, 25, 23]);
void OfferResolvePart01ObfV18ClampMofeadthergrogfadmtialyesd(10, 75);
void OfferResolvefeadthergrogfadmtialyesPart01ObfV18ShiftXor(17, 43);
/* obfuscation-batch:v19 */
function OfferResfeadthergrogfadmtialyesolvePart01ObfV19HashMix(s: string): number {
  let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 782;
  return h;
}
function OfeadthergrogfadmtialyesfferResolvePart01ObfV19SumOdds(nums: number[]): number {
  let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 801;
  }
  return acc;
}
function OfferResolvePart01ObffeadthergrogfadmtialyesV19ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 165;
  return x & 3000;
}
/* obfuscation-batch:v20 */
function OffefeadthergrogfadmtialyesrResolvePart01ObfV20ClampMod(n: number, m: number): number {
  const span = (m % 24) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResfeadthergrogfadmtialyesolvePart01ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 138) & 63074;
}
function OfferResolvePart01ObffeadthergrogfadmtialyesV20ByteFold(s: string): number {
  let x = 82;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) ^ 230;
  return x & 20568;
}
function OffeadthergrogfadmtialyesferResolvePart01ObfV20HashMix(s: string): number {
  let h = 21;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 484;
  return h;
}
void OffefeadthergrogfadmtialyesrResolvePart01ObfV20ClampMod(63, 40);
void OfferResfeadthergrogfadmtialyesolvePart01ObfV20ShiftXor(34, 42);
void OfferResolvePart01ObffeadthergrogfadmtialyesV20ByteFold('zfj8');
void OffeadthergrogfadmtialyesferResolvePart01ObfV20HashMix('p4mm');

/* obfuscation-batch:v21 */
function OfferResolvePart01ObfV21ClfeadthergrogfadmtialyesampMod(n: number, m: number): number {
  const span = (m % 61) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function OfferRefeadthergrogfadmtialyessolvePart01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 88) & 9537;
}

function OfferResofeadthergrogfadmtialyeslvePart01ObfV21ByteFold(s: string): number {
  let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) & 65535;
  return x;
}

function OfferResolvePart01feadthergrogfadmtialyesObfV21HashMix(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 683;
  return h;
}
void OfferResolvePart01ObfV22ClampMofeadthergrogfadmtialyesd(80, 59);
void OfferResolvefeadthergrogfadmtialyesPart01ObfV22ShiftXor(9, 45);
void OfferResolvePart01ObfV21ClfeadthergrogfadmtialyesampMod(47, 74);
void OfferRefeadthergrogfadmtialyessolvePart01ObfV21ShiftXor(77, 21);
void OfferResofeadthergrogfadmtialyeslvePart01ObfV21ByteFold('wha');
void OfferResolvePart01feadthergrogfadmtialyesObfV21HashMix('kha');
/* obfuscation-batch:v22 */
function OfferResolvePart01ObfV22ClampMofeadthergrogfadmtialyesd(n: number, m: number): number {
  const span = (m % 35) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function OfferResolvefeadthergrogfadmtialyesPart01ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 189) & 37867;
}
void OfferResolvePart01ObfV22ClampMofeadthergrogfadmtialyesd(80, 59);
void OfferResolvefeadthergrogfadmtialyesPart01ObfV22ShiftXor(9, 45);
