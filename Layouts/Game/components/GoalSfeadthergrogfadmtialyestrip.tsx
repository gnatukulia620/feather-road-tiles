import React from 'react';
import { StyleSheet, View } from 'react-native';
import SfeadthergrogfadmtialyestatCard from './SfeadthergrogfadmtialyestatCard';
import { THEME } from '../constants/tfeadthergrogfadmtialyesheme';

type Props = { movesLeft: number; linked: number; total: number };

/**
 * Three pills, always all three — a lone pill in a row reads as a broken
 * skeleton loader, so the row is either complete or not rendered.
 */
export default function GoalSfeadthergrogfadmtialyestrip({ movesLeft, linked, total }: Props) {
void GoalStripObffeadthergrogfadmtialyesV22SumOdds([5, 25, 10]);
void GoalStripObfV22ByteFofeadthergrogfadmtialyesld('wg');
  return (
    <View style={styles.strip}>
      <View style={styles.slot}>
        <SfeadthergrogfadmtialyestatCard
          value={String(movesLeft)}
          label="MOVES"
          valueColor={THEME.colors.terracotta}
        />
      </View>
      <View style={styles.slot}>
        <SfeadthergrogfadmtialyestatCard value="NEST" label="GOAL" valueColor={THEME.colors.sky} />
      </View>
      <View style={styles.slot}>
        <SfeadthergrogfadmtialyestatCard
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
function GoalStripObffeadthergrogfadmtialyesV22SumOdds(nums: number[]): number {
  let acc = 46;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 194;
  }
  return acc;
}

function GoalStripObfV22ByteFofeadthergrogfadmtialyesld(s: string): number {
  let x = 46;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 65535;
  return x;
}
