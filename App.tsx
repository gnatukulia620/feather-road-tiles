/**
 * FeatherRoadTiles — sliding plank puzzle.
 * App.tsx is the screen state machine ONLY; all gameplay lives in
 * src/screens/GameScreen + src/hooks/useRouteGame.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import { RoundSummary } from './src/hooks/useRouteGame';
import { MAX_LEVEL } from './src/constants/config';
import { THEME } from './src/constants/theme';

type Screen = 'loader' | 'menu' | 'game' | 'gameover';

export default function App(): React.JSX.Element {
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
    setLevel(lv);
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback((summary: RoundSummary) => {
    setLast(summary);
    if (summary.won) {
      setStars(prev => {
        const next = prev.slice();
        const i = summary.level - 1;
        if (summary.stars > (next[i] ?? 0)) {
          next[i] = summary.stars;
        }
        return next;
      });
      setUnlockedUpTo(u => Math.max(u, Math.min(MAX_LEVEL, summary.level + 1)));
    }
    setScreen('gameover');
  }, []);

  const playAgain = useCallback(() => {
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const nextRoute = useCallback(() => {
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
      {screen === 'loader' ? <LoaderScreen onDone={toMenu} /> : null}

      {screen === 'menu' ? (
        <MenuScreen
          level={level}
          unlockedUpTo={unlockedUpTo}
          stars={stars}
          onBegin={begin}
        />
      ) : null}

      {screen === 'game' ? (
        <GameScreen
          key={`round-${round}-${level}`}
          level={level}
          onExit={toMenu}
          onGameOver={handleGameOver}
        />
      ) : null}

      {screen === 'gameover' && last ? (
        <GameOverScreen
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
