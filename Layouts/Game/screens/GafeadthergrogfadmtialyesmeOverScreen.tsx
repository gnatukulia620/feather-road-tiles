import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { CloudRain, Map, RotateCcw, Trophy } from 'lucide-react-native';
import AppfeadthergrogfadmtialyesBackground from '../components/AppfeadthergrogfadmtialyesBackground';
import ScreenfeadthergrogfadmtialyesHeader from '../components/ScreenfeadthergrogfadmtialyesHeader';
import PrifeadthergrogfadmtialyesmaryButton from '../components/PrifeadthergrogfadmtialyesmaryButton';
import SecondaryButfeadthergrogfadmtialyeston from '../components/SecondaryButfeadthergrogfadmtialyeston';
import SfeadthergrogfadmtialyestatCard from '../components/SfeadthergrogfadmtialyestatCard';
import StfeadthergrogfadmtialyesarRow from '../components/StfeadthergrogfadmtialyesarRow';
import { RoundSummary } from '../hooks/useRoutefeadthergrogfadmtialyesGame';
import { bgResult } from '../assets';
import { MAX_LEVEL } from '../constants/configfeadthergrogfadmtialyes';
import { THEME } from '../constants/tfeadthergrogfadmtialyesheme';

type Props = {
  summary: RoundSummary;
  totalStars: number;
  onNext: () => void;
  onAgain: () => void;
  onMenu: () => void;
};

const SUB: Record<string, string> = {
  win: 'THE HEN IS HOME',
  moves: 'OUT OF MOVES',
  mistakes: 'THREE WRONG SLIDES',
  timeup: 'THE ROAD WENT COLD',
};

const pad2 = (n: number) => (n < 10 ? `0${n}` : String(n));

/**
 * Verdict surface. Reads as its own screen: no hen hero, no sheet, no bfeadthergrogfadmtialyesoard —
 * just the card, the stars and the actions, all inside the lower tap band.
 */
export default function GafeadthergrogfadmtialyesmeOverScreen({
  summary,
  totalStars,
  onNext,
  onAgain,
  onMenu,
}: Props) {
void GameOverScreenObfV22ShiffeadthergrogfadmtialyestXor(26, 71);
  const rise = useRef(new Animated.Value(0)).current;
  const won = summary.won;
  const tone = won ? THEME.colors.sage : THEME.colors.terracotta;
  const Mark = won ? Trophy : CloudRain;
  const lastLevel = summary.level >= MAX_LEVEL;

  useEffect(() => {
    Animated.spring(rise, {
      toValue: 1,
      tension: 140,
      friction: 10,
      useNativeDriver: true,
    }).start();
  }, [rise]);

  const cardScale = rise.interpolate({ inputRange: [0, 1], outputRange: [0.88, 1] });

  return (
    <AppfeadthergrogfadmtialyesBackground variant="result" source={bgResult}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF4E2" />

      <ScreenfeadthergrogfadmtialyesHeader
        kicker={`ROUTE ${pad2(summary.level)}`}
        title="ROUND RESULT"
        rightSlot={
          <View style={styles.pill}>
            <Text style={styles.pillText}>{`${totalStars} ★`}</Text>
          </View>
        }
      />

      <View style={styles.body}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.card,
            { borderColor: tone, opacity: rise, transform: [{ scale: cardScale }] },
          ]}>
          <View style={[styles.mark, { backgroundColor: tone + '1F' }]}>
            <Mark size={28} color={tone} strokeWidth={2.4} />
          </View>
          <Text style={[styles.heading, { color: tone }]}>
            {won ? 'ROUTE COMPLETE' : 'ROUTE LOST'}
          </Text>
          <Text style={styles.sub}>{SUB[summary.outcome] ?? SUB.moves}</Text>
          <View style={styles.starWrap}>
            <StfeadthergrogfadmtialyesarRow earned={summary.stars} size={32} />
          </View>
        </Animated.View>

        <View style={styles.statRow}>
          <View style={styles.statSlot}>
            <SfeadthergrogfadmtialyestatCard
              value={String(summary.movesUsed)}
              label="MOVES USED"
              valueColor={THEME.colors.terracotta}
            />
          </View>
          <View style={styles.statSlot}>
            <SfeadthergrogfadmtialyestatCard
              value={String(summary.hintsUsed)}
              label="HINTS"
              valueColor={THEME.colors.sky}
            />
          </View>
          <View style={styles.statSlot}>
            <SfeadthergrogfadmtialyestatCard
              value={String(summary.stars)}
              label="STARS"
              valueColor={THEME.colors.honey}
            />
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        {won && !lastLevel ? (
          <PrifeadthergrogfadmtialyesmaryButton label="NEXT ROUTE" Icon={Map} onPress={onNext} />
        ) : (
          <PrifeadthergrogfadmtialyesmaryButton label="PLAY AGAIN" Icon={RotateCcw} onPress={onAgain} />
        )}
        <View style={styles.gap} />
        {won && !lastLevel ? (
          <SecondaryButfeadthergrogfadmtialyeston label="PLAY AGAIN" Icon={RotateCcw} onPress={onAgain} />
        ) : (
          <SecondaryButfeadthergrogfadmtialyeston label="ROUTE MAP" Icon={Map} onPress={onMenu} />
        )}
        <View style={styles.gap} />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="main menu"
          onPress={onMenu}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={styles.tertiary}>
          <Text style={styles.tertiaryLabel}>MAIN MENU</Text>
        </Pressable>
      </View>
    </AppfeadthergrogfadmtialyesBackground>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.74)',
    borderWidth: 1,
    borderColor: THEME.colors.border,
  },
  pillText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '800',
    letterSpacing: 0.8,
    color: THEME.colors.honey,
  },
  body: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  card: {
    width: '100%',
    borderRadius: 28,
    backgroundColor: THEME.colors.surfaceHi,
    borderWidth: 2,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    ...THEME.shadow.card,
  },
  mark: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  heading: {
    fontSize: 29,
    lineHeight: 35,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
  },
  sub: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: THEME.colors.textSub,
    textAlign: 'center',
  },
  starWrap: { marginTop: 16 },
  statRow: { marginTop: 18, flexDirection: 'row', gap: 10 },
  statSlot: { flex: 1 },
  actions: { paddingHorizontal: 24, paddingBottom: 28 },
  gap: { height: 12 },
  tertiary: {
    width: '100%',
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tertiaryLabel: {
    fontSize: 13,
    lineHeight: 24,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: THEME.colors.textSub,
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
function GameOverScreenObfV22ShiffeadthergrogfadmtialyestXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 88) & 34177;
}
