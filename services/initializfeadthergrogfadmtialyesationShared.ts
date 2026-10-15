import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { feadthergrogfadmtialyesDecrypt } from './CryptoSefeadthergrogfadmtialyesrvice';
import { finKefeadthergrogfadmtialyesy } from './constants/constfeadthergrogfadmtialyesntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  feadthergrogfadmtialyesViewportGetState,
  feadthergrogfadmtialyesViewportShow,
} from './ViewportHfeadthergrogfadmtialyesost';
import { Utils } from './UtilSfeadthergrogfadmtialyeservice';

let feadthergrogfadmtialyesLastOpenedPushExternalUrl = '';
let feadthergrogfadmtialyesLastOpenedPushExternalAt = 0;

export const feadthergrogfadmtialyesInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof feadthergrogfadmtialyesInitTarget)[keyof typeof feadthergrogfadmtialyesInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface feadthergrogfadmtialyesInitializationRuntime {
  pusfeadthergrogfadmtialyeshToken: string;
  instalfeadthergrogfadmtialyeslRef: string;
  DevicefeadthergrogfadmtialyesId: string;
  FinfeadthergrogfadmtialyeslOneLink: string;
  FinlNfeadthergrogfadmtialyesaming: string;
  adfeadthergrogfadmtialyesId: string;
  firfeadthergrogfadmtialyesstParameterReceived: boolean;
  oranicWfeadthergrogfadmtialyesaiting: boolean;
  ofeadthergrogfadmtialyesrgnicWaitResolve: (() => void) | null;
  pendinfeadthergrogfadmtialyesgSendId: string;
}

export const feadthergrogfadmtialyesInitializationRuntime: feadthergrogfadmtialyesInitializationRuntime = {
  pusfeadthergrogfadmtialyeshToken: '',
  instalfeadthergrogfadmtialyeslRef: '',
  DevicefeadthergrogfadmtialyesId: '',
  FinfeadthergrogfadmtialyeslOneLink: '',
  FinlNfeadthergrogfadmtialyesaming: '',
  adfeadthergrogfadmtialyesId: '',
  firfeadthergrogfadmtialyesstParameterReceived: false,
  oranicWfeadthergrogfadmtialyesaiting: false,
  ofeadthergrogfadmtialyesrgnicWaitResolve: null,
  pendinfeadthergrogfadmtialyesgSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function feadthergrogfadmtialyesResetInitializationRuntime(): void {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  feadthergrogfadmtialyesInitializationRuntime.pusfeadthergrogfadmtialyeshToken = '';
  feadthergrogfadmtialyesInitializationRuntime.instalfeadthergrogfadmtialyeslRef = '';
  feadthergrogfadmtialyesInitializationRuntime.DevicefeadthergrogfadmtialyesId = '';
  feadthergrogfadmtialyesInitializationRuntime.FinfeadthergrogfadmtialyeslOneLink = '';
  feadthergrogfadmtialyesInitializationRuntime.FinlNfeadthergrogfadmtialyesaming = '';
  feadthergrogfadmtialyesInitializationRuntime.adfeadthergrogfadmtialyesId = '';
  feadthergrogfadmtialyesInitializationRuntime.firfeadthergrogfadmtialyesstParameterReceived = false;
  feadthergrogfadmtialyesInitializationRuntime.oranicWfeadthergrogfadmtialyesaiting = false;
  feadthergrogfadmtialyesInitializationRuntime.ofeadthergrogfadmtialyesrgnicWaitResolve = null;
}

export function feadthergrogfadmtialyesAppenndSendId(url: string, sendId: string): string {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function feadthergrogfadmtialyesSynncPendingSendIdFromNative(): Promise<void> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Gegezugenejig } = NativeModules;
    if (!Gegezugenejig || typeof Gegezugenejig.ricucamodi !== 'function') {
      return;
    }
    const sendId = await Gegezugenejig.ricucamodi();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      feadthergrogfadmtialyesInitializationRuntime.pendinfeadthergrogfadmtialyesgSendId = sendId.trim();
    }
  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function feadthergrogfadmtialyesTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
    return false;
  }
  const now = Date.now();
  if (
    url === feadthergrogfadmtialyesLastOpenedPushExternalUrl &&
    now - feadthergrogfadmtialyesLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    feadthergrogfadmtialyesLastOpenedPushExternalUrl = url;
    feadthergrogfadmtialyesLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    feadthergrogfadmtialyesLastOpenedPushExternalUrl = '';
    feadthergrogfadmtialyesLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function feadthergrogfadmtialyesSynncPendingPushUrlFromNative(): Promise<void> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Gegezugenejig } = NativeModules;
    if (
      !Gegezugenejig ||
      typeof Gegezugenejig.dowabozon !== 'function'
    ) {
      return;
    }
    const pushUrl = await Gegezugenejig.dowabozon();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await feadthergrogfadmtialyesTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function feadthergrogfadmtialyesGetAppIdenier(): Promise<string> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { Gegezugenejig } = NativeModules;

    if (!Gegezugenejig) {
            return '';
    }

    const packageName = await Gegezugenejig.decimamevavusa();
        return packageName || '';
  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

export async function feadthergrogfadmtialyesGetAppVersion(): Promise<string> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function feadthergrogfadmtialyesGetAndroidId(): Promise<string> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function feadthergrogfadmtialyesGetAndroidUserAAgent(): Promise<string> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { Qahebuxul } = NativeModules;

    if (!Qahebuxul) {
            return '';
    }

    const userAgent: string = await Qahebuxul.pevomojefelave();
    return userAgent || '';
  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const feadthergrogfadmtialyesINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let feadthergrogfadmtialyesInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function feadthergrogfadmtialyesWaitForInitPush(timeoutMs: number): Promise<string | null> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
  void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);  void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
  void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
  void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
  void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
  void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
  void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
  void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
  void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
  void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
  void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
  void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
  void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
  void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

    void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
    void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void feadthergrogfadmtialyesMixSeed(3, 7);
    void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
    void feadthergrogfadmtialyesClampSpan(5, 0, 10);

    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
    void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);    void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
    void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
    void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
    void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
    void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
    void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
    void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
    void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
    void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
    void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
    void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
    void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

      void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
      void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
      void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (feadthergrogfadmtialyesInitPushResolver === deliver) {
        feadthergrogfadmtialyesInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
    void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);    void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
    void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
    void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
    void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
    void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
    void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
    void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
    void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
    void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
    void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
    void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
    void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

      void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
      void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
      void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(encryptedBody);
    };

    const timer = setTimeout(() => {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
    void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);    void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
    void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
    void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
    void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
    void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
    void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
    void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
    void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
    void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
    void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
    void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
    void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

      void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
      void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
      void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(null);
    }, timeoutMs);

        feadthergrogfadmtialyesInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function feadthergrogfadmtialyesDeliverInitPush(encryptedBody: string): boolean {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!feadthergrogfadmtialyesInitPushResolver) {
        return false;
  }
  const resolver = feadthergrogfadmtialyesInitPushResolver;
  feadthergrogfadmtialyesInitPushResolver = null;
    resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function feadthergrogfadmtialyesHandleInitPushBackground(encryptedBody: string): Promise<void> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    try {
    const decrypted = feadthergrogfadmtialyesDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
            return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    
    if (redirectUrlInitial) {
      const finalUrl = feadthergrogfadmtialyesAppenndSendId(
        redirectUrlInitial,
        feadthergrogfadmtialyesInitializationRuntime.pendinfeadthergrogfadmtialyesgSendId,
      );
      await AsyncStorage.setItem(finKefeadthergrogfadmtialyesy, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = feadthergrogfadmtialyesViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await feadthergrogfadmtialyesViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
            return;
    }

    if (redirectUrl) {
      await Utils.feadthergrogfadmtialyesSetUserBlocke(1);
          }
  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function feadthergrogfadmtialyesExtractInitPushBody(data: Record<string, any>): string {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of feadthergrogfadmtialyesINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function feadthergrogfadmtialyesWaitForPushToken(timeoutSeconds: number): Promise<string | null> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
  void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);  void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
  void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
  void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
  void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
  void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
  void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
  void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
  void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
  void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
  void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
  void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
  void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
  void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

    void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
    void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
    void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);    void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
    void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
    void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
    void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
    void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
    void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
    void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
    void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
    void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
    void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
    void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
    void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
    void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

      void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
      void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
      void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
                await feadthergrogfadmtialyesOnTokenReceived(token);
        resolve(token);
        return;
      }
          } catch (error) {
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
          }
  });
}

async function feadthergrogfadmtialyesOnTokenReceived(token: string): Promise<void> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
        feadthergrogfadmtialyesInitializationRuntime.pusfeadthergrogfadmtialyeshToken = token;
  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

export async function feadthergrogfadmtialyesOnMessageRecieved(remoteMessage: any): Promise<void> {void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);
void initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(47, 36);
void initializationSharedObfV19SufeadthergrogfadmtialyesmOdds([5, 18, 11]);void initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(74, 25);void ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds([19, 29, 28]);
void initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(50, 10);
void initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(10, 45);
void initializationSharedObfV18BytfeadthergrogfadmtialyeseFold('2r');
void initializationShfeadthergrogfadmtialyesaredObfV17HashMix('kpg7');
void initializationShafeadthergrogfadmtialyesredObfV16HashMix('vq');
void initfeadthergrogfadmtialyesializationSharedObfV16SumOdds([19, 26, 24]);
void initializationSharfeadthergrogfadmtialyesedObfV15SumOdds([27, 4, 14]);
void initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(53, 73);
void initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(52, 20);
void initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(69, 51);
void initializationfeadthergrogfadmtialyesSharedObfV14ByteFold('6hmp');
void initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(77, 7);
  void initializationSharedObffeadthergrogfadmtialyesV12HashMix('xy');
  void initializationSharedObfV12SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(7, 5);

  void infeadthergrogfadmtialyesitializationSharedObfV11HashMix('xy');
  void inifeadthergrogfadmtialyestializationSharedObfV11SumOdds([1, 3, 5]);
  void initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(7, 5);

  void initialifeadthergrogfadmtialyeszationSharedObfV7HashMix('xy');
  void initializationSharedObfV7SumOfeadthergrogfadmtialyesdds([1, 3, 5]);
  void initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(7, 5);
  void initializationSfeadthergrogfadmtialyesharedObfV8HashMix('xy');
  void initializationSharedObfV8SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
  void initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(7, 5);
  void ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix('xy');
  void initializationSharedObfV9SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(7, 5);
  void initializatifeadthergrogfadmtialyesonSharedObfV10HashMix('xy');
  void initfeadthergrogfadmtialyesializationSharedObfV10SumOdds([1, 3, 5]);
  void initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(7, 5);

  void initializationSharedObfV5HashMixfeadthergrogfadmtialyes('xy');
  void initializationSharedObfV5feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(7, 5);
  void initializationSharedObfV6HasfeadthergrogfadmtialyeshMix('xy');
  void initializationShfeadthergrogfadmtialyesaredObfV6SumOdds([1, 3, 5]);
  void initializationSharedObfV6feadthergrogfadmtialyesClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV3HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharObfV4HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);


  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    
    if (!remoteMessage || !remoteMessage.data) {
      return;
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = feadthergrogfadmtialyesExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
            const delivered = feadthergrogfadmtialyesDeliverInitPush(initPushBody);
      if (!delivered) {
                await feadthergrogfadmtialyesHandleInitPushBackground(initPushBody);
      }
      return;
    }

    
    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
            feadthergrogfadmtialyesInitializationRuntime.pendinfeadthergrogfadmtialyesgSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finKefeadthergrogfadmtialyesy);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = feadthergrogfadmtialyesAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = feadthergrogfadmtialyesViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await feadthergrogfadmtialyesViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix('xy');
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function feadthergrogfadmtialyesMixSeed(a: number, b: number): number {

  return ((a % (b || 1)) + b) % (b || 1);
}

function feadthergrogfadmtialyesFoldRange(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharedObfV6feadthergrogfadmtialyesClampMod(n: number, m: number): number {

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharedObfV5HashMixfeadthergrogfadmtialyes(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharedObfV5feadthergrogfadmtialyesSumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function initializationSharefeadthergrogfadmtialyesdObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v11 */
function infeadthergrogfadmtialyesitializationSharedObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function inifeadthergrogfadmtialyestializationSharedObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}
function initfeadthergrogfadmtialyesializationSharedObfV12ClampMod(n: number, m: number): number {

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function initiafeadthergrogfadmtialyeslizationSharedObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 179) & 24622;
}
/* obfuscation-batch:v14 */
function initializationSharedObfVfeadthergrogfadmtialyes14ShiftXor(n: number, k: number): number {

  const x = (n ^ k) << 7;
  return (x ^ 53) & 52513;
}
function initializationfeadthergrogfadmtialyesSharedObfV14ByteFold(s: string): number {

  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 29;
  return x & 17866;
}
/* obfuscation-batch:v15 */
function initializationSharfeadthergrogfadmtialyesedObfV15SumOdds(nums: number[]): number {

  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 43) % 723;
  }
  return acc;
}
function initializationSfeadthergrogfadmtialyesharedObfV15ClampMod(n: number, m: number): number {
  const span = (m % 6) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializationSharedObfV15ShiftfeadthergrogfadmtialyesXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 109) & 34306;
}
/* obfuscation-batch:v16 */
function initializationShafeadthergrogfadmtialyesredObfV16HashMix(s: string): number {

  let h = 73;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 288;
  return h;
}
function initfeadthergrogfadmtialyesializationSharedObfV16SumOdds(nums: number[]): number {

  let acc = 59;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 708;
  }
  return acc;
}
/* obfuscation-batch:v17 */
function initializationShfeadthergrogfadmtialyesaredObfV17HashMix(s: string): number {
  let h = 57;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 536;
  return h;
}
/* obfuscation-batch:v18 */
function ifeadthergrogfadmtialyesnitializationSharedObfV18SumOdds(nums: number[]): number {
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 428;
  }
  return acc;
}
function initializationShfeadthergrogfadmtialyesaredObfV18ClampMod(n: number, m: number): number {
  const span = (m % 64) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initiafeadthergrogfadmtialyeslizationSharedObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 81) & 18545;
}
function initializationSharedObfV18BytfeadthergrogfadmtialyeseFold(s: string): number {
  let x = 9;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 221;
  return x & 39631;
}
/* obfuscation-batch:v19 */
function initializationSharedObfV19SufeadthergrogfadmtialyesmOdds(nums: number[]): number {
  let acc = 44;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 297;
  }
  return acc;
}
function initializationSharedObfV19ShiffeadthergrogfadmtialyestXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 113) & 28674;
}
/* obfuscation-batch:v20 */
function initializationSharedObffeadthergrogfadmtialyesV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 12) & 24125;
}



/* obfuscation-batch:v21 */
function initfeadthergrogfadmtialyesializationSharedObfV21SumOdds(nums: number[]): number {
  let acc = 52;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 480;
  }
  return acc;
}

function initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(n: number, m: number): number {
  const span = (m % 53) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 218) & 40236;
}
void initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(10, 55);
void initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(83, 9);
void ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold('cq85');
void initialifeadthergrogfadmtialyeszationSharedObfV22HashMix('tt7z');
void initfeadthergrogfadmtialyesializationSharedObfV21SumOdds([23, 6, 16]);
void initializationSharedObfV2feadthergrogfadmtialyes1ClampMod(56, 8);
void initializationSharedObfV21ShfeadthergrogfadmtialyesiftXor(48, 15);

function initializationSharedObffeadthergrogfadmtialyesV12HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 567;
  return h;
}

function initializationSharedObfV12SumfeadthergrogfadmtialyesOdds(nums: number[]): number {
  let acc = 32;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 706;
  }
  return acc;
}

function initializationShfeadthergrogfadmtialyesaredObfV11ClampMod(n: number, m: number): number {
  const span = (m % 10) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initialifeadthergrogfadmtialyeszationSharedObfV7HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 367;
  return h;
}

function initializationSharedObfV7SumOfeadthergrogfadmtialyesdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 458;
  }
  return acc;
}

function initialfeadthergrogfadmtialyesizationSharedObfV7ClampMod(n: number, m: number): number {
  const span = (m % 20) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSfeadthergrogfadmtialyesharedObfV8HashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 150;
  return h;
}

function initializationSharedObfV8SfeadthergrogfadmtialyesumOdds(nums: number[]): number {
  let acc = 57;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 751;
  }
  return acc;
}

function initializationSharedObfV8ClampfeadthergrogfadmtialyesMod(n: number, m: number): number {
  const span = (m % 4) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ifeadthergrogfadmtialyesnitializationSharedObfV9HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 161;
  return h;
}

function initializationSharedObfV9SumfeadthergrogfadmtialyesOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 728;
  }
  return acc;
}

function initializationSharedObfV9ClamfeadthergrogfadmtialyespMod(n: number, m: number): number {
  const span = (m % 7) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializatifeadthergrogfadmtialyesonSharedObfV10HashMix(s: string): number {
  let h = 67;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 681;
  return h;
}

function initfeadthergrogfadmtialyesializationSharedObfV10SumOdds(nums: number[]): number {
  let acc = 38;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 432;
  }
  return acc;
}

function initializationSharedObfV5ClafeadthergrogfadmtialyesmpMod(n: number, m: number): number {
  const span = (m % 9) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV6HasfeadthergrogfadmtialyeshMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 156;
  return h;
}

function initializationShfeadthergrogfadmtialyesaredObfV6SumOdds(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 265;
  }
  return acc;
}

function feadthergrogfadmtialyesinitializationSharObfV3HashMix(s: string): number {
  let h = 34;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 188;
  return h;
}

function feadthergrogfadmtialyesinitializationSharObfV3SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 585;
  }
  return acc;
}

function feadthergrogfadmtialyesinitializationSharObfV3ClampMod(n: number, m: number): number {
  const span = (m % 8) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function feadthergrogfadmtialyesinitializationSharObfV4HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 349;
  return h;
}

function feadthergrogfadmtialyesinitializationSharObfV4SumOdds(nums: number[]): number {
  let acc = 22;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 796;
  }
  return acc;
}

function feadthergrogfadmtialyesinitializationSharObfV4ClampMod(n: number, m: number): number {
  const span = (m % 12) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 205;
  return h;
}

function feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 496;
  }
  return acc;
}

function feadthergrogfadmtialyesinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const span = (m % 18) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 436;
  return h;
}

function feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  let acc = 15;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 629;
  }
  return acc;
}

function feadthergrogfadmtialyesinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const span = (m % 24) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function feadthergrogfadmtialyesClampSpan(n: number, lo: number, hi: number): number {
  const span = hi > lo ? hi - lo : 17;
  const x = ((n - lo) % span + span) % span;
  return lo + x;
}
/* obfuscation-batch:v22 */
function initializationSharedObfV22ClafeadthergrogfadmtialyesmpMod(n: number, m: number): number {
  const span = (m % 17) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationShafeadthergrogfadmtialyesredObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 14) & 28448;
}

function ifeadthergrogfadmtialyesnitializationSharedObfV22ByteFold(s: string): number {
  let x = 33;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 65535;
  return x;
}

function initialifeadthergrogfadmtialyeszationSharedObfV22HashMix(s: string): number {
  let h = 33;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 215;
  return h;
}
