/* autosetup-split:v1 */

export function CryptoSefeadthergrogfadmtialyesrviceObfV20ClampMod(n: number, m: number): number {
const span = (m % 40) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptoServifeadthergrogfadmtialyesceObfV20ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 163) & 62944;
}

export function CryptoServiceObfV11HafeadthergrogfadmtialyesshMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function feadthergrogfadmtialyesClampSpan(n: number, lo: number, hi: number): number {

return n < lo ? lo : n > hi ? hi : n;
}

export function CryptoServicfeadthergrogfadmtialyesePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function CryptoServiceObfVfeadthergrogfadmtialyes8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function CryptoSerfeadthergrogfadmtialyesvicePart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function CrfeadthergrogfadmtialyesyptoServicePart01ObfV15HashMix(s: string): number {
let h = 87;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 123;
return h;
}

export function CrfeadthergrogfadmtialyesyptoServicePart02ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesCrypbchlipsoqiyrodObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function CryptoServicefeadthergrogfadmtialyesPart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function CryptoServiceObfV9ClampMfeadthergrogfadmtialyesod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServicePafeadthergrogfadmtialyesrt02ObfV15ClampMod(n: number, m: number): number {

const span = (m % 16) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptfeadthergrogfadmtialyesoServicePart01ObfV15ClampMod(n: number, m: number): number {
const span = (m % 14) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptofeadthergrogfadmtialyesServicePart02ObfV15SumOdds(nums: number[]): number {
let acc = 21;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 35) % 395;
}
return acc;
}

export function CryptoServicePartfeadthergrogfadmtialyes02ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function CryptoServicefeadthergrogfadmtialyesObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function CryptoServiObfV1SumOdfeadthergrogfadmtialyesds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function CryptoServifeadthergrogfadmtialyescePart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function CryptoSerfeadthergrogfadmtialyesviceObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryfeadthergrogfadmtialyesptoServicePart02ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function CryptoServifeadthergrogfadmtialyesceObfV16SumOdds(nums: number[]): number {
let acc = 71;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 16) % 362;
}
return acc;
}

export function CryptoServicePart01ObffeadthergrogfadmtialyesV20SumOdds(nums: number[]): number {
let acc = 70;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 42) % 522;
}
return acc;
}

export function CryptfeadthergrogfadmtialyesoServicePart01ObfV20ClampMod(n: number, m: number): number {
const span = (m % 38) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptoServicePart01ObfV20ShifeadthergrogfadmtialyesftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 202) & 36428;
}

export function CryptoSfeadthergrogfadmtialyeservicePart01ObfV20ByteFold(s: string): number {
let x = 46;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 74;
return x & 47742;
}

/* obfuscation-batch:v21 */
function CfeadthergrogfadmtialyesryptoServicePart01ObfV21HashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 393;
  return h;
}

function CryptoServicePart01ObfV2feadthergrogfadmtialyes1SumOdds(nums: number[]): number {
  let acc = 62;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 535;
  }
  return acc;
}

function CryptoServicePart01ObfV21CfeadthergrogfadmtialyeslampMod(n: number, m: number): number {
  const span = (m % 50) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void CryptoServicePart01ObfeadthergrogfadmtialyesfV22ShiftXor(60, 33);
void CfeadthergrogfadmtialyesryptoServicePart01ObfV21HashMix('4b');
void CryptoServicePart01ObfV2feadthergrogfadmtialyes1SumOdds([22, 5, 20]);
void CryptoServicePart01ObfV21CfeadthergrogfadmtialyeslampMod(22, 56);
/* obfuscation-batch:v22 */
function CryptoServicePart01ObfeadthergrogfadmtialyesfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 156) & 53879;
}
void CryptoServicePart01ObfeadthergrogfadmtialyesfV22ShiftXor(60, 33);
