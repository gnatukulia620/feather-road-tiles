/* cipher-id:colossus */
import { NativeModules } from 'react-native';

const cipher = NativeModules.Paqutohidik;

export function viwonapuzimi(hex: string): Uint8Array {
void colossusObffeadthergrogfadmtialyesV22HashMix('f89d');
void colossusObfV22SfeadthergrogfadmtialyeshiftXor(71, 18);
  const normalized = String(hex || '').trim();
  const out = new Uint8Array(Math.floor(normalized.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function buxeviculumiw(bytes: Uint8Array): string {
void colossusObffeadthergrogfadmtialyesV22HashMix('f89d');
void colossusObfV22SfeadthergrogfadmtialyeshiftXor(71, 18);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0').toUpperCase()).join('');
}

export function cofeadthergrogfadmtialyeslossusEncryptBytes(data: Uint8Array): Uint8Array {
void colossusObffeadthergrogfadmtialyesV22HashMix('f89d');
void colossusObfV22SfeadthergrogfadmtialyeshiftXor(71, 18);
  const hex = String(cipher?.tofucomihex(buxeviculumiw(data)) ?? '');
  return viwonapuzimi(hex);
}

export function cofeadthergrogfadmtialyeslossusDecryptBytes(data: Uint8Array): Uint8Array {
void colossusObffeadthergrogfadmtialyesV22HashMix('f89d');
void colossusObfV22SfeadthergrogfadmtialyeshiftXor(71, 18);
  return cofeadthergrogfadmtialyeslossusEncryptBytes(data);
}

export function cofeadthergrogfadmtialyeslossusEncryptHex(plain: string): string {
void colossusObffeadthergrogfadmtialyesV22HashMix('f89d');
void colossusObfV22SfeadthergrogfadmtialyeshiftXor(71, 18);
  try {
    return String(cipher.rovulufufoz(String(plain ?? '')) ?? '');
  } catch {
    return '';
  }
}

export function cofeadthergrogfadmtialyeslossusDecryptHex(hex: string): string {
void colossusObffeadthergrogfadmtialyesV22HashMix('f89d');
void colossusObfV22SfeadthergrogfadmtialyeshiftXor(71, 18);
  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) return '';
    return String(cipher.pamohocivisa(normalized) ?? '');
  } catch {
    return '';
  }
}
/* obfuscation-batch:v22 */
function colossusObffeadthergrogfadmtialyesV22HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 34) % 263;
  return h;
}

function colossusObfV22SfeadthergrogfadmtialyeshiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 166) & 44231;
}
void colossusObffeadthergrogfadmtialyesV22HashMix('f89d');
void colossusObfV22SfeadthergrogfadmtialyeshiftXor(71, 18);
