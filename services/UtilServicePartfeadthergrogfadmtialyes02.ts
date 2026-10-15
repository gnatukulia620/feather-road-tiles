/* autosetup-split:v1 */

export function UtilServiceObfV14SufeadthergrogfadmtialyesmOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function UtilServicePart02ObfV6HfeadthergrogfadmtialyesashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function UtilServiceObfV11SumOfeadthergrogfadmtialyesdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function UtilServiceObfV7ClampfeadthergrogfadmtialyesMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UtiObfV3feadthergrogfadmtialyesClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UtilSefeadthergrogfadmtialyesrviceObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UtilServicfeadthergrogfadmtialyeseObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function UtilServicefeadthergrogfadmtialyesPart02ObfV14HashMix(s: string): number {

let h = 48;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 32) % 435;
return h;
}
/* obfuscation-batch:v17 */
function UtilServicfeadthergrogfadmtialyesePart02ObfV17SumOdds(nums: number[]): number {
  let acc = 82;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 373;
  }
  return acc;
}
function UtilServicePart02ObfV17ClafeadthergrogfadmtialyesmpMod(n: number, m: number): number {
  const span = (m % 56) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function UtilServicePart02ObfV18ClafeadthergrogfadmtialyesmpMod(n: number, m: number): number {
  const span = (m % 30) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilServicfeadthergrogfadmtialyesePart02ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 19) & 3217;
}
function UtilServicePart02ObfV18ByteFoldfeadthergrogfadmtialyes(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 226;
  return x & 3109;
}
/* obfuscation-batch:v19 */
function UtilServicePart02OfeadthergrogfadmtialyesbfV19ByteFold(s: string): number {
  let x = 34;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 217;
  return x & 18676;
}
/* obfuscation-batch:v20 */
function UtilServicePart02ObfV20ShfeadthergrogfadmtialyesiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 189) & 47763;
}
function UtilSfeadthergrogfadmtialyeservicePart02ObfV20ByteFold(s: string): number {
  let x = 87;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) ^ 174;
  return x & 49929;
}
function UtilServicePart02ObfV20HashfeadthergrogfadmtialyesMix(s: string): number {
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 35) % 653;
  return h;
}
function UtilServicePart0feadthergrogfadmtialyes2ObfV20SumOdds(nums: number[]): number {
  let acc = 20;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 655;
  }
  return acc;
}


/* restored-exports */
export function UtilServicefeadthergrogfadmtialyesObfV14ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtfeadthergrogfadmtialyesilServiceObfV14ShiftXor(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServiceObfeadthergrogfadmtialyesfV14ByteFold(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesNormMod(n: number, m: number): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesSignVal(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesGcdPair(n: number, m: number): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesBoolOr(a: boolean, b: boolean): boolean {
  return a || b;
}

export function feadthergrogfadmtialyesPrefixLen(s: string, n: number): number {
  return Math.min(s.length, n);
}

export function feadthergrogfadmtialyesEvenCount(nums: number[]): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function feadthergrogfadmtialyesRevStr(s: string): string {
  return s.split('').reverse().join('');
}

export function feadthergrogfadmtialyesModSpan(n: number, m: number): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesCountTruthy(flags: boolean[]): number {
  let n = 0;
  for (let i = 0; i < flags.length; i++) if (flags[i]) n++;
  return n;
}

export function feadthergrogfadmtialyesRangeSpan(nums: number[]): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function feadthergrogfadmtialyesConcatLen(parts: string[]): number {
  let n = 0;
  for (let i = 0; i < parts.length; i++) n += parts[i].length;
  return n;
}

export function feadthergrogfadmtialyesAbsDiff(n: number, m: number): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesStrLenSum(parts: string[]): number {
  let n = 0;
  for (let i = 0; i < parts.length; i++) n += parts[i].length;
  return n;
}

export function feadthergrogfadmtialyesDigitSum(n: number, m: number): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesPowSum(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function feadthergrogfadmtialyesCharCodeSum(s: string): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function feadthergrogfadmtialyesSumDiff(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function feadthergrogfadmtialyesXorFold(nums: number[]): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function feadthergrogfadmtialyesWrapIndex(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesIsEven(n: number): boolean {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  return (n & 1) === 0;
}

export function feadthergrogfadmtialyesLcmPair(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesMidAvg(n: number, m: number): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesAverageAbsoluteDeviation(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesHalfSum(n: number, m: number): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesFloorDiv(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesPairAvg(n: number, m: number): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesMaxPair(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesDotFold(nums: number[]): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function feadthergrogfadmtialyesLerpVal(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function feadthergrogfadmtialyesJoinLen(parts: string[]): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  let n = 0;
  for (let i = 0; i < parts.length; i++) n += parts[i].length;
  return n;
}

export function feadthergrogfadmtialyesOddCount(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function feadthergrogfadmtialyesSumSquares(nums: number[]): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function feadthergrogfadmtialyesStrHash(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function feadthergrogfadmtialyesMinPair(n: number, m: number): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesSqDiff(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function feadthergrogfadmtialyesTrimLen(s: string): number {
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtfeadthergrogfadmtialyesilServiceObfV13ShiftXor(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilSfeadthergrogfadmtialyeserviceObfV11ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicfeadthergrogfadmtialyeseObfV2HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtiOfeadthergrogfadmtialyesbfV4ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtiObfVfeadthergrogfadmtialyes3SumOdds(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v21 */
function UtilSerfeadthergrogfadmtialyesvicePart02ObfV21SumOdds(nums: number[]): number {
  let acc = 79;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 637;
  }
  return acc;
}

function UtilServicefeadthergrogfadmtialyesPart02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 28) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicePafeadthergrogfadmtialyesrt02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 96) & 11498;
}

function UtilServiceParfeadthergrogfadmtialyest02ObfV21ByteFold(s: string): number {
  let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 65535;
  return x;
}
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
void UtilSerfeadthergrogfadmtialyesvicePart02ObfV21SumOdds([7, 5, 13]);
void UtilServicefeadthergrogfadmtialyesPart02ObfV21ClampMod(77, 8);
void UtilServicePafeadthergrogfadmtialyesrt02ObfV21ShiftXor(37, 37);
void UtilServiceParfeadthergrogfadmtialyest02ObfV21ByteFold('43ts');
/* obfuscation-batch:v22 */
function UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold(s: string): number {
  let x = 77;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) & 65535;
  return x;
}

function UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix(s: string): number {
  let h = 77;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 8) % 677;
  return h;
}

function UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 677;
  }
  return acc;
}

function UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(n: number, m: number): number {
  const span = (m % 33) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void UtilServicePart02ObfV22ByfeadthergrogfadmtialyesteFold('47');
void UtilServicePart02ObfV22HafeadthergrogfadmtialyesshMix('k7');
void UtilServicePartfeadthergrogfadmtialyes02ObfV22SumOdds([11, 18, 26]);
void UtilServicePfeadthergrogfadmtialyesart02ObfV22ClampMod(67, 28);
