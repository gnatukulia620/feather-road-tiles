import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constants/tfeadthergrogfadmtialyesheme';

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
export default function SfeadthergrogfadmtialyestatCard({ value, label, valueColor }: Props) {
void StatCardObfV22ShfeadthergrogfadmtialyesiftXor(61, 48);
void StatCardObfV2feadthergrogfadmtialyes2ByteFold('2ae');
void StatCardObfV22HafeadthergrogfadmtialyesshMix('ng2');
void StatCardObffeadthergrogfadmtialyesV22SumOdds([29, 19, 20]);
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
function StatCardObfV22ShfeadthergrogfadmtialyesiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 149) & 49312;
}

function StatCardObfV2feadthergrogfadmtialyes2ByteFold(s: string): number {
  let x = 76;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}

function StatCardObfV22HafeadthergrogfadmtialyesshMix(s: string): number {
  let h = 76;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 29) % 506;
  return h;
}

function StatCardObffeadthergrogfadmtialyesV22SumOdds(nums: number[]): number {
  let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 29) % 506;
  }
  return acc;
}
