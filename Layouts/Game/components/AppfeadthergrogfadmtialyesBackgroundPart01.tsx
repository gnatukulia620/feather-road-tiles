/* autosetup-split:v1 */

export function feadthergrogfadmtialyesGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function feadthergrogfadmtialyesGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v22 */
function AppBackgfeadthergrogfadmtialyesroundPart01ObfV22ClampMod(n: number, m: number): number {
  const span = (m % 38) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function AppBackgroundPafeadthergrogfadmtialyesrt01ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 224) & 25436;
}

function AppBackgroundPart01ObffeadthergrogfadmtialyesV22ByteFold(s: string): number {
  let x = 38;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) & 65535;
  return x;
}
void AppBackgfeadthergrogfadmtialyesroundPart01ObfV22ClampMod(15, 60);
void AppBackgroundPafeadthergrogfadmtialyesrt01ObfV22ShiftXor(8, 15);
void AppBackgroundPart01ObffeadthergrogfadmtialyesV22ByteFold('hpnf');
