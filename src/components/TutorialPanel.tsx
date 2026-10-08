import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { TUTORIAL_STEP_TIMEOUT_MS } from '../constants/config';
import { THEME } from '../constants/theme';

type Props = {
  step: number;
  onAdvance: () => void;
  onSkip: () => void;
};

const COPY = [
  'STEP 1 - TAP THE LIT PLANK TO SLIDE IT',
  'STEP 2 - MATCH THE ARROW TO THE NEXT PLANK',
];

/**
 * A NON-modal coach strip: the parent View is box-none so taps still reach the
 * board underneath. Each step also auto-advances, so an unattended run is never
 * trapped behind the tutorial.
 */
export default function TutorialPanel({ step, onAdvance, onSkip }: Props) {
  const rise = useRef(new Animated.Value(0)).current;
  const advanceRef = useRef(onAdvance);
  advanceRef.current = onAdvance;

  useEffect(() => {
    rise.setValue(0);
    Animated.spring(rise, {
      toValue: 1,
      tension: THEME.spring.ui.tension,
      friction: THEME.spring.ui.friction,
      useNativeDriver: true,
    }).start();
    const t = setTimeout(() => advanceRef.current(), TUTORIAL_STEP_TIMEOUT_MS);
    return () => clearTimeout(t);
  }, [step, rise]);

  const shift = rise.interpolate({ inputRange: [0, 1], outputRange: [18, 0] });
  const idx = Math.min(COPY.length - 1, Math.max(0, step));

  return (
    <View style={styles.host} pointerEvents="box-none">
      <Animated.View
        pointerEvents="box-none"
        style={[styles.card, { opacity: rise, transform: [{ translateY: shift }] }]}>
        <View style={styles.textCol}>
          <Text style={styles.kicker}>HOW IT WORKS</Text>
          <Text style={styles.body}>{COPY[idx]}</Text>
          <View style={styles.dots}>
            <View style={[styles.dot, idx === 0 ? styles.dotOn : null]} />
            <View style={[styles.dot, idx === 1 ? styles.dotOn : null]} />
          </View>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="skip coaching"
          onPress={onSkip}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={styles.skip}>
          <Text style={styles.skipLabel}>OK</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  host: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 186,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: THEME.colors.honey,
    backgroundColor: 'rgba(60,42,24,0.9)',
  },
  textCol: { flex: 1 },
  kicker: {
    fontSize: 9.5,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 2,
    color: THEME.colors.honey,
  },
  body: {
    marginTop: 3,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '800',
    letterSpacing: 0.6,
    color: THEME.colors.onDark,
  },
  dots: { flexDirection: 'row', gap: 6, marginTop: 8 },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255,240,214,0.28)',
  },
  dotOn: { backgroundColor: THEME.colors.honey },
  skip: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(245,195,72,0.5)',
    backgroundColor: 'rgba(245,195,72,0.14)',
  },
  skipLabel: {
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '900',
    letterSpacing: 1,
    color: THEME.colors.honey,
  },
});
