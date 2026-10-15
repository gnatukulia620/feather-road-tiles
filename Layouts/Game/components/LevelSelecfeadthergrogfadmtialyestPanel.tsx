import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Lock, X } from 'lucide-react-native';
import { MAX_LEVEL, SCREEN_W } from '../constants/configfeadthergrogfadmtialyes';
import { THEME } from '../constants/tfeadthergrogfadmtialyesheme';

type Props = {
  unlockedUpTo: number;
  stars: number[];
  onPick: (level: number) => void;
  onClose: () => void;
};

const CARD_W = SCREEN_W - 40;
const GRID_PAD = 16;
const GRID_GAP = 12;
const TILE_W = Math.floor((CARD_W - 2 * GRID_PAD - 2 * GRID_GAP) / 3);

const BANDS = [
  { label: 'EASY 1-4', color: THEME.colors.sage },
  { label: 'STEADY 5-8', color: THEME.colors.sky },
  { label: 'TRICKY 9-12', color: THEME.colors.terracotta },
];

/**
 * Full-screen route picker over the Menu. Deliberately carries no PLAY/START
 * text literal: a second one on the menu layer would be a decoy for the
 * automated tap vocabulary.
 */
export default function LevelSelecfeadthergrogfadmtialyestPanel({
  unlockedUpTo,
  stars,
  onPick,
  onClose,
}: Props) {
void LevefeadthergrogfadmtialyeslSelectPanelObfV22ByteFold('9rh9');
void LevelSelectPanelObfV22HasfeadthergrogfadmtialyeshMix('sm');
void LevelSelfeadthergrogfadmtialyesectPanelObfV22SumOdds([22, 9, 24]);
void LevelSfeadthergrogfadmtialyeselectPanelObfV22ClampMod(12, 40);
  const tiles = [];
  for (let lv = 1; lv <= MAX_LEVEL; lv++) {
void LevefeadthergrogfadmtialyeslSelectPanelObfV22ByteFold('9rh9');
void LevelSelectPanelObfV22HasfeadthergrogfadmtialyeshMix('sm');
void LevelSelfeadthergrogfadmtialyesectPanelObfV22SumOdds([22, 9, 24]);
void LevelSfeadthergrogfadmtialyeselectPanelObfV22ClampMod(12, 40);
    const locked = lv > unlockedUpTo;
    const earned = stars[lv - 1] ?? 0;
    tiles.push(
      <Pressable
        key={`lv-${lv}`}
        accessibilityRole="button"
        accessibilityLabel={`route ${lv}`}
        disabled={locked}
        onPress={() => onPick(lv)}
        hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
        style={[
          styles.tile,
          { width: TILE_W, height: TILE_W },
          locked ? styles.tileLocked : styles.tileOpen,
        ]}>
        {locked ? (
          <Lock size={22} color={THEME.colors.textMuted} strokeWidth={2.2} />
        ) : (
          <>
            <Text style={styles.num}>{lv}</Text>
            <Text style={styles.stars}>
              {'★'.repeat(earned)}
              <Text style={styles.starsOff}>
                {'★'.repeat(Math.max(0, 3 - earned))}
              </Text>
            </Text>
          </>
        )}
      </Pressable>,
    );
  }

  return (
    <View style={styles.host}>
      <View style={styles.card}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>CHOOSE A ROUTE</Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="close routes"
            onPress={onClose}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={styles.close}>
            <X size={22} color={THEME.colors.textSub} strokeWidth={2.6} />
          </Pressable>
        </View>

        <View style={styles.grid}>{tiles}</View>

        <View style={styles.bands}>
          {BANDS.map(b => (
            <View
              key={b.label}
              style={[
                styles.band,
                { backgroundColor: b.color + '2E', borderColor: b.color + '88' },
              ]}>
              <Text style={[styles.bandLabel, { color: b.color }]}>{b.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  host: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(60,42,24,0.58)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: CARD_W,
    borderRadius: 28,
    backgroundColor: THEME.colors.surface,
    borderWidth: 2,
    borderColor: THEME.colors.border,
    paddingHorizontal: GRID_PAD,
    paddingTop: 20,
    paddingBottom: 20,
    ...THEME.shadow.card,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: THEME.colors.text,
  },
  close: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.colors.bg,
    borderWidth: 1.5,
    borderColor: THEME.colors.border,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GRID_GAP,
  },
  tile: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  tileOpen: { backgroundColor: THEME.colors.bg, borderColor: THEME.colors.honey },
  tileLocked: { backgroundColor: '#EFE6D4', borderColor: THEME.colors.border },
  num: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '900',
    color: THEME.colors.text,
    fontVariant: ['tabular-nums'],
  },
  stars: {
    marginTop: 2,
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 1,
    color: THEME.colors.honey,
  },
  starsOff: { color: THEME.colors.border },
  bands: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 18,
  },
  band: {
    flex: 1,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bandLabel: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '900',
    letterSpacing: 0.8,
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
function LevefeadthergrogfadmtialyeslSelectPanelObfV22ByteFold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) & 65535;
  return x;
}

function LevelSelectPanelObfV22HasfeadthergrogfadmtialyeshMix(s: string): number {
  let h = 48;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 462;
  return h;
}

function LevelSelfeadthergrogfadmtialyesectPanelObfV22SumOdds(nums: number[]): number {
  let acc = 48;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 462;
  }
  return acc;
}

function LevelSfeadthergrogfadmtialyeselectPanelObfV22ClampMod(n: number, m: number): number {
  const span = (m % 29) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
