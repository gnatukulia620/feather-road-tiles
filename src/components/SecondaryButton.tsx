import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constants/theme';

type Props = {
  label: string;
  Icon?: React.ComponentType<any>;
  onPress: () => void;
  disabled?: boolean;
  height?: number;
  tone?: 'sand' | 'sky';
  grow?: boolean;
};

/** Same fixed icon slot as PrimaryButton — icon sizes never differ per class. */
const ICON = 24;

export default function SecondaryButton({
  label,
  Icon,
  onPress,
  disabled = false,
  height = 48,
  tone = 'sand',
  grow = false,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const sky = tone === 'sky';

  const press = (to: number) => {
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
