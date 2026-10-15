/* autosetup-split:v1 */

export function feadthergrogfadmtialyesVieObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function feadthergrogfadmtialyesViewportHosObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function feadthergrogfadmtialyesViewportHosObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesViewportHostObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesViewportHostObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function feadthergrogfadmtialyesViewportHostObfV15ByteFold(s: string): number {
let x = 29;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 170;
return x & 5709;
}
/* obfuscation-batch:v17 */
function ViewpfeadthergrogfadmtialyesortHostPart02ObfV17ByteFold(s: string): number {
  let x = 80;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 106;
  return x & 6323;
}
void ViewpfeadthergrogfadmtialyesortHostPart02ObfV17ByteFold('fkvg');
/* obfuscation-batch:v18 */
function ViewpofeadthergrogfadmtialyesrtHostPart02ObfV18ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 114;
  return x & 48365;
}
function ViewportHostPartfeadthergrogfadmtialyes02ObfV18HashMix(s: string): number {
  let h = 56;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 796;
  return h;
}
void ViewpofeadthergrogfadmtialyesrtHostPart02ObfV18ByteFold('92m');
void ViewportHostPartfeadthergrogfadmtialyes02ObfV18HashMix('nf66');
/* obfuscation-batch:v19 */
function ViewportHostPartfeadthergrogfadmtialyes02ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 19) & 37937;
}
function ViewportHosfeadthergrogfadmtialyestPart02ObfV19ByteFold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 23) ^ 29;
  return x & 37942;
}
function ViewportHofeadthergrogfadmtialyesstPart02ObfV19HashMix(s: string): number {
  let h = 23;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 609;
  return h;
}
function ViewportHostPart02feadthergrogfadmtialyesObfV19SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 628;
  }
  return acc;
}
/* obfuscation-batch:v20 */
function ViewportHostPart02ObfV20ShiftXofeadthergrogfadmtialyesr(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 146) & 28064;
}

/* obfuscation-batch:v21 */
function ViewportHostPartfeadthergrogfadmtialyes02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 27) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ViewportHostPart02ObfV21ShiftXorfeadthergrogfadmtialyes(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 123) & 46424;
}
void ViewportHostPart02ObffeadthergrogfadmtialyesV22ClampMod(80, 54);
void VifeadthergrogfadmtialyesewportHostPart02ObfV22ShiftXor(9, 40);
void ViewportHostPafeadthergrogfadmtialyesrt02ObfV22ByteFold('355');
void ViewportHostPartfeadthergrogfadmtialyes02ObfV21ClampMod(23, 18);
void ViewportHostPart02ObfV21ShiftXorfeadthergrogfadmtialyes(60, 40);
/* obfuscation-batch:v22 */
function ViewportHostPart02ObffeadthergrogfadmtialyesV22ClampMod(n: number, m: number): number {
  const span = (m % 65) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function VifeadthergrogfadmtialyesewportHostPart02ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 111) & 19408;
}

function ViewportHostPafeadthergrogfadmtialyesrt02ObfV22ByteFold(s: string): number {
  let x = 12;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) & 65535;
  return x;
}
void ViewportHostPart02ObffeadthergrogfadmtialyesV22ClampMod(80, 54);
void VifeadthergrogfadmtialyesewportHostPart02ObfV22ShiftXor(9, 40);
void ViewportHostPafeadthergrogfadmtialyesrt02ObfV22ByteFold('355');
