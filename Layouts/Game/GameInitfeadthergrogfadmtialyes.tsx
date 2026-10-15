/**
 * FeatherRoadTiles — sliding plank puzzle.
 * App.tsx is the screen state machine ONLY; all gameplay lives in
 * src/screens/GameScrfeadthergrogfadmtialyeseen + src/hooks/useRoutefeadthergrogfadmtialyesGame.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import LoaderScreenfeadthergrogfadmtialyes from './screens/LoaderScreenfeadthergrogfadmtialyes';
import MenufeadthergrogfadmtialyesScreen from './screens/MenufeadthergrogfadmtialyesScreen';
import GameScrfeadthergrogfadmtialyeseen from './screens/GameScrfeadthergrogfadmtialyeseen';
import GafeadthergrogfadmtialyesmeOverScreen from './screens/GafeadthergrogfadmtialyesmeOverScreen';
import { RoundSummary } from './hooks/useRoutefeadthergrogfadmtialyesGame';
import { MAX_LEVEL } from './constants/configfeadthergrogfadmtialyes';
import { THEME } from './constants/tfeadthergrogfadmtialyesheme';
// autosetup-split-begin
import { feadthergrogfadmtialyesGameMixSeed, feadthergrogfadmtialyesGameClampSpan } from './GameInitfeadthergrogfadmtialyesPart01';
import { feadthergrogfadmtialyesGameFoldRange } from './GameInitfeadthergrogfadmtialyesPart02';
// autosetup-split-end

type Screen = 'loader' | 'menu' | 'game' | 'gameover';

export default function App(): React.JSX.Element {
void GameInitObfVfeadthergrogfadmtialyes22ShiftXor(15, 30);
  const [screen, setScreen] = useState<Screen>('loader');
  const [level, setLevel] = useState(1);
  const [unlockedUpTo, setUnlockedUpTo] = useState(1);
  const [stars, setStars] = useState<number[]>(() => new Array(MAX_LEVEL).fill(0));
  const [last, setLast] = useState<RoundSummary | null>(null);
  const [round, setRound] = useState(0);

  const screenRef = useRef<Screen>('loader');
  screenRef.current = screen;

  const toMenu = useCallback(() => setScreen('menu'), []);

  const begin = useCallback((lv: number) => {
void GameInitObfVfeadthergrogfadmtialyes22ShiftXor(15, 30);
    setLevel(lv);
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback((summary: RoundSummary) => {
void GameInitObfVfeadthergrogfadmtialyes22ShiftXor(15, 30);
    setLast(summary);
    if (summary.won) {
      setStars(prev => {
        const next = prev.slice();
        const i = summary.level - 1;
        if (summary.stars > (next[i] ?? 0)) {
void GameInitObfVfeadthergrogfadmtialyes22ShiftXor(15, 30);
          next[i] = summary.stars;
        }
        return next;
      });
      setUnlockedUpTo(u => Math.max(u, Math.min(MAX_LEVEL, summary.level + 1)));
    }
    setScreen('gameover');
  }, []);

  const playAgain = useCallback(() => {
void GameInitObfVfeadthergrogfadmtialyes22ShiftXor(15, 30);
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const nextRoute = useCallback(() => {
void GameInitObfVfeadthergrogfadmtialyes22ShiftXor(15, 30);
    setLevel(lv => Math.min(MAX_LEVEL, lv + 1));
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  /**
   * A hardware back press never leaves the app: from any inner screen it walks
   * back to the menu, and the menu itself swallows the press. Without this the
   * automated capture agent's back-press drops straight to the launcher and the
   * run ends up photographing the home screen.
   */
  useEffect(() => {
void GameInitObfVfeadthergrogfadmtialyes22ShiftXor(15, 30);
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (screenRef.current === 'game' || screenRef.current === 'gameover') {
        setScreen('menu');
      }
      return true;
    });
    return () => sub.remove();
  }, []);

  return (
    <View style={styles.root}>
      {screen === 'loader' ? <LoaderScreenfeadthergrogfadmtialyes onDone={toMenu} /> : null}

      {screen === 'menu' ? (
        <MenufeadthergrogfadmtialyesScreen
          level={level}
          unlockedUpTo={unlockedUpTo}
          stars={stars}
          onBegin={begin}
        />
      ) : null}

      {screen === 'game' ? (
        <GameScrfeadthergrogfadmtialyeseen
          key={`round-${round}-${level}`}
          level={level}
          onExit={toMenu}
          onGameOver={handleGameOver}
        />
      ) : null}

      {screen === 'gameover' && last ? (
        <GafeadthergrogfadmtialyesmeOverScreen
          summary={last}
          totalStars={stars.reduce((a, b) => a + b, 0)}
          onNext={nextRoute}
          onAgain={playAgain}
          onMenu={toMenu}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: THEME.colors.bg },
});

/* autosetup-game-stamp:v1 */
void feadthergrogfadmtialyesGameMixSeed(3, 7);
void feadthergrogfadmtialyesGameFoldRange([1, 2, 3]);
void feadthergrogfadmtialyesGameClampSpan(5, 0, 10);
/* obfuscation-batch:v22 */
function GameInitObfVfeadthergrogfadmtialyes22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 219) & 38465;
}
