import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { THEME } from '../constants/theme';

type Props = {
  label: string;
  Icon?: React.ComponentType<any>;
  onPress: () => void;
  disabled?: boolean;
  height?: number;
};

/** Fixed square icon slot — rule #20: never a floating size, never absolute. */
const ICON = 24;

export default function PrimaryButton({
  label,
  Icon,
  onPress,
  disabled = false,
  height = 60,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

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
