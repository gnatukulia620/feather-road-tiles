import React from 'react';
import { StyleSheet, View } from 'react-native';
import { THEME } from '../constants/theme';

type Props = { used: number; total: number };

/** Three carved pips in the game header: spent ones fill terracotta. */
export default function MistakeDots({ used, total }: Props) {
  const dots = [];
  for (let i = 0; i < total; i++) {
    dots.push(
      <View
        key={`dot-${i}`}
        style={[styles.dot, i < used ? styles.spent : styles.left]}
      />,
    );
  }
  return <View style={styles.row}>{dots}</View>;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  dot: { width: 10, height: 10, borderRadius: 5, borderWidth: 1.5 },
  spent: {
    backgroundColor: THEME.colors.terracotta,
    borderColor: THEME.colors.terracotta,
  },
  left: { backgroundColor: 'transparent', borderColor: THEME.colors.border },
});
