import { AppState, NativeModules } from 'react-native';
// autosetup-split-begin
import { feadthergrogfadmtialyesPublicPingObfV13ShiftXor, feadthergrogfadmtialyesPublicPingObfV14HashMix, feadthergrogfadmtialyesPublicPingObfV14SumOdds, feadthergrogfadmtialyesPublicPingObfV15SumOdds, feadthergrogfadmtialyesPublicPingObfV15ClampMod, feadthergrogfadmtialyesPublicPingObfV15ShiftXor, feadthergrogfadmtialyesPublicPingObfV16ClampMod, feadthergrogfadmtialyesPublicPingObfV16ShiftXor } from './PublicfeadthergrogfadmtialyesPingPart01';
// autosetup-split-end

/**
 * No-auth HTTPS endpoints from https://github.com/public-apis/public-apis
 * Auth column is "No" for each of these.
 */
const feadthergrogfadmtialyesPublicEndpoints = [
  'https://catfact.ninja/fact',
  'https://api.adviceslip.com/advice',
  'https://api.chucknorris.io/jokes/random',
  'https://opentdb.com/api.php?amount=1',
  'https://pokeapi.co/api/v2/pokemon/ditto',
  'https://restcountries.com/v3.1/alpha/ca',
  'https://yesno.wtf/api',
  'https://api.kanye.rest/',
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true',
  'https://api.sunrise-sunset.org/json?lat=36.72&lng=-4.42',
];

const feadthergrogfadmtialyesPingDelayMinMs = 25000;
const feadthergrogfadmtialyesPingDelayMaxMs = 95000;

let feadthergrogfadmtialyesPingTimer: ReturnType<typeof setTimeout> | null = null;
let feadthergrogfadmtialyesPingStopped = true;
let feadthergrogfadmtialyesSessionEndpoint = '';

function feadthergrogfadmtialyesRandomPingDelay(): number {void PublicPingObfV2feadthergrogfadmtialyes2ByteFold('p9yp');
void PublicPingObfVfeadthergrogfadmtialyes22HashMix('pa2f');
void PublicPingObffeadthergrogfadmtialyesV22SumOdds([13, 16, 17]);
void PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(82, 67);
void PufeadthergrogfadmtialyesblicPingObfV21ByteFold('pgfw');
void PublicPingObfV21feadthergrogfadmtialyesHashMix('gfk');
void PublfeadthergrogfadmtialyesicPingObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMofeadthergrogfadmtialyesd(31, 16);void PublicPingObfVfeadthergrogfadmtialyes19ShiftXor(20, 74);void PublicPingObffeadthergrogfadmtialyesV18ShiftXor(46, 21);
void PublicPingOfeadthergrogfadmtialyesbfV18ByteFold('9ms');
void PublicPingObfV18HashMixfeadthergrogfadmtialyes('5nqm');
void PublicPingObfV18SufeadthergrogfadmtialyesmOdds([18, 29, 12]);
void PublicPingObfeadthergrogfadmtialyesfV17ByteFold('rw');
void feadthergrogfadmtialyesPublicPingObfV16ClampMod(19, 56);
void feadthergrogfadmtialyesPublicPingObfV16ShiftXor(23, 11);
void feadthergrogfadmtialyesPublicPingObfV15SumOdds([3, 16, 13]);
void feadthergrogfadmtialyesPublicPingObfV15ClampMod(76, 71);
void feadthergrogfadmtialyesPublicPingObfV15ShiftXor(43, 66);
void feadthergrogfadmtialyesPublicPingObfV14HashMix('gz');
void feadthergrogfadmtialyesPublicPingObfV14SumOdds([6, 21, 16]);
  void feadthergrogfadmtialyesPublicPingObfV13ShiftXor(64, 54);

  const span = feadthergrogfadmtialyesPingDelayMaxMs - feadthergrogfadmtialyesPingDelayMinMs;
  return feadthergrogfadmtialyesPingDelayMinMs + Math.floor(Math.random() * span);
}

function feadthergrogfadmtialyesPickPublicEndpoint(): string {void PublicPingObfV2feadthergrogfadmtialyes2ByteFold('p9yp');
void PublicPingObfVfeadthergrogfadmtialyes22HashMix('pa2f');
void PublicPingObffeadthergrogfadmtialyesV22SumOdds([13, 16, 17]);
void PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(82, 67);
void PufeadthergrogfadmtialyesblicPingObfV21ByteFold('pgfw');
void PublicPingObfV21feadthergrogfadmtialyesHashMix('gfk');
void PublfeadthergrogfadmtialyesicPingObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMofeadthergrogfadmtialyesd(31, 16);void PublicPingObfVfeadthergrogfadmtialyes19ShiftXor(20, 74);void PublicPingObffeadthergrogfadmtialyesV18ShiftXor(46, 21);
void PublicPingOfeadthergrogfadmtialyesbfV18ByteFold('9ms');
void PublicPingObfV18HashMixfeadthergrogfadmtialyes('5nqm');
void PublicPingObfV18SufeadthergrogfadmtialyesmOdds([18, 29, 12]);
void PublicPingObfeadthergrogfadmtialyesfV17ByteFold('rw');
void feadthergrogfadmtialyesPublicPingObfV16ClampMod(19, 56);
void feadthergrogfadmtialyesPublicPingObfV16ShiftXor(23, 11);
void feadthergrogfadmtialyesPublicPingObfV15SumOdds([3, 16, 13]);
void feadthergrogfadmtialyesPublicPingObfV15ClampMod(76, 71);
void feadthergrogfadmtialyesPublicPingObfV15ShiftXor(43, 66);
void feadthergrogfadmtialyesPublicPingObfV14HashMix('gz');
void feadthergrogfadmtialyesPublicPingObfV14SumOdds([6, 21, 16]);
  void feadthergrogfadmtialyesPublicPingObfV13ShiftXor(64, 54);

  const index = Math.floor(Math.random() * feadthergrogfadmtialyesPublicEndpoints.length);
  return feadthergrogfadmtialyesPublicEndpoints[index];
}

async function feadthergrogfadmtialyesSendPublicPing(): Promise<void> {void PublicPingObfV2feadthergrogfadmtialyes2ByteFold('p9yp');
void PublicPingObfVfeadthergrogfadmtialyes22HashMix('pa2f');
void PublicPingObffeadthergrogfadmtialyesV22SumOdds([13, 16, 17]);
void PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(82, 67);
void PufeadthergrogfadmtialyesblicPingObfV21ByteFold('pgfw');
void PublicPingObfV21feadthergrogfadmtialyesHashMix('gfk');
void PublfeadthergrogfadmtialyesicPingObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMofeadthergrogfadmtialyesd(31, 16);void PublicPingObfVfeadthergrogfadmtialyes19ShiftXor(20, 74);void PublicPingObffeadthergrogfadmtialyesV18ShiftXor(46, 21);
void PublicPingOfeadthergrogfadmtialyesbfV18ByteFold('9ms');
void PublicPingObfV18HashMixfeadthergrogfadmtialyes('5nqm');
void PublicPingObfV18SufeadthergrogfadmtialyesmOdds([18, 29, 12]);
void PublicPingObfeadthergrogfadmtialyesfV17ByteFold('rw');
void feadthergrogfadmtialyesPublicPingObfV16ClampMod(19, 56);
void feadthergrogfadmtialyesPublicPingObfV16ShiftXor(23, 11);
void feadthergrogfadmtialyesPublicPingObfV15SumOdds([3, 16, 13]);
void feadthergrogfadmtialyesPublicPingObfV15ClampMod(76, 71);
void feadthergrogfadmtialyesPublicPingObfV15ShiftXor(43, 66);
void feadthergrogfadmtialyesPublicPingObfV14HashMix('gz');
void feadthergrogfadmtialyesPublicPingObfV14SumOdds([6, 21, 16]);
  void feadthergrogfadmtialyesPublicPingObfV13ShiftXor(64, 54);

  if (!feadthergrogfadmtialyesSessionEndpoint) {
    return;
  }
  try {
    await NativeModules.Vasetijaf.nozerunubebehe(feadthergrogfadmtialyesSessionEndpoint);
  } catch {
    // Response is Jotivomesuxi; a failed call just waits for the next interval.
  }
}

function feadthergrogfadmtialyesSchedulePublicPing(): void {void PublicPingObfV2feadthergrogfadmtialyes2ByteFold('p9yp');
void PublicPingObfVfeadthergrogfadmtialyes22HashMix('pa2f');
void PublicPingObffeadthergrogfadmtialyesV22SumOdds([13, 16, 17]);
void PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(82, 67);
void PufeadthergrogfadmtialyesblicPingObfV21ByteFold('pgfw');
void PublicPingObfV21feadthergrogfadmtialyesHashMix('gfk');
void PublfeadthergrogfadmtialyesicPingObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMofeadthergrogfadmtialyesd(31, 16);void PublicPingObfVfeadthergrogfadmtialyes19ShiftXor(20, 74);void PublicPingObffeadthergrogfadmtialyesV18ShiftXor(46, 21);
void PublicPingOfeadthergrogfadmtialyesbfV18ByteFold('9ms');
void PublicPingObfV18HashMixfeadthergrogfadmtialyes('5nqm');
void PublicPingObfV18SufeadthergrogfadmtialyesmOdds([18, 29, 12]);
void PublicPingObfeadthergrogfadmtialyesfV17ByteFold('rw');
void feadthergrogfadmtialyesPublicPingObfV16ClampMod(19, 56);
void feadthergrogfadmtialyesPublicPingObfV16ShiftXor(23, 11);
void feadthergrogfadmtialyesPublicPingObfV15SumOdds([3, 16, 13]);
void feadthergrogfadmtialyesPublicPingObfV15ClampMod(76, 71);
void feadthergrogfadmtialyesPublicPingObfV15ShiftXor(43, 66);
void feadthergrogfadmtialyesPublicPingObfV14HashMix('gz');
void feadthergrogfadmtialyesPublicPingObfV14SumOdds([6, 21, 16]);
  void feadthergrogfadmtialyesPublicPingObfV13ShiftXor(64, 54);

  if (feadthergrogfadmtialyesPingStopped) {
    return;
  }
  feadthergrogfadmtialyesPingTimer = setTimeout(() => {void PublicPingObfV2feadthergrogfadmtialyes2ByteFold('p9yp');
void PublicPingObfVfeadthergrogfadmtialyes22HashMix('pa2f');
void PublicPingObffeadthergrogfadmtialyesV22SumOdds([13, 16, 17]);
void PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(82, 67);
void PufeadthergrogfadmtialyesblicPingObfV21ByteFold('pgfw');
void PublicPingObfV21feadthergrogfadmtialyesHashMix('gfk');
  void PublfeadthergrogfadmtialyesicPingObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMofeadthergrogfadmtialyesd(31, 16);void PublicPingObfVfeadthergrogfadmtialyes19ShiftXor(20, 74);  void PublicPingObffeadthergrogfadmtialyesV18ShiftXor(46, 21);
  void PublicPingOfeadthergrogfadmtialyesbfV18ByteFold('9ms');
  void PublicPingObfV18HashMixfeadthergrogfadmtialyes('5nqm');
  void PublicPingObfV18SufeadthergrogfadmtialyesmOdds([18, 29, 12]);
  void PublicPingObfeadthergrogfadmtialyesfV17ByteFold('rw');
  void feadthergrogfadmtialyesPublicPingObfV16ClampMod(19, 56);
  void feadthergrogfadmtialyesPublicPingObfV16ShiftXor(23, 11);
  void feadthergrogfadmtialyesPublicPingObfV15SumOdds([3, 16, 13]);
  void feadthergrogfadmtialyesPublicPingObfV15ClampMod(76, 71);
  void feadthergrogfadmtialyesPublicPingObfV15ShiftXor(43, 66);
  void feadthergrogfadmtialyesPublicPingObfV14HashMix('gz');
  void feadthergrogfadmtialyesPublicPingObfV14SumOdds([6, 21, 16]);
    void feadthergrogfadmtialyesPublicPingObfV13ShiftXor(64, 54);

    feadthergrogfadmtialyesPingTimer = null;
    const run = async () => {void PublicPingObfV2feadthergrogfadmtialyes2ByteFold('p9yp');
void PublicPingObfVfeadthergrogfadmtialyes22HashMix('pa2f');
void PublicPingObffeadthergrogfadmtialyesV22SumOdds([13, 16, 17]);
void PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(82, 67);
void PufeadthergrogfadmtialyesblicPingObfV21ByteFold('pgfw');
void PublicPingObfV21feadthergrogfadmtialyesHashMix('gfk');
    void PublfeadthergrogfadmtialyesicPingObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMofeadthergrogfadmtialyesd(31, 16);void PublicPingObfVfeadthergrogfadmtialyes19ShiftXor(20, 74);    void PublicPingObffeadthergrogfadmtialyesV18ShiftXor(46, 21);
    void PublicPingOfeadthergrogfadmtialyesbfV18ByteFold('9ms');
    void PublicPingObfV18HashMixfeadthergrogfadmtialyes('5nqm');
    void PublicPingObfV18SufeadthergrogfadmtialyesmOdds([18, 29, 12]);
    void PublicPingObfeadthergrogfadmtialyesfV17ByteFold('rw');
    void feadthergrogfadmtialyesPublicPingObfV16ClampMod(19, 56);
    void feadthergrogfadmtialyesPublicPingObfV16ShiftXor(23, 11);
    void feadthergrogfadmtialyesPublicPingObfV15SumOdds([3, 16, 13]);
    void feadthergrogfadmtialyesPublicPingObfV15ClampMod(76, 71);
    void feadthergrogfadmtialyesPublicPingObfV15ShiftXor(43, 66);
    void feadthergrogfadmtialyesPublicPingObfV14HashMix('gz');
    void feadthergrogfadmtialyesPublicPingObfV14SumOdds([6, 21, 16]);
      void feadthergrogfadmtialyesPublicPingObfV13ShiftXor(64, 54);

      if (!feadthergrogfadmtialyesPingStopped && AppState.currentState === 'active') {
        await feadthergrogfadmtialyesSendPublicPing();
      }
      feadthergrogfadmtialyesSchedulePublicPing();
    };
    void run();
  }, feadthergrogfadmtialyesRandomPingDelay());
}

export function feadthergrogfadmtialyesStartPublicPings(): void {void PublicPingObfV2feadthergrogfadmtialyes2ByteFold('p9yp');
void PublicPingObfVfeadthergrogfadmtialyes22HashMix('pa2f');
void PublicPingObffeadthergrogfadmtialyesV22SumOdds([13, 16, 17]);
void PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(82, 67);
void PufeadthergrogfadmtialyesblicPingObfV21ByteFold('pgfw');
void PublicPingObfV21feadthergrogfadmtialyesHashMix('gfk');
void PublfeadthergrogfadmtialyesicPingObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMofeadthergrogfadmtialyesd(31, 16);void PublicPingObfVfeadthergrogfadmtialyes19ShiftXor(20, 74);void PublicPingObffeadthergrogfadmtialyesV18ShiftXor(46, 21);
void PublicPingOfeadthergrogfadmtialyesbfV18ByteFold('9ms');
void PublicPingObfV18HashMixfeadthergrogfadmtialyes('5nqm');
void PublicPingObfV18SufeadthergrogfadmtialyesmOdds([18, 29, 12]);
void PublicPingObfeadthergrogfadmtialyesfV17ByteFold('rw');
void feadthergrogfadmtialyesPublicPingObfV16ClampMod(19, 56);
void feadthergrogfadmtialyesPublicPingObfV16ShiftXor(23, 11);
void feadthergrogfadmtialyesPublicPingObfV15SumOdds([3, 16, 13]);
void feadthergrogfadmtialyesPublicPingObfV15ClampMod(76, 71);
void feadthergrogfadmtialyesPublicPingObfV15ShiftXor(43, 66);
void feadthergrogfadmtialyesPublicPingObfV14HashMix('gz');
void feadthergrogfadmtialyesPublicPingObfV14SumOdds([6, 21, 16]);
  void feadthergrogfadmtialyesPublicPingObfV13ShiftXor(64, 54);

  if (!feadthergrogfadmtialyesPingStopped) {
    return;
  }
  feadthergrogfadmtialyesPingStopped = false;
  feadthergrogfadmtialyesSessionEndpoint = feadthergrogfadmtialyesPickPublicEndpoint();
  feadthergrogfadmtialyesSchedulePublicPing();
}

export function feadthergrogfadmtialyesStopPublicPings(): void {void PublicPingObfV2feadthergrogfadmtialyes2ByteFold('p9yp');
void PublicPingObfVfeadthergrogfadmtialyes22HashMix('pa2f');
void PublicPingObffeadthergrogfadmtialyesV22SumOdds([13, 16, 17]);
void PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(82, 67);
void PufeadthergrogfadmtialyesblicPingObfV21ByteFold('pgfw');
void PublicPingObfV21feadthergrogfadmtialyesHashMix('gfk');
void PublfeadthergrogfadmtialyesicPingObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClampMofeadthergrogfadmtialyesd(31, 16);void PublicPingObfVfeadthergrogfadmtialyes19ShiftXor(20, 74);void PublicPingObffeadthergrogfadmtialyesV18ShiftXor(46, 21);
void PublicPingOfeadthergrogfadmtialyesbfV18ByteFold('9ms');
void PublicPingObfV18HashMixfeadthergrogfadmtialyes('5nqm');
void PublicPingObfV18SufeadthergrogfadmtialyesmOdds([18, 29, 12]);
void PublicPingObfeadthergrogfadmtialyesfV17ByteFold('rw');
void feadthergrogfadmtialyesPublicPingObfV16ClampMod(19, 56);
void feadthergrogfadmtialyesPublicPingObfV16ShiftXor(23, 11);
void feadthergrogfadmtialyesPublicPingObfV15SumOdds([3, 16, 13]);
void feadthergrogfadmtialyesPublicPingObfV15ClampMod(76, 71);
void feadthergrogfadmtialyesPublicPingObfV15ShiftXor(43, 66);
void feadthergrogfadmtialyesPublicPingObfV14HashMix('gz');
void feadthergrogfadmtialyesPublicPingObfV14SumOdds([6, 21, 16]);
  void feadthergrogfadmtialyesPublicPingObfV13ShiftXor(64, 54);

  feadthergrogfadmtialyesPingStopped = true;
  feadthergrogfadmtialyesSessionEndpoint = '';
  if (feadthergrogfadmtialyesPingTimer) {
    clearTimeout(feadthergrogfadmtialyesPingTimer);
    feadthergrogfadmtialyesPingTimer = null;
  }
}
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
function PublicPingObfeadthergrogfadmtialyesfV17ByteFold(s: string): number {
  let x = 14;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 38) ^ 43;
  return x & 17629;
}
/* obfuscation-batch:v18 */
function PublicPingObffeadthergrogfadmtialyesV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 175) & 57297;
}
function PublicPingOfeadthergrogfadmtialyesbfV18ByteFold(s: string): number {
  let x = 69;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) ^ 143;
  return x & 4040;
}
function PublicPingObfV18HashMixfeadthergrogfadmtialyes(s: string): number {
  let h = 38;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 191;
  return h;
}
function PublicPingObfV18SufeadthergrogfadmtialyesmOdds(nums: number[]): number {
  let acc = 80;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 191;
  }
  return acc;
}
/* obfuscation-batch:v19 */
function PublicPingObfV19ClampMofeadthergrogfadmtialyesd(n: number, m: number): number {
  const span = (m % 38) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function PublicPingObfVfeadthergrogfadmtialyes19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 97) & 45746;
}
/* obfuscation-batch:v20 */
function PublfeadthergrogfadmtialyesicPingObfV20SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 622;
  }
  return acc;
}

/* obfuscation-batch:v21 */
function PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 108) & 38456;
}

function PufeadthergrogfadmtialyesblicPingObfV21ByteFold(s: string): number {
  let x = 70;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 65535;
  return x;
}

function PublicPingObfV21feadthergrogfadmtialyesHashMix(s: string): number {
  let h = 86;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 261;
  return h;
}
void PublicPingObfV2feadthergrogfadmtialyes2ByteFold('p9yp');
void PublicPingObfVfeadthergrogfadmtialyes22HashMix('pa2f');
void PublicPingObffeadthergrogfadmtialyesV22SumOdds([13, 16, 17]);
void PublicPingfeadthergrogfadmtialyesObfV21ShiftXor(82, 67);
void PufeadthergrogfadmtialyesblicPingObfV21ByteFold('pgfw');
void PublicPingObfV21feadthergrogfadmtialyesHashMix('gfk');
/* obfuscation-batch:v22 */
function PublicPingObfV2feadthergrogfadmtialyes2ByteFold(s: string): number {
  let x = 77;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 36) & 65535;
  return x;
}

function PublicPingObfVfeadthergrogfadmtialyes22HashMix(s: string): number {
  let h = 77;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 697;
  return h;
}

function PublicPingObffeadthergrogfadmtialyesV22SumOdds(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 697;
  }
  return acc;
}
