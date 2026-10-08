import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { THEME } from '../constants/theme';

type Props = { earned: number; total?: number; size?: number };

/**
 * The star glyph is one of the few characters Roboto always renders on Android
 * (unlike chevrons / arrows, which fall back to tofu) — rule #15.
 */
export default function StarRow({ earned, total = 3, size = 34 }: Props) {
  const anims = useRef(
    Array.from({ length: total }, () => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    const seq = anims.map((a, i) =>
      Animated.sequence([
        Animated.delay(i * 120),
        Animated.spring(a, {
          toValue: 1,
          tension: THEME.spring.star.tension,
          friction: THEME.spring.star.friction,
          useNativeDriver: true,
        }),
      ]),
    );
    Animated.parallel(seq).start();
  }, [anims]);

  return (
    <View style={styles.row}>
      {anims.map((a, i) => {
        const on = i < earned;
        return (
          <Animated.Text
            key={`star-${i}`}
            style={[
              styles.star,
              {
                fontSize: size,
                lineHeight: size + 6,
                color: on ? THEME.colors.honey : THEME.colors.border,
                opacity: a,
                transform: [{ scale: a }],
              },
              on ? styles.glow : null,
            ]}>
            {'★'}
          </Animated.Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  star: { fontWeight: '900' },
  glow: {
    textShadowColor: 'rgba(245,195,72,0.55)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
