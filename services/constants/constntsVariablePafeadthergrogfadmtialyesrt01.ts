/* autosetup-split:v1 */

export function feadthergrogfadmtialyesClampSpan(n: number, lo: number, hi: number): number {

return n < lo ? lo : n > hi ? hi : n;
}

export function feadthergrogfadmtialyesMixSeed(a: number, b: number): number {

return ((a % (b || 1)) + b) % (b || 1);
}

export function confeadthergrogfadmtialyesstntsVariableObfV16ShiftXor(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 149) & 21603;
}

export function constntsVarObfV2SumOfeadthergrogfadmtialyesdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function constfeadthergrogfadmtialyesntsVariableObfV7ClampMod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV10feadthergrogfadmtialyesSumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function constntsVariableObfV9SumOddfeadthergrogfadmtialyess(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function constntsfeadthergrogfadmtialyesVariableObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObffeadthergrogfadmtialyesV15ShiftXor(n: number, k: number): number {

const x = (n ^ k) << 1;
return (x ^ 210) & 65091;
}

export function constntsVariablePart01ObffeadthergrogfadmtialyesV17ShiftXor(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 19) & 40331;
}

export function constntsVfeadthergrogfadmtialyesariablePart01ObfV17ByteFold(s: string): number {
let x = 44;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) ^ 203;
return x & 23256;
}

export function constntsVariafeadthergrogfadmtialyesblePart01ObfV17HashMix(s: string): number {

let h = 19;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 546;
return h;
}

export function confeadthergrogfadmtialyesstntsVariablePart01ObfV17SumOdds(nums: number[]): number {
let acc = 76;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 537;
}
return acc;
}

export function constntsVariablePart01ObfV18ByteFoldfeadthergrogfadmtialyes(s: string): number {
let x = 61;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) ^ 79;
return x & 24826;
}

export function constntsVafeadthergrogfadmtialyesriablePart01ObfV18HashMix(s: string): number {

let h = 3;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 184;
return h;
}

export function constntsVariabfeadthergrogfadmtialyeslePart01ObfV18SumOdds(nums: number[]): number {

let acc = 28;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 21) % 295;
}
return acc;
}

export function consfeadthergrogfadmtialyestntsVariablePart01ObfV19ClampMod(n: number, m: number): number {
const span = (m % 47) + 8;
const x = n % span;
return x < 0 ? x + span : x;
}

export function constntsVariablefeadthergrogfadmtialyesPart01ObfV19ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 69) & 47982;
}

export function constntfeadthergrogfadmtialyessVariablePart01ObfV19ByteFold(s: string): number {
let x = 50;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) ^ 79;
return x & 47987;
}

export function constntsVarifeadthergrogfadmtialyesablePart01ObfV19HashMix(s: string): number {
let h = 39;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 789;
return h;
}
/* obfuscation-batch:v20 */
function constntsfeadthergrogfadmtialyesVariablePart01ObfV20SumOdds(nums: number[]): number {
  let acc = 61;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 321;
  }
  return acc;
}
function constntsVariablePart01ObfVfeadthergrogfadmtialyes20ClampMod(n: number, m: number): number {
  const span = (m % 8) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function constntsVariablePart01ObfV20ShiffeadthergrogfadmtialyestXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 213) & 49410;
}
function constntsVfeadthergrogfadmtialyesariablePart01ObfV20ByteFold(s: string): number {
  let x = 44;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) ^ 228;
  return x & 11236;
}


/* restored-exports */
export function constntsVariablefeadthergrogfadmtialyesPart01ObfV13ByteFold(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function consfeadthergrogfadmtialyestntsVariableObfV10HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function feadthergrogfadmtialyesFoldRange(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function constntsVariableObfV9feadthergrogfadmtialyesHashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function constntsfeadthergrogfadmtialyesVariableObfV5SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

/* obfuscation-batch:v21 */
function constntsVariablePart01ObfVfeadthergrogfadmtialyes21SumOdds(nums: number[]): number {
  let acc = 69;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 39) % 445;
  }
  return acc;
}

function constntsVariablfeadthergrogfadmtialyesePart01ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 49) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function constntsVariablefeadthergrogfadmtialyesPart01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 109) & 21517;
}

function cofeadthergrogfadmtialyesnstntsVariablePart01ObfV21ByteFold(s: string): number {
  let x = 16;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 65535;
  return x;
}
void constntsVariablePart01ObfVfeadthergrogfadmtialyes21SumOdds([12, 18, 13]);
void constntsVariablePart01ObfeadthergrogfadmtialyesfV22HashMix('a3jp');
void constntsVfeadthergrogfadmtialyesariablePart01ObfV22SumOdds([20, 29, 27]);
void constntsVariablePart01ObfV22ByteFfeadthergrogfadmtialyesold('7s');
void constntsVariablfeadthergrogfadmtialyesePart01ObfV21ClampMod(81, 65);
void constntsVariablefeadthergrogfadmtialyesPart01ObfV21ShiftXor(18, 38);
void cofeadthergrogfadmtialyesnstntsVariablePart01ObfV21ByteFold('m4');
/* obfuscation-batch:v22 */
function constntsVariablePart01ObfeadthergrogfadmtialyesfV22HashMix(s: string): number {
  let h = 74;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 35) % 298;
  return h;
}

function constntsVfeadthergrogfadmtialyesariablePart01ObfV22SumOdds(nums: number[]): number {
  let acc = 74;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 298;
  }
  return acc;
}

function constntsVariablePart01ObfV22ByteFfeadthergrogfadmtialyesold(s: string): number {
  let x = 74;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) & 65535;
  return x;
}
void constntsVariablePart01ObfeadthergrogfadmtialyesfV22HashMix('a3jp');
void constntsVfeadthergrogfadmtialyesariablePart01ObfV22SumOdds([20, 29, 27]);
void constntsVariablePart01ObfV22ByteFfeadthergrogfadmtialyesold('7s');
