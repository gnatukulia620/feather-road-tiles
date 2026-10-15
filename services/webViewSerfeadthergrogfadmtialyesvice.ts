import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  AppState,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_KfeadthergrogfadmtialyesEY,
  SfeadthergrogfadmtialyesTORAGE_KEYS,
  feadthergrogfadmtialyesConstTouch,
} from './constants/constfeadthergrogfadmtialyesntsVariable';

type ViewportBannfeadthergrogfadmtialyesanaModule = {
  fiqasatoge: (url: string) => Promise<boolean>;
  buquxukefocoq: () => Promise<boolean>;
};

function viewportBridgefeadthergrogfadmtialyes(): ViewportBannfeadthergrogfadmtialyesanaModule | undefined {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');

  return NativeModules.Bexugakolel;
}
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  /** System permission sheet is on screen. Its own pause must not count as a new launch. */
  private swefgdetguhjhoioesPushUiInFlight = false;
  /** Ignore the resume that follows closing the system sheet. */
  private swefgdetguhjhoioesPushUiQuietUntil = 0;
  /** User left the app (Home / recents), not the permission dialog. */
  private swefgdetguhjhoioesLeftAppForReal = false;
  _dummypicklfo5409vb33 = 0;

  constructor() {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
    void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
    void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');

    void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
    void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
    this.swefgdetguhjhoioesBindPushLaunchWatcher();
  }

  feadthergrogfadmtialyesubscribe(listener: swefgdetguhjhoioesListener): () => void {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
    void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
    void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');    void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
    void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
    void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
    void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
    void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
    void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
    void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
    void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
    void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
    void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
    void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
    void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
    void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
    void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
    void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
    void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
    void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

      void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
      void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
      void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
      void webObfVfeadthergrogfadmtialyes3HashMix('xy');
      void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
      void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
      void webObfV4HashMfeadthergrogfadmtialyesix('xy');
      void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
      void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
      void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
      void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
      void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
      void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
      void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
      void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void feadthergrogfadmtialyesConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
    void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
    void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');    void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
    void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
    void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
    void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
    void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
    void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
    void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
    void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
    void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
    void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
    void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
    void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
    void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
    void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
    void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
    void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
    void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

      void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
      void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
      void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
      return (l(this.state));
    });
  }

  /**
   * A second app open is not always a new process. Home → icon keeps JS alive,
   * so the one-shot session flag would skip the repeat native ask. The system
   * sheet itself also backgrounds the activity; that pause is not a launch.
   */
  private swefgdetguhjhoioesBindPushLaunchWatcher(): void {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
    void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
    void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');

    void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
    void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);

    AppState.addEventListener('change', (next) => {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
    void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
    void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');    void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
    void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
    void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
      void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
      void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');

      void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
      void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);

      const quiet = Date.now() < this.swefgdetguhjhoioesPushUiQuietUntil;
      if (next === 'background') {
        if (!this.swefgdetguhjhoioesPushUiInFlight && !quiet) {
          this.swefgdetguhjhoioesLeftAppForReal = true;
        }
        return;
      }
      if (next !== 'active') {
        return;
      }
      if (this.swefgdetguhjhoioesPushUiInFlight || quiet) {
        this.swefgdetguhjhoioesLeftAppForReal = false;
        return;
      }
      if (!this.swefgdetguhjhoioesLeftAppForReal) {
        return;
      }
      this.swefgdetguhjhoioesLeftAppForReal = false;
      this.swefgdetguhjhoioesNativePushAskedThisSession = false;
      this.swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
      if (this.state.visible || this.openingInProgress) {
        void this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
    });
  }

  private swefgdetguhjhoioesBeginPushUi(): void {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
    void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
    void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');

    void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = true;
  }

  private swefgdetguhjhoioesEndPushUi(): void {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
    void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
    void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');

    void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = false;
    this.swefgdetguhjhoioesPushUiQuietUntil = Date.now() + 1200;
  }

  private async swefgdetguhjhoioesOpenPushSettings(): Promise<void> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
    void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
    void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');

    void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
    void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);

    try {
      if (Platform.OS === 'android') {
        const { Gegezugenejig } = NativeModules;
        const packageName =
          Gegezugenejig && typeof Gegezugenejig.decimamevavusa === 'function'
            ? await Gegezugenejig.decimamevavusa()
            : '';
        if (packageName) {
          await Linking.sendIntent('android.settings.APP_NOTIFICATION_SETTINGS', [
            {
              key: 'android.provider.extra.APP_PACKAGE',
              value: String(packageName),
            },
          ]);
          return;
        }
      }
    } catch {
      // Fall through to the app details screen.
    }
    try {
      await Linking.openSettings();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

  void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
  void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
  void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
  void webObfVfeadthergrogfadmtialyes3HashMix('xy');
  void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
  void webObfV4HashMfeadthergrogfadmtialyesix('xy');
  void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
  void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
                if (alreadyGranted) {
          return true;
        }
        this.swefgdetguhjhoioesBeginPushUi();
        try {
          const result = await PermissionsAndroid.request(permission);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        } finally {
          this.swefgdetguhjhoioesEndPushUi();
        }
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
                const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          this.swefgdetguhjhoioesBeginPushUi();
          try {
            const newStatus = await requestPermission(messaging);
            return (
              newStatus === AuthorizationStatus.AUTHORIZED ||
              newStatus === AuthorizationStatus.PROVISIONAL
            );
          } finally {
            this.swefgdetguhjhoioesEndPushUi();
          }
        }
        return false;
      }
    } catch (error) {
      void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
      void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
      void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
      void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
      void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
      void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
            void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
          void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
          void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');          void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
          void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
          void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
          void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
          void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
          void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
          void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
          void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
          void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
          void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
          void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
          void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
          void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
          void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
          void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
          void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
          void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

            void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
            void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
            void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
            void webObfVfeadthergrogfadmtialyes3HashMix('xy');
            void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
            void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
            void webObfV4HashMfeadthergrogfadmtialyesix('xy');
            void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
            void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
            void this.swefgdetguhjhoioesOpenPushSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        SfeadthergrogfadmtialyesTORAGE_KEYS.PUSHfeadthergrogfadmtialyes_MAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native dialog per launch. The 2nd native ask waits until the user leaves and opens the app again.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: first launch. askCount === 1: second launch, ask again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        SfeadthergrogfadmtialyesTORAGE_KEYS.PUSHfeadthergrogfadmtialyes_MAIN_ASKED,
        String(nextCount),
      );

      // Second denial → custom prompt (later launches hit askCount >= 2 above).
      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

  void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
  void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
  void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
  void webObfVfeadthergrogfadmtialyes3HashMix('xy');
  void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
  void webObfV4HashMfeadthergrogfadmtialyesix('xy');
  void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
  void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewportBridgefeadthergrogfadmtialyes()?.fiqasatoge) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await viewportBridgefeadthergrogfadmtialyes().fiqasatoge(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewportBridgefeadthergrogfadmtialyes()?.buquxukefocoq) {
      return;
    }

    try {
      await viewportBridgefeadthergrogfadmtialyes().buquxukefocoq();
    } catch {
      // silent
    }
  }

  async sfeadthergrogfadmtialyeshow(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

  void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
  void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
  void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
  void webObfVfeadthergrogfadmtialyes3HashMix('xy');
  void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
  void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
  void webObfV4HashMfeadthergrogfadmtialyesix('xy');
  void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
  void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.feadthergrogfadmtialyesaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async feadthergrogfadmtialyesaveLastUrl(url: string): Promise<boolean> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.feadthergrogfadmtialyesaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async feadthergrogfadmtialyesaveLastUrlToStorage(url: string): Promise<void> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_KfeadthergrogfadmtialyesEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);
  void webViewServiceObfV2feadthergrogfadmtialyes0HashMix('7v');
  void webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HafeadthergrogfadmtialyesshMix('pmqf');void webViewServifeadthergrogfadmtialyesceObfV19SumOdds([24, 28, 16]);void webViefeadthergrogfadmtialyeswServiceObfV19ByteFold('xhp');  void webViewServiceObfV18ClampModfeadthergrogfadmtialyes(39, 8);
  void webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(76, 79);
  void webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold('rrrh');
  void webfeadthergrogfadmtialyesViewServiceObfV17ByteFold('fv9f');
  void webViewfeadthergrogfadmtialyesServiceObfV17HashMix('fv2');
  void webfeadthergrogfadmtialyesViewServiceObfV16HashMix('h3tb');
  void webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds([26, 28, 24]);
  void webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(54, 53);
  void webViewServiceObfV15SfeadthergrogfadmtialyesumOdds([19, 18, 23]);
  void webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(42, 62);
  void webViewServicfeadthergrogfadmtialyeseObfV14HashMix('hq9');
  void webVifeadthergrogfadmtialyesewServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(65, 12);
  void webViewServiceObfV13SufeadthergrogfadmtialyesmOdds([2, 22, 2]);
  void webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(64, 55);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(6, 23);
  void webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold('9k6');
  void webViewServicfeadthergrogfadmtialyeseObfV12HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV12SumOdds([1, 3, 5]);
  void webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(7, 5);

  void webVifeadthergrogfadmtialyesewServiceObfV11HashMix('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV11SumOdds([1, 3, 5]);
  void webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(7, 5);

  void webViewSerfeadthergrogfadmtialyesviceObfV7HashMix('xy');
  void webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds([1, 3, 5]);
  void webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(7, 5);
  void wefeadthergrogfadmtialyesbViewServiceObfV8HashMix('xy');
  void webViewServiceObfV8SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
  void wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(7, 5);
  void webViewServicefeadthergrogfadmtialyesObfV9HashMix('xy');
  void webViewServiceObfeadthergrogfadmtialyesfV9SumOdds([1, 3, 5]);
  void webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(7, 5);
  void webViewServiceObfV10HashMifeadthergrogfadmtialyesx('xy');
  void webViewServicfeadthergrogfadmtialyeseObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(7, 5);

    void webVfeadthergrogfadmtialyesiewServiceObfV5HashMix('xy');
    void webVifeadthergrogfadmtialyesewServiceObfV5SumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(7, 5);
  void webViefeadthergrogfadmtialyeswServiceObfV6HashMix('xy');
  void webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds([1, 3, 5]);
  void webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfVfeadthergrogfadmtialyes3HashMix('xy');
    void webObfV3feadthergrogfadmtialyesSumOdds([1, 3, 5]);
    void webObfV3ClampfeadthergrogfadmtialyesMod(7, 5);
    void webObfV4HashMfeadthergrogfadmtialyesix('xy');
    void webObfV4SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webObffeadthergrogfadmtialyesV4ClampMod(7, 5);
    void wfeadthergrogfadmtialyesebViewServObfV1HashMix('xy');
    void webViewServObfV1SumOddfeadthergrogfadmtialyess([1, 3, 5]);
    void webViewServObfeadthergrogfadmtialyesfV1ClampMod(7, 5);
    void webVfeadthergrogfadmtialyesiewServObfV2HashMix('xy');
    void webViewServObfV2SumfeadthergrogfadmtialyesOdds([1, 3, 5]);
    void webViewServOfeadthergrogfadmtialyesbfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_KfeadthergrogfadmtialyesEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void webViewServicePart01ObfeadthergrogfadmtialyesfV11HashMix('xy');
void webViewServicePart01OfeadthergrogfadmtialyesbfV11SumOdds([1, 3, 5]);
void webViewServicePart01ObfV11ClampfeadthergrogfadmtialyesMod(7, 5);
/* obfuscation-batch:v11 */

void webViewServicePart02ObfV11HashMixfeadthergrogfadmtialyes('xy');
void webViewServicePart02ObfV11SfeadthergrogfadmtialyesumOdds([1, 3, 5]);
void wfeadthergrogfadmtialyesebViewServicePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
void webViewServicePart01ObfV13BytefeadthergrogfadmtialyesFold('dzzw');
void webViewServicePart01ObfV13HashMixfeadthergrogfadmtialyes('fs');

/* obfuscation-batch:v13 */
void webViewServicePafeadthergrogfadmtialyesrt02ObfV13SumOdds([18, 4, 4]);

/* obfuscation-batch:v13 */
void webViewServicePart03ObffeadthergrogfadmtialyesV13ClampMod(9, 24);
void wefeadthergrogfadmtialyesbViewServicePart03ObfV13ShiftXor(6, 10);
void webViewSerfeadthergrogfadmtialyesvicePart03ObfV13ByteFold('rwq');
void webViewServicePart03ObfV13HashMfeadthergrogfadmtialyesix('kbw');
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void webViewServicePart01feadthergrogfadmtialyesObfV15HashMix('96nm');
void webViewServicePart01ObfV15SumOddfeadthergrogfadmtialyess([24, 26, 30]);
void webViewServicePart01ObfV15ClampModfeadthergrogfadmtialyes(30, 11);
void webViewSerfeadthergrogfadmtialyesvicePart01ObfV15ShiftXor(4, 31);

/* obfuscation-batch:v15 */
void webViewServicfeadthergrogfadmtialyesePart02ObfV15ClampMod(14, 63);
void webViewServicePafeadthergrogfadmtialyesrt02ObfV15ShiftXor(41, 49);
void webViewServifeadthergrogfadmtialyescePart02ObfV15ByteFold('8f');
/* obfuscation-batch:v16 */

function webViewServiceObfV15SfeadthergrogfadmtialyesumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function webVifeadthergrogfadmtialyesewServiceObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

function webViewServiceObfeadthergrogfadmtialyesfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

function wfeadthergrogfadmtialyesebViewServicePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function wfeadthergrogfadmtialyesebViewServiceObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServicePart02ObfV11SfeadthergrogfadmtialyesumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function webViewServiceObfV10ClafeadthergrogfadmtialyesmpMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServiceObfeadthergrogfadmtialyesfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

function webViewServicePart03ObfV13HashMfeadthergrogfadmtialyesix(s: string): number {

let h = 45;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 376;
return h;
}

function webViewServicfeadthergrogfadmtialyesePart02ObfV15ClampMod(n: number, m: number): number {
const span = (m % 15) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

function webViewServifeadthergrogfadmtialyescePart02ObfV15ByteFold(s: string): number {
let x = 4;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 119;
return x & 58272;
}

function webViewSerfeadthergrogfadmtialyesviceObfV16SumOdds(nums: number[]): number {
let acc = 78;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 38) % 479;
}
return acc;
}
/* obfuscation-batch:v17 */
function webfeadthergrogfadmtialyesViewServiceObfV17ByteFold(s: string): number {

  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 56;
  return x & 12777;
}
function webViewfeadthergrogfadmtialyesServiceObfV17HashMix(s: string): number {
  let h = 5;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 346;
  return h;
}
/* obfuscation-batch:v18 */
function webViewServiceObfV18ClampModfeadthergrogfadmtialyes(n: number, m: number): number {
  const span = (m % 11) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function webViewServfeadthergrogfadmtialyesiceObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 161) & 14820;
}
function webViewSfeadthergrogfadmtialyeserviceObfV18ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 97;
  return x & 2689;
}
/* obfuscation-batch:v19 */
function webViewServiceObfV19HafeadthergrogfadmtialyesshMix(s: string): number {
  let h = 79;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 628;
  return h;
}
function webViewServifeadthergrogfadmtialyesceObfV19SumOdds(nums: number[]): number {
  let acc = 57;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 647;
  }
  return acc;
}
function webViefeadthergrogfadmtialyeswServiceObfV19ByteFold(s: string): number {
  let x = 17;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 128;
  return x & 26961;
}
/* obfuscation-batch:v20 */
function webViewServiceObfV2feadthergrogfadmtialyes0HashMix(s: string): number {
  let h = 2;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 30) % 797;
  return h;
}
function webViewServiceOfeadthergrogfadmtialyesbfV20SumOdds(nums: number[]): number {
  let acc = 86;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 39) % 179;
  }
  return acc;
}



/* obfuscation-batch:v21 */
function webViewServiceObfV2feadthergrogfadmtialyes1ByteFold(s: string): number {
  let x = 53;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}

function webViewSefeadthergrogfadmtialyesrviceObfV21HashMix(s: string): number {
  let h = 31;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 781;
  return h;
}

function webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds(nums: number[]): number {
  let acc = 67;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 27) % 679;
  }
  return acc;
}

function webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(n: number, m: number): number {
  const span = (m % 22) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void webViewServiceObfV2feadthergrogfadmtialyes1ByteFold('2m');
void webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(26, 46);
void webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold('epy');
void webViewServiceObffeadthergrogfadmtialyesV22HashMix('cmu6');
void webViewServiceObfV22SumOddfeadthergrogfadmtialyess([8, 18, 17]);
void webViewSefeadthergrogfadmtialyesrviceObfV21HashMix('7am4');
void webViewSefeadthergrogfadmtialyesrviceObfV21SumOdds([17, 15, 13]);
void webViewServiceObfV21ClfeadthergrogfadmtialyesampMod(81, 10);

function webfeadthergrogfadmtialyesViewServiceObfV16HashMix(s: string): number {
  let h = 74;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 628;
  return h;
}

function webViewServiceOfeadthergrogfadmtialyesbfV16ClampMod(n: number, m: number): number {
  const span = (m % 25) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServiceObfV15CfeadthergrogfadmtialyeslampMod(n: number, m: number): number {
  const span = (m % 9) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServicfeadthergrogfadmtialyeseObfV14HashMix(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 218;
  return h;
}

function webVifeadthergrogfadmtialyesewServiceObfV14SumOdds(nums: number[]): number {
  let acc = 73;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 407;
  }
  return acc;
}

function webViewServiceObfV14ClampMofeadthergrogfadmtialyesd(n: number, m: number): number {
  const span = (m % 3) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServiceObfV13SufeadthergrogfadmtialyesmOdds(nums: number[]): number {
  let acc = 4;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 21) % 258;
  }
  return acc;
}

function webViewSfeadthergrogfadmtialyeserviceObfV13ClampMod(n: number, m: number): number {
  const span = (m % 10) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewSefeadthergrogfadmtialyesrviceObfV13ShiftXor(n: number, m: number): number {
  const span = (m % 19) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewSefeadthergrogfadmtialyesrviceObfV13ByteFold(s: string): number {
  let h = 60;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 574;
  return h;
}

function webViewServicfeadthergrogfadmtialyeseObfV12HashMix(s: string): number {
  let h = 30;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 544;
  return h;
}

function webViewServiceObfV12ClamfeadthergrogfadmtialyespMod(n: number, m: number): number {
  const span = (m % 10) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webVifeadthergrogfadmtialyesewServiceObfV11HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 23) % 729;
  return h;
}

function webViewServicfeadthergrogfadmtialyeseObfV11SumOdds(nums: number[]): number {
  let acc = 74;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 228;
  }
  return acc;
}

function webViewfeadthergrogfadmtialyesServiceObfV11ClampMod(n: number, m: number): number {
  const span = (m % 7) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewSerfeadthergrogfadmtialyesviceObfV7HashMix(s: string): number {
  let h = 32;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 786;
  return h;
}

function webViewServiceOfeadthergrogfadmtialyesbfV7SumOdds(nums: number[]): number {
  let acc = 73;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 547;
  }
  return acc;
}

function webViewServiceObfVfeadthergrogfadmtialyes7ClampMod(n: number, m: number): number {
  const span = (m % 3) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function wefeadthergrogfadmtialyesbViewServiceObfV8HashMix(s: string): number {
  let h = 45;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 359;
  return h;
}

function webViewServiceObfV8SumfeadthergrogfadmtialyesOdds(nums: number[]): number {
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 170;
  }
  return acc;
}

function webViewServicefeadthergrogfadmtialyesObfV9HashMix(s: string): number {
  let h = 62;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 336;
  return h;
}

function webViewSfeadthergrogfadmtialyeserviceObfV9ClampMod(n: number, m: number): number {
  const span = (m % 11) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServiceObfV10HashMifeadthergrogfadmtialyesx(s: string): number {
  let h = 64;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 638;
  return h;
}

function webViewServicfeadthergrogfadmtialyeseObfV10SumOdds(nums: number[]): number {
  let acc = 21;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 135;
  }
  return acc;
}

function webVfeadthergrogfadmtialyesiewServiceObfV5HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 396;
  return h;
}

function webViewServiceObfV5ClampMofeadthergrogfadmtialyesd(n: number, m: number): number {
  const span = (m % 4) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViefeadthergrogfadmtialyeswServiceObfV6HashMix(s: string): number {
  let h = 27;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 461;
  return h;
}

function webVfeadthergrogfadmtialyesiewServiceObfV6SumOdds(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 552;
  }
  return acc;
}

function webViewServiceObfV6ClampfeadthergrogfadmtialyesMod(n: number, m: number): number {
  const span = (m % 22) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webObfVfeadthergrogfadmtialyes3HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 616;
  return h;
}

function webObfV3feadthergrogfadmtialyesSumOdds(nums: number[]): number {
  let acc = 3;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 237;
  }
  return acc;
}

function webObfV3ClampfeadthergrogfadmtialyesMod(n: number, m: number): number {
  const span = (m % 11) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webObfV4HashMfeadthergrogfadmtialyesix(s: string): number {
  let h = 15;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 649;
  return h;
}

function webObfV4SumOddfeadthergrogfadmtialyess(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 452;
  }
  return acc;
}

function webObffeadthergrogfadmtialyesV4ClampMod(n: number, m: number): number {
  const span = (m % 5) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function wfeadthergrogfadmtialyesebViewServObfV1HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 573;
  return h;
}

function webViewServObfV1SumOddfeadthergrogfadmtialyess(nums: number[]): number {
  let acc = 46;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 780;
  }
  return acc;
}

function webViewServObfeadthergrogfadmtialyesfV1ClampMod(n: number, m: number): number {
  const span = (m % 8) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webVfeadthergrogfadmtialyesiewServObfV2HashMix(s: string): number {
  let h = 78;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 8) % 752;
  return h;
}

function webViewServObfV2SumfeadthergrogfadmtialyesOdds(nums: number[]): number {
  let acc = 55;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 6) % 409;
  }
  return acc;
}

function webViewServOfeadthergrogfadmtialyesbfV2ClampMod(n: number, m: number): number {
  const span = (m % 6) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function swefgdetguhjhoioesMixSeed(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 75) & 43367;
}

function swefgdetguhjhoioesFoldRange(nums: number[]): number {
  let acc = 34;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 308;
  }
  return acc;
}

function swefgdetguhjhoioesClampSpan(n: number, lo: number, hi: number): number {
  const span = hi > lo ? hi - lo : 3;
  const x = ((n - lo) % span + span) % span;
  return lo + x;
}

function webViewServicePart01ObfeadthergrogfadmtialyesfV11HashMix(s: string): number {
  let h = 73;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 327;
  return h;
}

function webViewServicePart01OfeadthergrogfadmtialyesbfV11SumOdds(nums: number[]): number {
  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 238;
  }
  return acc;
}

function webViewServicePart01ObfV11ClampfeadthergrogfadmtialyesMod(n: number, m: number): number {
  const span = (m % 13) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServicePart02ObfV11HashMixfeadthergrogfadmtialyes(s: string): number {
  let h = 28;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 122;
  return h;
}

function webViewServicePart01ObfV13BytefeadthergrogfadmtialyesFold(s: string): number {
  let x = 62;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 4954;
  return x;
}

function webViewServicePart01ObfV13HashMixfeadthergrogfadmtialyes(s: string): number {
  let h = 67;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 561;
  return h;
}

function webViewServicePafeadthergrogfadmtialyesrt02ObfV13SumOdds(nums: number[]): number {
  let acc = 43;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 25) % 737;
  }
  return acc;
}

function webViewServicePart03ObffeadthergrogfadmtialyesV13ClampMod(n: number, m: number): number {
  const span = (m % 22) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function wefeadthergrogfadmtialyesbViewServicePart03ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 32) & 13964;
}

function webViewSerfeadthergrogfadmtialyesvicePart03ObfV13ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) & 31748;
  return x;
}

function webViewServicePart01feadthergrogfadmtialyesObfV15HashMix(s: string): number {
  let h = 65;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 7) % 399;
  return h;
}

function webViewServicePart01ObfV15SumOddfeadthergrogfadmtialyess(nums: number[]): number {
  let acc = 48;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 462;
  }
  return acc;
}

function webViewServicePart01ObfV15ClampModfeadthergrogfadmtialyes(n: number, m: number): number {
  const span = (m % 12) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewSerfeadthergrogfadmtialyesvicePart01ObfV15ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 20) & 53632;
}

function webViewServicePafeadthergrogfadmtialyesrt02ObfV15ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 71) & 723;
}
/* obfuscation-batch:v22 */
function webVifeadthergrogfadmtialyesewServiceObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 69) & 33172;
}

function webViewSfeadthergrogfadmtialyeserviceObfV22ByteFold(s: string): number {
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 37) & 65535;
  return x;
}

function webViewServiceObffeadthergrogfadmtialyesV22HashMix(s: string): number {
  let h = 79;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 171;
  return h;
}

function webViewServiceObfV22SumOddfeadthergrogfadmtialyess(nums: number[]): number {
  let acc = 79;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 171;
  }
  return acc;
}
