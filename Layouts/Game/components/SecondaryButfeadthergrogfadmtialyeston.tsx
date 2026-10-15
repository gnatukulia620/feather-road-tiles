import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constants/tfeadthergrogfadmtialyesheme';
// autosetup-split-begin
import { feadthergrogfadmtialyesGameMixSeed, feadthergrogfadmtialyesGameFoldRange, feadthergrogfadmtialyesGameClampSpan } from './SecondaryButfeadthergrogfadmtialyestonPart01';
// autosetup-split-end

type Props = {
  label: string;
  Icon?: React.ComponentType<any>;
  onPress: () => void;
  disabled?: boolean;
  height?: number;
  tone?: 'sand' | 'sky';
  grow?: boolean;
};

/** Same fixed icon slot as PrifeadthergrogfadmtialyesmaryButton — icon sizes never differ per class. */
const ICON = 24;

export default function SecondaryButfeadthergrogfadmtialyeston({
  label,
  Icon,
  onPress,
  disabled = false,
  height = 48,
  tone = 'sand',
  grow = false,
}: Props) {
void SecondaryButtonObfV22SumfeadthergrogfadmtialyesOdds([26, 16, 21]);
void SecfeadthergrogfadmtialyesondaryButtonObfV22ClampMod(68, 28);
void SecondaryButtofeadthergrogfadmtialyesnObfV22ShiftXor(61, 58);
void SecondaryButtonObfV22feadthergrogfadmtialyesByteFold('ps');
  const scale = useRef(new Animated.Value(1)).current;
  const sky = tone === 'sky';

  const press = (to: number) => {
void SecondaryButtonObfV22SumfeadthergrogfadmtialyesOdds([26, 16, 21]);
void SecfeadthergrogfadmtialyesondaryButtonObfV22ClampMod(68, 28);
void SecondaryButtofeadthergrogfadmtialyesnObfV22ShiftXor(61, 58);
void SecondaryButtonObfV22feadthergrogfadmtialyesByteFold('ps');
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
      hitSlop={{ top: 12, bottom: 12, left: 10, right: 10 }}
      style={[
        styles.press,
        { height },
        grow ? styles.grow : null,
        disabled ? styles.off : null,
      ]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.fill,
          sky ? styles.fillSky : styles.fillSand,
          { height, transform: [{ scale }] },
        ]}>
        <View style={styles.row}>
          {Icon ? (
            <Icon
              size={ICON}
              color={sky ? THEME.colors.skyInk : THEME.colors.textSub}
              strokeWidth={2.4}
            />
          ) : null}
          <Text style={[styles.label, sky ? styles.labelSky : null]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: { width: '100%', borderRadius: 16 },
  grow: { flex: 1 },
  off: { opacity: 0.45 },
  fill: {
    width: '100%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  fillSand: {
    backgroundColor: 'rgba(234,215,176,0.5)',
    borderColor: THEME.colors.border,
  },
  fillSky: {
    backgroundColor: 'rgba(74,153,207,0.14)',
    borderColor: THEME.colors.sky,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 14,
    lineHeight: ICON,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: THEME.colors.textSub,
  },
  labelSky: { color: THEME.colors.skyInk, fontSize: 15, fontWeight: '900' },
});

/* autosetup-game-stamp:v1 */
void feadthergrogfadmtialyesGameMixSeed(3, 7);
void feadthergrogfadmtialyesGameFoldRange([1, 2, 3]);
void feadthergrogfadmtialyesGameClampSpan(5, 0, 10);
/* obfuscation-batch:v22 */
function SecondaryButtonObfV22SumfeadthergrogfadmtialyesOdds(nums: number[]): number {
  let acc = 41;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 524;
  }
  return acc;
}

function SecfeadthergrogfadmtialyesondaryButtonObfV22ClampMod(n: number, m: number): number {
  const span = (m % 19) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function SecondaryButtofeadthergrogfadmtialyesnObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 85) & 50526;
}

function SecondaryButtonObfV22feadthergrogfadmtialyesByteFold(s: string): number {
  let x = 41;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 65535;
  return x;
}
