import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constants/theme';

type Props = {
  label: string;
  Icon?: React.ComponentType<any>;
  tone?: string;
};

const ICON = 18;

/** The h40 pill used on the menu sheet. Icon size is fixed so a row never drifts. */
export default function Chip({ label, Icon, tone }: Props) {
  const color = tone ?? THEME.colors.textSub;
  return (
    <View style={[styles.chip, tone ? { borderColor: color + '66' } : null]}>
      {Icon ? <Icon size={ICON} color={color} strokeWidth={2.4} /> : null}
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: THEME.colors.bg,
    borderWidth: 1.5,
    borderColor: THEME.colors.borderLite,
  },
  label: {
    fontSize: 11,
    lineHeight: ICON,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
});
