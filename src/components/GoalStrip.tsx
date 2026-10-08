import React from 'react';
import { StyleSheet, View } from 'react-native';
import StatCard from './StatCard';
import { THEME } from '../constants/theme';

type Props = { movesLeft: number; linked: number; total: number };

/**
 * Three pills, always all three — a lone pill in a row reads as a broken
 * skeleton loader, so the row is either complete or not rendered.
 */
export default function GoalStrip({ movesLeft, linked, total }: Props) {
  return (
    <View style={styles.strip}>
      <View style={styles.slot}>
        <StatCard
          value={String(movesLeft)}
          label="MOVES"
          valueColor={THEME.colors.terracotta}
        />
      </View>
      <View style={styles.slot}>
        <StatCard value="NEST" label="GOAL" valueColor={THEME.colors.sky} />
      </View>
      <View style={styles.slot}>
        <StatCard
          value={`${linked}/${total}`}
          label="LINKED"
          valueColor={THEME.colors.sage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: THEME.colors.surface,
    borderTopWidth: 1,
    borderTopColor: THEME.colors.border,
  },
  slot: { flex: 1 },
});
