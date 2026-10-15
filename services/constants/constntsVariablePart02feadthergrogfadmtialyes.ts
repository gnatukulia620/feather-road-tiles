/* autosetup-split:v1 */

export function constntsVariableObfV13BytfeadthergrogfadmtialyeseFold(s: string): number {
let x = 42;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 137;
return x & 37532;
}

export function constntsVariableObfV13HfeadthergrogfadmtialyesashMix(s: string): number {
let h = 9;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 803;
return h;
}

export function constntsVafeadthergrogfadmtialyesriableObfV13SumOdds(nums: number[]): number {
let acc = 40;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 21) % 331;
}
return acc;
}

export function constntsfeadthergrogfadmtialyesVariableObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function constntsVarObfeadthergrogfadmtialyesfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function constntsVariafeadthergrogfadmtialyesbleObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVarObfVfeadthergrogfadmtialyes2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function constntsVariablePart01ObfV11feadthergrogfadmtialyesHashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function constntsVarObfV1HfeadthergrogfadmtialyesashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function constntsVariableObfV8HashMifeadthergrogfadmtialyesx(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function constnfeadthergrogfadmtialyestsVariableObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function constntsVariabfeadthergrogfadmtialyesleObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function constntsVariabfeadthergrogfadmtialyesleObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function constntsVariablePartfeadthergrogfadmtialyes01ObfV13HashMix(s: string): number {
let h = 40;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 207;
return h;
}

export function constntsVariableObfV6HafeadthergrogfadmtialyesshMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function constntsVariableOfeadthergrogfadmtialyesbfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function constntsfeadthergrogfadmtialyesVarObfV1ClampMod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constfeadthergrogfadmtialyesntsVariableObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariablePart01ObfVfeadthergrogfadmtialyes11ClampMod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesconstbchlipsoqiyroObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function consfeadthergrogfadmtialyestntsVariableObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesconstbchlipsoqiyroObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function feadthergrogfadmtialyesconstbchlipsoqiyroObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function constntsVariablePart01OfeadthergrogfadmtialyesbfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function constntsVariablePafeadthergrogfadmtialyesrt02ObfV13SumOdds(nums: number[]): number {
let acc = 33;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 5) % 805;
}
return acc;
}

export function constntsVariableObfV15ClfeadthergrogfadmtialyesampMod(n: number, m: number): number {

const span = (m % 23) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function constntsVariableObfV15BytfeadthergrogfadmtialyeseFold(s: string): number {
let x = 75;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 205;
return x & 20524;
}
/* obfuscation-batch:v17 */
function constntsVarifeadthergrogfadmtialyesablePart02ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 25) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function consfeadthergrogfadmtialyestntsVariablePart02ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 181) & 45245;
}
function constntsVfeadthergrogfadmtialyesariablePart02ObfV17ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 56;
  return x & 9715;
}
/* obfuscation-batch:v18 */
function constntsVariablePart02ObfV18ClampfeadthergrogfadmtialyesMod(n: number, m: number): number {
  const span = (m % 13) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function constntsVariablePart02ObfVfeadthergrogfadmtialyes18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 6) & 9451;
}
function constnfeadthergrogfadmtialyestsVariablePart02ObfV18ByteFold(s: string): number {
  let x = 87;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 74;
  return x & 22926;
}
function constntsVariablePart02ObfV1feadthergrogfadmtialyes8HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 40) % 485;
  return h;
}
/* obfuscation-batch:v19 */
function constntsVariablePart02ObfV19HashMifeadthergrogfadmtialyesx(s: string): number {
  let h = 21;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 679;
  return h;
}
function constntsVariablePart02ObfV19feadthergrogfadmtialyesShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 44) & 3369;
}
/* obfuscation-batch:v20 */
function constntsVafeadthergrogfadmtialyesriablePart02ObfV20HashMix(s: string): number {
  let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 10) % 722;
  return h;
}

/* obfuscation-batch:v21 */
function constntsVarfeadthergrogfadmtialyesiablePart02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 70) & 35868;
}

function cfeadthergrogfadmtialyesonstntsVariablePart02ObfV21ByteFold(s: string): number {
  let x = 18;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) & 65535;
  return x;
}
void constntsVfeadthergrogfadmtialyesariablePart02ObfV22ShiftXor(11, 65);
void constntsVariablePartfeadthergrogfadmtialyes02ObfV22ByteFold('ce');
void constntsVariablePart02feadthergrogfadmtialyesObfV22HashMix('8tz');
void constntfeadthergrogfadmtialyessVariablePart02ObfV22SumOdds([28, 17, 10]);
void constntsVarfeadthergrogfadmtialyesiablePart02ObfV21ShiftXor(61, 55);
void cfeadthergrogfadmtialyesonstntsVariablePart02ObfV21ByteFold('b6');
/* obfuscation-batch:v22 */
function constntsVfeadthergrogfadmtialyesariablePart02ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 53) & 41368;
}

function constntsVariablePartfeadthergrogfadmtialyes02ObfV22ByteFold(s: string): number {
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 65535;
  return x;
}

function constntsVariablePart02feadthergrogfadmtialyesObfV22HashMix(s: string): number {
  let h = 28;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 42) % 576;
  return h;
}

function constntfeadthergrogfadmtialyessVariablePart02ObfV22SumOdds(nums: number[]): number {
  let acc = 28;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 42) % 576;
  }
  return acc;
}
void constntsVfeadthergrogfadmtialyesariablePart02ObfV22ShiftXor(11, 65);
void constntsVariablePartfeadthergrogfadmtialyes02ObfV22ByteFold('ce');
void constntsVariablePart02feadthergrogfadmtialyesObfV22HashMix('8tz');
void constntfeadthergrogfadmtialyessVariablePart02ObfV22SumOdds([28, 17, 10]);
