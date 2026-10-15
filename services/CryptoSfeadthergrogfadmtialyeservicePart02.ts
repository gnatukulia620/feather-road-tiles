/* autosetup-split:v1 */

export function CryptoServifeadthergrogfadmtialyesceObfV17ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 234) & 4273;
}

export function CryptoServiceObfV17ByteFofeadthergrogfadmtialyesld(s: string): number {

let x = 56;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 54;
return x & 45467;
}

export function CryptoServiceObfV17HafeadthergrogfadmtialyesshMix(s: string): number {
let h = 83;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 282;
return h;
}

export function CryptfeadthergrogfadmtialyesoServiceObfV17SumOdds(nums: number[]): number {
let acc = 82;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 323;
}
return acc;
}

export function CryptoServiceObfV10HashMixfeadthergrogfadmtialyes(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function CryptoSerfeadthergrogfadmtialyesviceObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function CryptoSfeadthergrogfadmtialyeservicePart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function CryptoServiceOfeadthergrogfadmtialyesbfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function CryptoServicePartfeadthergrogfadmtialyes02ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function feadthergrogfadmtialyesCrypbchlipsoqiyrodObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServicePart01ObfV1feadthergrogfadmtialyes5ByteFold(s: string): number {

let x = 14;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 37) ^ 10;
return x & 28574;
}

export function CryptoServiObfV2SumfeadthergrogfadmtialyesOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function CryptoServiceObfV7HashMfeadthergrogfadmtialyesix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function CryptoServiObfeadthergrogfadmtialyesfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoSerfeadthergrogfadmtialyesviObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function CrypfeadthergrogfadmtialyestoServiceObfV16HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 525;
return h;
}
/* obfuscation-batch:v18 */
function CryptoServicePart02ObfV18ClfeadthergrogfadmtialyesampMod(n: number, m: number): number {
  const span = (m % 8) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function CryptoServicePart02ObfV18ShiffeadthergrogfadmtialyestXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 19) & 9695;
}
function CryptoServfeadthergrogfadmtialyesicePart02ObfV18ByteFold(s: string): number {
  let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 207;
  return x & 59506;
}
function CryptoServicePart02ObfV18HafeadthergrogfadmtialyesshMix(s: string): number {
  let h = 31;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 242;
  return h;
}
/* obfuscation-batch:v19 */
function CfeadthergrogfadmtialyesryptoServicePart02ObfV19HashMix(s: string): number {
  let h = 96;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 597;
  return h;
}
function CryptoServicePart02ObfV19ShiftfeadthergrogfadmtialyesXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 103) & 47549;
}
/* obfuscation-batch:v20 */
function CryptoServicePart02ObfV20SumOddsfeadthergrogfadmtialyes(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 36) % 757;
  }
  return acc;
}

/* obfuscation-batch:v21 */
function CryptfeadthergrogfadmtialyesoServicePart02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 54) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function CryptoServicePart02ObfV21ShfeadthergrogfadmtialyesiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 144) & 51769;
}

function CryptoServicePartfeadthergrogfadmtialyes02ObfV21ByteFold(s: string): number {
  let x = 53;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 65535;
  return x;
}
void CfeadthergrogfadmtialyesryptoServicePart02ObfV22ByteFold('jcw');
void CryptoServicePartfeadthergrogfadmtialyes02ObfV22HashMix('3en');
void CryptoServicePart02ObfV22SumOfeadthergrogfadmtialyesdds([5, 6, 14]);
void CryptfeadthergrogfadmtialyesoServicePart02ObfV21ClampMod(20, 67);
void CryptoServicePart02ObfV21ShfeadthergrogfadmtialyesiftXor(22, 39);
void CryptoServicePartfeadthergrogfadmtialyes02ObfV21ByteFold('t5k');
/* obfuscation-batch:v22 */
function CfeadthergrogfadmtialyesryptoServicePart02ObfV22ByteFold(s: string): number {
  let x = 22;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 65535;
  return x;
}

function CryptoServicePartfeadthergrogfadmtialyes02ObfV22HashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 677;
  return h;
}

function CryptoServicePart02ObfV22SumOfeadthergrogfadmtialyesdds(nums: number[]): number {
  let acc = 22;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 677;
  }
  return acc;
}
void CfeadthergrogfadmtialyesryptoServicePart02ObfV22ByteFold('jcw');
void CryptoServicePartfeadthergrogfadmtialyes02ObfV22HashMix('3en');
void CryptoServicePart02ObfV22SumOfeadthergrogfadmtialyesdds([5, 6, 14]);
