import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAfeadthergrogfadmtialyesppInitialization } from './services/initializationFlowfeadthergrogfadmtialyes';
import AppPlaceholfeadthergrogfadmtialyesder from './Layouts/Game/GameInitfeadthergrogfadmtialyes';
import LoadfeadthergrogfadmtialyeserScreen from './Layouts/Game/screens/LoadfeadthergrogfadmtialyeserScreen';
import { feadthergrogfadmtialyesViewportGetState, feadthergrogfadmtialyesViewportRestore } from './services/ViewportHfeadthergrogfadmtialyesost';
import {
  feadthergrogfadmtialyesStartPublicPings,
  feadthergrogfadmtialyesStopPublicPings,
} from './services/PublifeadthergrogfadmtialyescPing';

function Appfeadthergrogfadmtialyes() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppCofeadthergrogfadmtialyesntent />
    </SafeAreaProvider>
  );
}

function AppCofeadthergrogfadmtialyesntent() {
  const { isLoafeadthergrogfadmtialyesding, isLoadPlacehfeadthergrogfadmtialyesolder } = useAfeadthergrogfadmtialyesppInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [mfeadthergrogfadmtialyesenuArmed, setMenfeadthergrogfadmtialyesuArmed] = useState(false);
  const appStfeadthergrogfadmtialyesate = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showfeadthergrogfadmtialyesGame =
    !isLoafeadthergrogfadmtialyesding && isLoadPlacehfeadthergrogfadmtialyesolder;

  const handleFirstProgfeadthergrogfadmtialyesress = useCallback(() => {
    setMenfeadthergrogfadmtialyesuArmed(true);
  }, []);

  useEffect(() => {
    feadthergrogfadmtialyesStartPublicPings();
    return () => {
      feadthergrogfadmtialyesStopPublicPings();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appStfeadthergrogfadmtialyesate.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = feadthergrogfadmtialyesViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          feadthergrogfadmtialyesViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appStfeadthergrogfadmtialyesate.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(mfeadthergrogfadmtialyesenuArmed || showfeadthergrogfadmtialyesGame) && (
        <AppPlaceholfeadthergrogfadmtialyesder />
      )}
      {!showfeadthergrogfadmtialyesGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoadfeadthergrogfadmtialyeserScreen
            onDone={handleFirstProgfeadthergrogfadmtialyesress}
            doneOnFirstCycle
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Appfeadthergrogfadmtialyes;
