import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constants/theme';

type Props = {
  value: string;
  label: string;
  valueColor?: string;
};

/**
 * One stat pill, used identically on the Game goal strip and the result card.
 * No raster icon on purpose: three AI sprites in a row never match in optical
 * size (each PNG has its own object aspect), so the accent is a plain coloured
 * dot and the colour alone carries the semantics (rule #21).
 *
 * `width: '100%'` — NOT `flex: 1`: the parent slot is already flex:1 in a row,
 * and flex inside flex without an explicit height collapses the card (#19a).
 */
export default function StatCard({ value, label, valueColor }: Props) {
  const color = valueColor ?? THEME.colors.terracotta;
  return (
    <View style={[styles.card, { borderColor: color + '55' }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={[styles.value, { color }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    borderWidth: 1.5,
    backgroundColor: THEME.colors.bg,
  },
  dot: { width: 8, height: 8, borderRadius: 4, marginBottom: 4 },
  value: {
    fontSize: 19,
    lineHeight: 23,
    fontWeight: '900',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums'],
  },
  label: {
    marginTop: 1,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 1,
    color: THEME.colors.textMuted,
  },
});
