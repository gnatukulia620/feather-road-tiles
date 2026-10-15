/* autosetup-split:v1 */

export function feadthergrogfadmtialyesViewportHostObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 126) & 41627;
}

export function feadthergrogfadmtialyesViewportHostObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function feadthergrogfadmtialyesViewportHostObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function feadthergrogfadmtialyesViewportHostObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesViewportHostObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesViewportHostObfV15SumOdds(nums: number[]): number {
let acc = 84;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 16) % 392;
}
return acc;
}
/* obfuscation-batch:v17 */
function ViewfeadthergrogfadmtialyesportHostPart01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 70) & 38126;
}
function ViewportHostfeadthergrogfadmtialyesPart01ObfV17ByteFold(s: string): number {
  let x = 51;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) ^ 64;
  return x & 6293;
}
function ViewportHostPart01OfeadthergrogfadmtialyesbfV17HashMix(s: string): number {
  let h = 48;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 700;
  return h;
}
function ViewportHostPart01ObfV17SumOfeadthergrogfadmtialyesdds(nums: number[]): number {
  let acc = 8;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 630;
  }
  return acc;
}
void ViewfeadthergrogfadmtialyesportHostPart01ObfV17ShiftXor(3, 38);
void ViewportHostfeadthergrogfadmtialyesPart01ObfV17ByteFold('fpq');
void ViewportHostPart01OfeadthergrogfadmtialyesbfV17HashMix('vj');
void ViewportHostPart01ObfV17SumOfeadthergrogfadmtialyesdds([21, 25, 6]);
/* obfuscation-batch:v18 */
function ViewportHfeadthergrogfadmtialyesostPart01ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 33) & 16851;
}
function VifeadthergrogfadmtialyesewportHostPart01ObfV18ByteFold(s: string): number {
  let x = 68;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) ^ 99;
  return x & 61899;
}
function ViewportHostPart01ObfV1feadthergrogfadmtialyes8HashMix(s: string): number {
  let h = 82;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 7) % 780;
  return h;
}
void ViewportHfeadthergrogfadmtialyesostPart01ObfV18ShiftXor(81, 38);
void VifeadthergrogfadmtialyesewportHostPart01ObfV18ByteFold('qqf');
void ViewportHostPart01ObfV1feadthergrogfadmtialyes8HashMix('fv');
/* obfuscation-batch:v19 */
function ViefeadthergrogfadmtialyeswportHostPart01ObfV19SumOdds(nums: number[]): number {
  let acc = 33;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 280;
  }
  return acc;
}
function ViewportHostPart01ObfV19feadthergrogfadmtialyesClampMod(n: number, m: number): number {
  const span = (m % 53) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function ViewportHofeadthergrogfadmtialyesstPart01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 94) & 6874;
}
function ViewpfeadthergrogfadmtialyesortHostPart01ObfV19ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 104;
  return x & 6879;
}
/* obfuscation-batch:v20 */
function ViewportHostPart01ObfV20ShiftXfeadthergrogfadmtialyesor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 38) & 43549;
}
function ViewportHostPart01feadthergrogfadmtialyesObfV20ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 232;
  return x & 51751;
}

/* obfuscation-batch:v21 */
function ViewfeadthergrogfadmtialyesportHostPart01ObfV21HashMix(s: string): number {
  let h = 70;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 157;
  return h;
}

function ViewportHostPart01ObfeadthergrogfadmtialyesfV21SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 795;
  }
  return acc;
}
void ViewportHostPart01ObfVfeadthergrogfadmtialyes22ShiftXor(36, 41);
void ViewportHostPart01ObfV22ByteFofeadthergrogfadmtialyesld('u7');
void ViewfeadthergrogfadmtialyesportHostPart01ObfV21HashMix('n9db');
void ViewportHostPart01ObfeadthergrogfadmtialyesfV21SumOdds([27, 23, 8]);
/* obfuscation-batch:v22 */
function ViewportHostPart01ObfVfeadthergrogfadmtialyes22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 129) & 56647;
}

function ViewportHostPart01ObfV22ByteFofeadthergrogfadmtialyesld(s: string): number {
  let x = 74;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) & 65535;
  return x;
}
void ViewportHostPart01ObfVfeadthergrogfadmtialyes22ShiftXor(36, 41);
void ViewportHostPart01ObfV22ByteFofeadthergrogfadmtialyesld('u7');
