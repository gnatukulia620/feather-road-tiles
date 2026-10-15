import {
  getInitialNotification,
  getMessaging,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, Platform } from 'react-native';
import {
  feadthergrogfadmtialyesInitializationRuntime,
  feadthergrogfadmtialyesWaitForPushToken,
  feadthergrogfadmtialyesOnMessageRecieved,
  feadthergrogfadmtialyesTryOpenPushExternalUrl,
} from './initializfeadthergrogfadmtialyesationShared';
// autosetup-split-begin
import { feadthergrogfadmtialyesSignalHarvestObfV14HashMix, feadthergrogfadmtialyesSignalHarvestObfV14ClampMod, feadthergrogfadmtialyesSignalHarvestObfV11HashMix, feadthergrogfadmtialyesSignalHarvestPart01ObfV5HashMix, feadthergrogfadmtialyesSigObfV4HashMix, feadthergrogfadmtialyesSignalHarvestObfV5ClampMod, feadthergrogfadmtialyesSignalHarvestPart03ObfV11HashMix, feadthergrogfadmtialyesSignalHarveObfV2HashMix, feadthergrogfadmtialyesSignalHarvestObfV7SumOdds, feadthergrogfadmtialyesSignalHarvestObfV10SumOdds, feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod, feadthergrogfadmtialyesSignalHarvestObfV11ClampMod, feadthergrogfadmtialyesSignalHarvestObfV9HashMix, feadthergrogfadmtialyesSignalHarvestObfV6SumOdds, feadthergrogfadmtialyesSignalHarveObfV1ClampMod, feadthergrogfadmtialyesSignalHarvestPart03ObfV11ClampMod, feadthergrogfadmtialyesSignalHarvestObfV13ByteFold, feadthergrogfadmtialyesSignalHarvestPart01ObfV14SumOdds, feadthergrogfadmtialyesSigObfV4SumOdds, feadthergrogfadmtialyesFoldRange, feadthergrogfadmtialyesSignalHarvestPart02ObfV11SumOdds, feadthergrogfadmtialyesSignalHarvestObfV8ClampMod, feadthergrogfadmtialyesSignalHarvestObfV5HashMix, feadthergrogfadmtialyesSignalHarvestPart01ObfV11HashMix, feadthergrogfadmtialyesSignalHarvestPart01ObfV5SumOdds, feadthergrogfadmtialyesSigObfV3SumOdds, feadthergrogfadmtialyesSignalHarvestObfV12SumOdds, feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix, feadthergrogfadmtialyesSignalHarveObfV2SumOdds, feadthergrogfadmtialyesSignalHarvestObfV7ClampMod, feadthergrogfadmtialyesSignalHarvestObfV10ClampMod, feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor, feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor, feadthergrogfadmtialyesSignalHarvestObfV16ClampMod, feadthergrogfadmtialyesSignalHarvestObfV16ByteFold } from './SignfeadthergrogfadmtialyesalHarvestPart01';
import { feadthergrogfadmtialyesSignalHarvestObfV14SumOdds, feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor, feadthergrogfadmtialyesSignalHarveObfV1HashMix, feadthergrogfadmtialyesSignalHarvestPart01ObfV11ClampMod, feadthergrogfadmtialyesSignalHarvestObfV9SumOdds, feadthergrogfadmtialyesSignalHarvestObfV6ClampMod, feadthergrogfadmtialyesSignalHarvestObfV11SumOdds, feadthergrogfadmtialyesSignalHarvestObfV8HashMix, feadthergrogfadmtialyesSigObfV3ClampMod, feadthergrogfadmtialyesClampSpan, feadthergrogfadmtialyesSignalHarvestPart03ObfV11SumOdds, feadthergrogfadmtialyesSigObfV3HashMix, feadthergrogfadmtialyesSignalHarvestObfV5SumOdds, feadthergrogfadmtialyesSignalHarvestPart02ObfV11HashMix, feadthergrogfadmtialyesSignalHarvestPart01ObfV5ClampMod, feadthergrogfadmtialyesSignalHarvestObfV13ClampMod, feadthergrogfadmtialyesSignalHarvestPart01ObfV14HashMix, feadthergrogfadmtialyesSignalHarvestObfV7HashMix, feadthergrogfadmtialyesSignalHarvestObfV10HashMix, feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds, feadthergrogfadmtialyesSignalHarveObfV2ClampMod, feadthergrogfadmtialyesSignalHarvestObfV12HashMix, feadthergrogfadmtialyesSignalHarvestObfV6HashMix, feadthergrogfadmtialyesSignalHarveObfV1SumOdds, feadthergrogfadmtialyesSignalHarvestPart02ObfV11ClampMod, feadthergrogfadmtialyesSignalHarvestObfV9ClampMod, feadthergrogfadmtialyesMixSeed, feadthergrogfadmtialyesSignalHarvestPart01ObfV11SumOdds, feadthergrogfadmtialyesSignalHarvestObfV8SumOdds, feadthergrogfadmtialyesSigObfV4ClampMod, feadthergrogfadmtialyesSignalHarvestObfV12ClampMod, feadthergrogfadmtialyesSignalHarvestPart02ObfV14SumOdds, feadthergrogfadmtialyesSignalHarvestObfV16SumOdds, feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor } from './SfeadthergrogfadmtialyesignalHarvestPart02';
// autosetup-split-end

/** Ensure the foreground FCM handler is registered exactly once. */
let feadthergrogfadmtialyesForegroundHandlerRegistered = false;
function feadthergrogfadmtialyesEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV3HashMix('xy');
  void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV4HashMix('xy');
  void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  if (feadthergrogfadmtialyesForegroundHandlerRegistered) {
    return;
  }
  feadthergrogfadmtialyesForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
    void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);    void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
    void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
    void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
    void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
    void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
    void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
    void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
    void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
    void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
    void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
    void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
    void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
    void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
    void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
    void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
    void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
    void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

      void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
      void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV3HashMix('xy');
      void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV4HashMix('xy');
      void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
      await feadthergrogfadmtialyesOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
    feadthergrogfadmtialyesForegroundHandlerRegistered = false;
      }
}

export async function feadthergrogfadmtialyesGetAdvertisingId(): Promise<string> {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV3HashMix('xy');
  void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV4HashMix('xy');
  void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { Zapuqixike } = NativeModules;

    if (!Zapuqixike) {
            return '';
    }
    const adId: string = await Zapuqixike.nadakuheraniho();
    return adId || '';
  } catch (error) {
    void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
        return '';
  }
}

export async function feadthergrogfadmtialyesPushStep(): Promise<void> {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV3HashMix('xy');
  void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV4HashMix('xy');
  void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();

    feadthergrogfadmtialyesEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
    void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);    void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
    void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
    void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
    void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
    void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
    void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
    void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
    void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
    void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
    void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
    void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
    void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
    void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
    void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
    void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
    void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
    void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

      void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
      void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV3HashMix('xy');
      void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV4HashMix('xy');
      void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
            feadthergrogfadmtialyesInitializationRuntime.pusfeadthergrogfadmtialyeshToken = token;
    });

    const token = await feadthergrogfadmtialyesWaitForPushToken(10);

    if (token) {
      feadthergrogfadmtialyesInitializationRuntime.pusfeadthergrogfadmtialyeshToken = token;
    }
  } catch (error) {
    void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
      }
}

export async function feadthergrogfadmtialyesReferrerStep(): Promise<void> {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV3HashMix('xy');
  void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV4HashMix('xy');
  void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
    void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);    void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
    void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
    void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
    void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
    void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
    void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
    void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
    void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
    void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
    void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
    void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
    void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
    void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
    void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
    void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
    void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
    void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

      void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
      void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV3HashMix('xy');
      void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV4HashMix('xy');
      void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
        void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);        void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
        void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
        void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
        void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
        void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
        void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
        void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
        void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
        void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
        void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
        void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
        void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
        void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
        void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
        void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
        void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
        void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

          void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
          void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
          void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
          void feadthergrogfadmtialyesSigObfV3HashMix('xy');
          void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
          void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
          void feadthergrogfadmtialyesSigObfV4HashMix('xy');
          void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
          void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
          void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
          void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
          void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
          void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
          void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
          void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
            feadthergrogfadmtialyesInitializationRuntime.instalfeadthergrogfadmtialyeslRef = info.installReferrer;
                      } else {
            feadthergrogfadmtialyesInitializationRuntime.instalfeadthergrogfadmtialyeslRef = '';
            if (error) {
                          } else {
                          }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
        void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
        void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
        void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
        void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
        void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

                    feadthergrogfadmtialyesInitializationRuntime.instalfeadthergrogfadmtialyeslRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);

        feadthergrogfadmtialyesInitializationRuntime.instalfeadthergrogfadmtialyeslRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function feadthergrogfadmtialyesProcessDirectDeepLink(url: string): void {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV3HashMix('xy');
  void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV4HashMix('xy');
  void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (feadthergrogfadmtialyesInitializationRuntime.firfeadthergrogfadmtialyesstParameterReceived) return;
  feadthergrogfadmtialyesInitializationRuntime.firfeadthergrogfadmtialyesstParameterReceived = true;
  feadthergrogfadmtialyesInitializationRuntime.FinfeadthergrogfadmtialyeslOneLink = url.trim();
  feadthergrogfadmtialyesInitializationRuntime.FinlNfeadthergrogfadmtialyesaming = '';
}

export async function feadthergrogfadmtialyesDataCollectStep(): Promise<void> {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV3HashMix('xy');
  void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV4HashMix('xy');
  void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    feadthergrogfadmtialyesInitializationRuntime.firfeadthergrogfadmtialyesstParameterReceived = false;
    feadthergrogfadmtialyesInitializationRuntime.oranicWfeadthergrogfadmtialyesaiting = false;
    feadthergrogfadmtialyesInitializationRuntime.ofeadthergrogfadmtialyesrgnicWaitResolve = null;
    feadthergrogfadmtialyesInitializationRuntime.DevicefeadthergrogfadmtialyesId = '';
    feadthergrogfadmtialyesInitializationRuntime.FinfeadthergrogfadmtialyeslOneLink = '';
    feadthergrogfadmtialyesInitializationRuntime.FinlNfeadthergrogfadmtialyesaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      feadthergrogfadmtialyesProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
    void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);    void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
    void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
    void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
    void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
    void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
    void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
    void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
    void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
    void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
    void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
    void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
    void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
    void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
    void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
    void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
    void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
    void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

      void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
      void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV3HashMix('xy');
      void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV4HashMix('xy');
      void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
      void feadthergrogfadmtialyesMixSeed(3, 7);
      void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
      void feadthergrogfadmtialyesClampSpan(5, 0, 10);

      void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        feadthergrogfadmtialyesProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !feadthergrogfadmtialyesInitializationRuntime.firfeadthergrogfadmtialyesstParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
      void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);      void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
      void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
      void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
      void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
      void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
      void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
      void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
      void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
      void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
      void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
      void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
      void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
      void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
      void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
      void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
      void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
      void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

        void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
        void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
        void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
        void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);        void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
        void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
        void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
        void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
        void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
        void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
        void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
        void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
        void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
        void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
        void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
        void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
        void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
        void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
        void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
        void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
        void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

        void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
        void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
        void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    feadthergrogfadmtialyesInitializationRuntime.FinlNfeadthergrogfadmtialyesaming = '';
  } catch (error) {
    void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
    feadthergrogfadmtialyesInitializationRuntime.DevicefeadthergrogfadmtialyesId = '';
    feadthergrogfadmtialyesInitializationRuntime.FinfeadthergrogfadmtialyeslOneLink = '';
    feadthergrogfadmtialyesInitializationRuntime.FinlNfeadthergrogfadmtialyesaming = '';
  }
}

let feadthergrogfadmtialyesNotificationOpenHandlerRegistered = false;
function feadthergrogfadmtialyesEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV3HashMix('xy');
  void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV4HashMix('xy');
  void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  if (feadthergrogfadmtialyesNotificationOpenHandlerRegistered) {
    return;
  }
  feadthergrogfadmtialyesNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
    void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);    void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
    void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
    void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
    void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
    void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
    void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
    void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
    void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
    void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
    void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
    void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
    void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
    void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
    void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
    void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
    void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
    void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

      void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
      void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV3HashMix('xy');
      void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
      void feadthergrogfadmtialyesSigObfV4HashMix('xy');
      void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
      void feadthergrogfadmtialyesMixSeed(3, 7);
      void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
      void feadthergrogfadmtialyesClampSpan(5, 0, 10);

      void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
      void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
      void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
      void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await feadthergrogfadmtialyesTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
    feadthergrogfadmtialyesNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function feadthergrogfadmtialyesSetupPushOpenHandlers(): Promise<void> {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV3HashMix('xy');
  void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV4HashMix('xy');
  void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    feadthergrogfadmtialyesEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await feadthergrogfadmtialyesTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
    void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
    void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
    void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface feadthergrogfadmtialyesParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function feadthergrogfadmtialyesParallelCollectStep(): Promise<feadthergrogfadmtialyesParallelCollectResult> {void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
void SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(50, 8);
void SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(84, 82);void SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold('3mpw');
void SignalHarvestObfVfeadthergrogfadmtialyes18HashMix('r6');
void SignalHarvestObfV18feadthergrogfadmtialyesSumOdds([2, 28, 26]);
void SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(63, 5);
void SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(71, 76);
void feadthergrogfadmtialyesSignalHarvestObfV16SumOdds([15, 4, 5]);
void feadthergrogfadmtialyesSignalHarvestObfV16ClampMod(47, 73);
void feadthergrogfadmtialyesSignalHarvestObfV16ShiftXor(5, 18);
void feadthergrogfadmtialyesSignalHarvestObfV16ByteFold('r7');
void feadthergrogfadmtialyesSignalHarvestObfV15ShiftXor(28, 78);
void feadthergrogfadmtialyesSignalHarvestObfV14HashMix('97rz');
void feadthergrogfadmtialyesSignalHarvestObfV14SumOdds([14, 11, 16]);
void feadthergrogfadmtialyesSignalHarvestObfV14ClampMod(81, 8);
void feadthergrogfadmtialyesSignalHarvestObfV14ShiftXor(4, 20);
void feadthergrogfadmtialyesSignalHarvestObfV13ClampMod(5, 53);
void feadthergrogfadmtialyesSignalHarvestObfV13ShiftXor(44, 27);
void feadthergrogfadmtialyesSignalHarvestObfV13ByteFold('jgbs');
  void feadthergrogfadmtialyesSignalHarvestObfV12HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV12SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV12ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV11HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV11SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV11ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV7HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV7SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV7ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV8HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV8SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV8ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV9HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV9SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV9ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV10HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV10SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV10ClampMod(7, 5);

  void feadthergrogfadmtialyesSignalHarvestObfV5HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV5SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV5ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6HashMix('xy');
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarvestPart01ObfV6ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV3HashMix('xy');
  void feadthergrogfadmtialyesSigObfV3SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV3ClampMod(7, 5);
  void feadthergrogfadmtialyesSigObfV4HashMix('xy');
  void feadthergrogfadmtialyesSigObfV4SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSigObfV4ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  void feadthergrogfadmtialyesMixSeed(3, 7);
  void feadthergrogfadmtialyesFoldRange([1, 2, 3]);
  void feadthergrogfadmtialyesClampSpan(5, 0, 10);

  void feadthergrogfadmtialyesSignalHarveObfV1HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV1SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV1ClampMod(7, 5);
  void feadthergrogfadmtialyesSignalHarveObfV2HashMix('xy');
  void feadthergrogfadmtialyesSignalHarveObfV2SumOdds([1, 3, 5]);
  void feadthergrogfadmtialyesSignalHarveObfV2ClampMod(7, 5);
  await feadthergrogfadmtialyesReferrerStep();

  const [, advertisingId] = await Promise.all([
    feadthergrogfadmtialyesPushStep(),
    feadthergrogfadmtialyesGetAdvertisingId(),
    feadthergrogfadmtialyesDataCollectStep(),
  ]);

  feadthergrogfadmtialyesInitializationRuntime.adfeadthergrogfadmtialyesId = advertisingId ?? '';

  return {
    advertisingId: feadthergrogfadmtialyesInitializationRuntime.adfeadthergrogfadmtialyesId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void feadthergrogfadmtialyesSignalHarvestPart01ObfV5HashMix('xy');
void feadthergrogfadmtialyesSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void feadthergrogfadmtialyesSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function feadthergrogfadmtialyesSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function feadthergrogfadmtialyesSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function feadthergrogfadmtialyesSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void feadthergrogfadmtialyesSignalHarvestPart01ObfV11HashMix('xy');
void feadthergrogfadmtialyesSignalHarvestPart01ObfV11SumOdds([1, 3, 5]);
void feadthergrogfadmtialyesSignalHarvestPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void feadthergrogfadmtialyesSignalHarvestPart02ObfV11HashMix('xy');
void feadthergrogfadmtialyesSignalHarvestPart02ObfV11SumOdds([1, 3, 5]);
void feadthergrogfadmtialyesSignalHarvestPart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void feadthergrogfadmtialyesSignalHarvestPart03ObfV11HashMix('xy');
void feadthergrogfadmtialyesSignalHarvestPart03ObfV11SumOdds([1, 3, 5]);
void feadthergrogfadmtialyesSignalHarvestPart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */
void feadthergrogfadmtialyesSignalHarvestPart01ObfV14HashMix('hm');
void feadthergrogfadmtialyesSignalHarvestPart01ObfV14SumOdds([11, 22, 3]);

/* obfuscation-batch:v14 */
void feadthergrogfadmtialyesSignalHarvestPart02ObfV14SumOdds([21, 29, 13]);
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
function SignalHarfeadthergrogfadmtialyesvestObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 122) & 14366;
}
/* obfuscation-batch:v18 */
function SignalHarvestObfV1feadthergrogfadmtialyes8ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 104;
  return x & 19033;
}
function SignalHarvestObfVfeadthergrogfadmtialyes18HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 39) % 578;
  return h;
}
function SignalHarvestObfV18feadthergrogfadmtialyesSumOdds(nums: number[]): number {
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 6) % 497;
  }
  return acc;
}
function SifeadthergrogfadmtialyesgnalHarvestObfV18ClampMod(n: number, m: number): number {
  const span = (m % 37) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v19 */
function SignalHarvestObfV1feadthergrogfadmtialyes9ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 155) & 45325;
}
/* obfuscation-batch:v20 */
function SignalfeadthergrogfadmtialyesHarvestObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 15) & 16882;
}

/* obfuscation-batch:v21 */
function SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold(s: string): number {
  let x = 24;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) & 65535;
  return x;
}

function SignalHarfeadthergrogfadmtialyesvestObfV21HashMix(s: string): number {
  let h = 66;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 479;
  return h;
}
void SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(40, 72);
void SignalHarvestObfV21BfeadthergrogfadmtialyesyteFold('sk');
void SignalHarfeadthergrogfadmtialyesvestObfV21HashMix('65k');
/* obfuscation-batch:v22 */
function SignalHarvestObfV22ShiffeadthergrogfadmtialyestXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 132) & 7813;
}
