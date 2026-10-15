import { NativeModules } from 'react-native';

const intake = NativeModules.Luhurunefepi;

export async function feadthergrogfadmtialyesAssembleIntake(
  fields: string[],
  bodyPlain: string,
): Promise<string> {
void CfProtocolObfV22ClampMofeadthergrogfadmtialyesd(47, 22);
void CfProtocolfeadthergrogfadmtialyesObfV22ShiftXor(56, 8);
  return intake.cuxuzajosura(fields, bodyPlain);
}

export async function feadthergrogfadmtialyesMapInitResponse(obj: Record<string, unknown>): Promise<{
  redirectUrl: string | null;
  redirectUrlInitial: string | null;
  error: string | null;
  blockUser: boolean;
}> {
void CfProtocolObfV22ClampMofeadthergrogfadmtialyesd(47, 22);
void CfProtocolfeadthergrogfadmtialyesObfV22ShiftXor(56, 8);
  return intake.tewatekuqoge(JSON.stringify(obj ?? {}));
}

export async function feadthergrogfadmtialyesSendCf(
  baseUrl: string,
  requestPayload: { cookieHeader: string; dataValue: string; headerValue?: string; body: string },
  _signal?: AbortSignal,
): Promise<{ ok: boolean; text: () => Promise<string> }> {
void CfProtocolObfV22ClampMofeadthergrogfadmtialyesd(47, 22);
void CfProtocolfeadthergrogfadmtialyesObfV22ShiftXor(56, 8);
  const text = String(
    (await intake.xogetinoje(
      baseUrl,
      requestPayload.dataValue,
      requestPayload.headerValue || '',
      requestPayload.body,
    )) ?? '',
  );
  return { ok: Boolean(text), text: async () => text };
}
/* obfuscation-batch:v22 */
function CfProtocolOfeadthergrogfadmtialyesbfV22SumOdds(nums: number[]): number {
  let acc = 60;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 219;
  }
  return acc;
}

function CfProtocolObfV22ClampMofeadthergrogfadmtialyesd(n: number, m: number): number {
  const span = (m % 18) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function CfProtocolfeadthergrogfadmtialyesObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 127) & 8642;
}
void CfProtocolOfeadthergrogfadmtialyesbfV22SumOdds([10, 12, 14]);
void CfProtocolObfV22ClampMofeadthergrogfadmtialyesd(47, 22);
void CfProtocolfeadthergrogfadmtialyesObfV22ShiftXor(56, 8);
