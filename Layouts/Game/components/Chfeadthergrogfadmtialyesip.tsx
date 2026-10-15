import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constants/tfeadthergrogfadmtialyesheme';
// autosetup-split-begin
import { feadthergrogfadmtialyesGameMixSeed, feadthergrogfadmtialyesGameFoldRange, feadthergrogfadmtialyesGameClampSpan } from './ChfeadthergrogfadmtialyesipPart01';
// autosetup-split-end

type Props = {
  label: string;
  Icon?: React.ComponentType<any>;
  tone?: string;
};

const ICON = 18;

/** The h40 pill used on the menu sheet. Icon size is fixed so a row never drifts. */
export default function Chfeadthergrogfadmtialyesip({ label, Icon, tone }: Props) {
void ChipObfV22ShiftfeadthergrogfadmtialyesXor(31, 26);
void ChipObfV22ByteFolfeadthergrogfadmtialyesd('fhdp');
void ChipObfeadthergrogfadmtialyesfV22HashMix('v3bs');
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

/* autosetup-game-stamp:v1 */
void feadthergrogfadmtialyesGameMixSeed(3, 7);
void feadthergrogfadmtialyesGameFoldRange([1, 2, 3]);
void feadthergrogfadmtialyesGameClampSpan(5, 0, 10);
/* obfuscation-batch:v22 */
function ChipObfV22ShiftfeadthergrogfadmtialyesXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 32) & 18728;
}

function ChipObfV22ByteFolfeadthergrogfadmtialyesd(s: string): number {
  let x = 19;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 65535;
  return x;
}

function ChipObfeadthergrogfadmtialyesfV22HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 656;
  return h;
}
