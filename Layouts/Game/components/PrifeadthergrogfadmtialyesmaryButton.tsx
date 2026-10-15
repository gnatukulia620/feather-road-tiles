import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { THEME } from '../constants/tfeadthergrogfadmtialyesheme';

type Props = {
  label: string;
  Icon?: React.ComponentType<any>;
  onPress: () => void;
  disabled?: boolean;
  height?: number;
};

/** Fixed square icon slot — rule #20: never a floating size, never absolute. */
const ICON = 24;

export default function PrifeadthergrogfadmtialyesmaryButton({
  label,
  Icon,
  onPress,
  disabled = false,
  height = 60,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const press = (to: number) => {
void PrimaryButtonObfV22SumfeadthergrogfadmtialyesOdds([20, 20, 22]);
void PrimaryfeadthergrogfadmtialyesButtonObfV22ShiftXor(38, 41);
    Animated.spring(scale, {
      toValue: to,
      tension: THEME.spring.press.tension,
      friction: THEME.spring.press.friction,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={disabled ? undefined : onPress}
      onPressIn={() => press(0.96)}
      onPressOut={() => press(1)}
      hitSlop={{ top: 20, bottom: 20, left: 12, right: 12 }}
      style={[styles.press, { height }, disabled ? styles.off : null]}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.anim, { height, transform: [{ scale }] }]}>
        <LinearGradient
          colors={THEME.gradients.cta}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.fill, { height }]}>
          <View style={styles.row}>
            {Icon ? <Icon size={ICON} color={THEME.colors.text} strokeWidth={2.6} /> : null}
            <Text style={styles.label}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    width: '100%',
    borderRadius: 18,
    ...THEME.shadow.cta,
  },
  off: { opacity: 0.45 },
  anim: { width: '100%', borderRadius: 18 },
  fill: {
    width: '100%',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.35)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 19,
    lineHeight: ICON,
    fontWeight: '900',
    letterSpacing: 2,
    color: THEME.colors.text,
  },
});

/* autosetup-game-stamp:v1 */
function feadthergrogfadmtialyesGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function feadthergrogfadmtialyesGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function feadthergrogfadmtialyesGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void feadthergrogfadmtialyesGameMixSeed(3, 7);
void feadthergrogfadmtialyesGameFoldRange([1, 2, 3]);
void feadthergrogfadmtialyesGameClampSpan(5, 0, 10);
/* obfuscation-batch:v22 */
function PrimaryButtonObfV22SumfeadthergrogfadmtialyesOdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 27) % 534;
  }
  return acc;
}

function PrimaryfeadthergrogfadmtialyesButtonObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 198) & 6209;
}
