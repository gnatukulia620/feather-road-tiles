/* autosetup-split:v1 */

export function CryptoServiceObfV15feadthergrogfadmtialyesByteFold(s: string): number {
let x = 62;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) ^ 11;
return x & 33422;
}

export function feadthergrogfadmtialyesCrypbchlipsoqiyrodObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function CryptoSfeadthergrogfadmtialyeserviceObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function CryptoServicePart01ObfV1feadthergrogfadmtialyes1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function feadthergrogfadmtialyesCrypbchlipsoqiyrodObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CrfeadthergrogfadmtialyesyptoServicePart02ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function CryptoServifeadthergrogfadmtialyesceObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function feadthergrogfadmtialyesMixSeed(a: number, b: number): number {

return ((a % (b || 1)) + b) % (b || 1);
}

export function feadthergrogfadmtialyesCrypbchlipsoqiyrodObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function CryptoServicePart02ObfV6ClampModfeadthergrogfadmtialyes(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoSerfeadthergrogfadmtialyesviceObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function CryptoServiceObfV1feadthergrogfadmtialyes4ClampMod(n: number, m: number): number {
const span = (m % 49) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptoServicfeadthergrogfadmtialyesePart01ObfV15SumOdds(nums: number[]): number {

let acc = 31;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 30) % 384;
}
return acc;
}

export function CryptoServicePart01ObfV6ClampMfeadthergrogfadmtialyesod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryfeadthergrogfadmtialyesptoServiceObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function feadthergrogfadmtialyesCrypbchlipsoqiyrodObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function CryptoServicePart01ObfVfeadthergrogfadmtialyes5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiceOfeadthergrogfadmtialyesbfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function CryptoServiceOfeadthergrogfadmtialyesbfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CrfeadthergrogfadmtialyesyptoServicePart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function CryptoServifeadthergrogfadmtialyesceObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiceObfV10ClfeadthergrogfadmtialyesampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiceObfV1feadthergrogfadmtialyes3SumOdds(nums: number[]): number {

let acc = 65;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 20) % 580;
}
return acc;
}

export function CryptoServicfeadthergrogfadmtialyeseObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 6) & 3012;
}

export function CryptoServicePart02ObfeadthergrogfadmtialyesfV15ShiftXor(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 57) & 6878;
}

export function CrfeadthergrogfadmtialyesyptoServiceObfV16ClampMod(n: number, m: number): number {
const span = (m % 59) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}
/* obfuscation-batch:v17 */
function CryptoServicePart01OfeadthergrogfadmtialyesbfV17ByteFold(s: string): number {

  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) ^ 56;
  return x & 4478;
}
function CryptoServfeadthergrogfadmtialyesicePart01ObfV17HashMix(s: string): number {
  let h = 36;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 539;
  return h;
}
/* obfuscation-batch:v18 */
function CryfeadthergrogfadmtialyesptoServicePart01ObfV18ByteFold(s: string): number {
  let x = 37;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 4) ^ 39;
  return x & 54499;
}
function CryptofeadthergrogfadmtialyesServicePart01ObfV18HashMix(s: string): number {
  let h = 90;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 347;
  return h;
}
function CryptoServicePart01ObfV18SumOddsfeadthergrogfadmtialyes(nums: number[]): number {
  let acc = 49;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 303;
  }
  return acc;
}
/* obfuscation-batch:v19 */
function CryptoServicePfeadthergrogfadmtialyesart01ObfV19SumOdds(nums: number[]): number {
  let acc = 48;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 120;
  }
  return acc;
}
function CrypfeadthergrogfadmtialyestoServicePart01ObfV19ClampMod(n: number, m: number): number {
  const span = (m % 21) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function CryptoServiceParfeadthergrogfadmtialyest01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 114) & 42234;
}
/* obfuscation-batch:v20 */
function CryptoServicePafeadthergrogfadmtialyesrt01ObfV20SumOdds(nums: number[]): number {
  let acc = 3;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 741;
  }
  return acc;
}
function CryptoServicePart01ObfV20ClfeadthergrogfadmtialyesampMod(n: number, m: number): number {
  const span = (m % 18) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v21 */
function CryptoServicePart01OfeadthergrogfadmtialyesbfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 215) & 35459;
}

function CrfeadthergrogfadmtialyesyptoServicePart01ObfV21ByteFold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}

function CryptoServicePart01ObfV21HashfeadthergrogfadmtialyesMix(s: string): number {
  let h = 17;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 40) % 298;
  return h;
}

function CrfeadthergrogfadmtialyesyptoServicePart01ObfV21SumOdds(nums: number[]): number {
  let acc = 88;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 636;
  }
  return acc;
}
void CryptoServicePart01OfeadthergrogfadmtialyesbfV21ShiftXor(59, 80);
void CryptoServicefeadthergrogfadmtialyesPart01ObfV22HashMix('fh');
void CryptoServicePart01ObfeadthergrogfadmtialyesfV22SumOdds([8, 12, 22]);
void CryptoServicefeadthergrogfadmtialyesPart01ObfV22ByteFold('ez');
void CrfeadthergrogfadmtialyesyptoServicePart01ObfV21ByteFold('dp65');
void CryptoServicePart01ObfV21HashfeadthergrogfadmtialyesMix('b6s');
void CrfeadthergrogfadmtialyesyptoServicePart01ObfV21SumOdds([27, 8, 18]);
/* obfuscation-batch:v22 */
function CryptoServicefeadthergrogfadmtialyesPart01ObfV22HashMix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 283;
  return h;
}

function CryptoServicePart01ObfeadthergrogfadmtialyesfV22SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 36) % 283;
  }
  return acc;
}

function CryptoServicefeadthergrogfadmtialyesPart01ObfV22ByteFold(s: string): number {
  let x = 29;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 65535;
  return x;
}
void CryptoServicefeadthergrogfadmtialyesPart01ObfV22HashMix('fh');
void CryptoServicePart01ObfeadthergrogfadmtialyesfV22SumOdds([8, 12, 22]);
void CryptoServicefeadthergrogfadmtialyesPart01ObfV22ByteFold('ez');
