/* autosetup-split:v1 */

export function constntsVariabfeadthergrogfadmtialyesleObfV17SumOdds(nums: number[]): number {
let acc = 50;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 11) % 330;
}
return acc;
}

export function constntsVariableObfV17SfeadthergrogfadmtialyeshiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 237) & 4934;
}

export function constntsVariablfeadthergrogfadmtialyeseObfV18HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 492;
return h;
}

export function constntsVariableObfV19ByfeadthergrogfadmtialyesteFold(s: string): number {
let x = 49;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 16;
return x & 36465;
}

export function constntsVariabfeadthergrogfadmtialyesleObfV19HashMix(s: string): number {
let h = 77;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 303;
return h;
}

export function constntsVarfeadthergrogfadmtialyesiableObfV19SumOdds(nums: number[]): number {
let acc = 56;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 13) % 323;
}
return acc;
}

export function constntfeadthergrogfadmtialyessVariableObfV17ClampMod(n: number, m: number): number {
const span = (m % 59) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function confeadthergrogfadmtialyesstntsVariableObfV17ByteFold(s: string): number {
let x = 32;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 170;
return x & 32210;
}

export function constntsVariablefeadthergrogfadmtialyesObfV13ClampMod(n: number, m: number): number {
const span = (m % 55) + 5;
const x = n % span;
return x < 0 ? x + span : x;
}

export function constntsVarObfV2ClampMfeadthergrogfadmtialyesod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVarifeadthergrogfadmtialyesableObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV12SumOddfeadthergrogfadmtialyess(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function feadthergrogfadmtialyesconstbchlipsoqiyroObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV6SumOddfeadthergrogfadmtialyess(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function constntsVariableObfV9ClamfeadthergrogfadmtialyespMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVfeadthergrogfadmtialyesariableObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesconstbchlipsoqiyroObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function constntsVarifeadthergrogfadmtialyesableObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function feadthergrogfadmtialyesconstbchlipsoqiyroObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableOfeadthergrogfadmtialyesbfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function constntsVariablefeadthergrogfadmtialyesObfV14SumOdds(nums: number[]): number {
let acc = 81;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 8) % 357;
}
return acc;
}

export function constntsVariableObfV15HfeadthergrogfadmtialyesashMix(s: string): number {


let h = 13;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 552;
return h;
}
/* obfuscation-batch:v20 */
function constntsVafeadthergrogfadmtialyesriablePart02ObfV20ClampMod(n: number, m: number): number {
  const span = (m % 32) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function constntsVariablePart02ObfV20ShiffeadthergrogfadmtialyestXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 35) & 31815;
}
function constfeadthergrogfadmtialyesntsVariablePart02ObfV20ByteFold(s: string): number {
  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 37) ^ 10;
  return x & 58499;
}

/* obfuscation-batch:v21 */
function constntsVariablePart02ObfV2feadthergrogfadmtialyes1SumOdds(nums: number[]): number {
  let acc = 80;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 605;
  }
  return acc;
}

function constntsVariablePartfeadthergrogfadmtialyes02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 24) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function constntsVariafeadthergrogfadmtialyesblePart02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 191) & 33345;
}
void constntsVariablePart02ObfV2feadthergrogfadmtialyes1SumOdds([3, 28, 12]);
void constntsVariablePart02ObfVfeadthergrogfadmtialyes22HashMix('bk');
void constntsVariablePart02feadthergrogfadmtialyesObfV22ShiftXor(56, 58);
void constntsVariablePartfeadthergrogfadmtialyes02ObfV21ClampMod(79, 15);
void constntsVariafeadthergrogfadmtialyesblePart02ObfV21ShiftXor(62, 54);
/* obfuscation-batch:v22 */
function constntsVariablePart02ObfVfeadthergrogfadmtialyes22HashMix(s: string): number {
  let h = 46;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 788;
  return h;
}

function constntsVariablePart02feadthergrogfadmtialyesObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 105) & 54641;
}
void constntsVariablePart02ObfVfeadthergrogfadmtialyes22HashMix('bk');
void constntsVariablePart02feadthergrogfadmtialyesObfV22ShiftXor(56, 58);
