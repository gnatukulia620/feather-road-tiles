/* autosetup-split:v1 */

export function feadthergrogfadmtialyesSignalHarvestObfV14HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 551;
return h;
}

export function feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(n: number, m: number): number {
const span = (m % 12) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesSignalHarvestObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function feadthergrogfadmtialyesSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function feadthergrogfadmtialyesSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesSignalHarvestPart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function feadthergrogfadmtialyesSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function feadthergrogfadmtialyesSignalHarvestObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function feadthergrogfadmtialyesSignalHarvestObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesSignalHarvestObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function feadthergrogfadmtialyesSignalHarvestObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function feadthergrogfadmtialyesSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesSignalHarvestPart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesSignalHarvestObfV13ByteFold(s: string): number {
let x = 38;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 207;
return x & 5952;
}

export function feadthergrogfadmtialyesSignalHarvestPart01ObfV14SumOdds(nums: number[]): number {
let acc = 26;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 607;
}
return acc;
}

export function feadthergrogfadmtialyesSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function feadthergrogfadmtialyesFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function feadthergrogfadmtialyesSignalHarvestPart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function feadthergrogfadmtialyesSignalHarvestPart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function feadthergrogfadmtialyesSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function feadthergrogfadmtialyesSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function feadthergrogfadmtialyesSignalHarvestObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function feadthergrogfadmtialyesSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 164) & 51888;
}

export function feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 130) & 32633;
}

export function feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(n: number, m: number): number {
const span = (m % 32) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesSignalHarvestObfV16ByteFold(s: string): number {
let x = 83;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 92;
return x & 34561;
}
/* obfuscation-batch:v17 */
function SignalHarvesfeadthergrogfadmtialyestPart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 44) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarvestPart01ObfV17ShiftXfeadthergrogfadmtialyesor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 184) & 4634;
}
function SignalHarvefeadthergrogfadmtialyesstPart01ObfV17ByteFold(s: string): number {
  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) ^ 62;
  return x & 31693;
}
/* obfuscation-batch:v18 */
function SignalHarvestPart01feadthergrogfadmtialyesObfV18HashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 646;
  return h;
}
function SignalHarvestPart01ObffeadthergrogfadmtialyesV18SumOdds(nums: number[]): number {
  let acc = 9;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 42) % 581;
  }
  return acc;
}
function SignalfeadthergrogfadmtialyesHarvestPart01ObfV18ClampMod(n: number, m: number): number {
  const span = (m % 24) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarvestPart01feadthergrogfadmtialyesObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 73) & 12846;
}
/* obfuscation-batch:v19 */
function SfeadthergrogfadmtialyesignalHarvestPart01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 131) & 11443;
}
function SignalHarvefeadthergrogfadmtialyesstPart01ObfV19ByteFold(s: string): number {
  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 141;
  return x & 11448;
}
/* obfuscation-batch:v20 */
function SignalHarvestPfeadthergrogfadmtialyesart01ObfV20ByteFold(s: string): number {
  let x = 43;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 203;
  return x & 55239;
}
void SignalHarvestPfeadthergrogfadmtialyesart01ObfV20ByteFold('27');

/* obfuscation-batch:v21 */
function SignalHarvestPart01ObfV21HfeadthergrogfadmtialyesashMix(s: string): number {
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 721;
  return h;
}

function SignalfeadthergrogfadmtialyesHarvestPart01ObfV21SumOdds(nums: number[]): number {
  let acc = 53;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 776;
  }
  return acc;
}

function SignalHarvestPart01ObfVfeadthergrogfadmtialyes21ClampMod(n: number, m: number): number {
  const span = (m % 28) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void SifeadthergrogfadmtialyesgnalHarvestPart01ObfV22SumOdds([18, 22, 24]);
void SignalHafeadthergrogfadmtialyesrvestPart01ObfV22ClampMod(17, 40);
void SignalHarvestPafeadthergrogfadmtialyesrt01ObfV22ShiftXor(10, 70);
void SignalHarvestPart01ObfV21HfeadthergrogfadmtialyesashMix('va');
void SignalfeadthergrogfadmtialyesHarvestPart01ObfV21SumOdds([23, 18, 25]);
void SignalHarvestPart01ObfVfeadthergrogfadmtialyes21ClampMod(31, 72);
/* obfuscation-batch:v22 */
function SifeadthergrogfadmtialyesgnalHarvestPart01ObfV22SumOdds(nums: number[]): number {
  let acc = 44;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 36) % 709;
  }
  return acc;
}

function SignalHafeadthergrogfadmtialyesrvestPart01ObfV22ClampMod(n: number, m: number): number {
  const span = (m % 41) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function SignalHarvestPafeadthergrogfadmtialyesrt01ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 15) & 34184;
}
void SifeadthergrogfadmtialyesgnalHarvestPart01ObfV22SumOdds([18, 22, 24]);
void SignalHafeadthergrogfadmtialyesrvestPart01ObfV22ClampMod(17, 40);
void SignalHarvestPafeadthergrogfadmtialyesrt01ObfV22ShiftXor(10, 70);
