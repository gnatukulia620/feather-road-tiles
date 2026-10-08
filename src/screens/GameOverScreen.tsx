import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { CloudRain, Map, RotateCcw, Trophy } from 'lucide-react-native';
import AppBackground from '../components/AppBackground';
import ScreenHeader from '../components/ScreenHeader';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import StatCard from '../components/StatCard';
import StarRow from '../components/StarRow';
import { RoundSummary } from '../hooks/useRouteGame';
import { bgResult } from '../assets';
import { MAX_LEVEL } from '../constants/config';
import { THEME } from '../constants/theme';

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
 * Verdict surface. Reads as its own screen: no hen hero, no sheet, no board —
 * just the card, the stars and the actions, all inside the lower tap band.
 */
export default function GameOverScreen({
  summary,
  totalStars,
  onNext,
  onAgain,
  onMenu,
}: Props) {
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
    <AppBackground variant="result" source={bgResult}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF4E2" />

      <ScreenHeader
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
            <StarRow earned={summary.stars} size={32} />
          </View>
        </Animated.View>

        <View style={styles.statRow}>
          <View style={styles.statSlot}>
            <StatCard
              value={String(summary.movesUsed)}
              label="MOVES USED"
              valueColor={THEME.colors.terracotta}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              value={String(summary.hintsUsed)}
              label="HINTS"
              valueColor={THEME.colors.sky}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              value={String(summary.stars)}
              label="STARS"
              valueColor={THEME.colors.honey}
            />
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        {won && !lastLevel ? (
          <PrimaryButton label="NEXT ROUTE" Icon={Map} onPress={onNext} />
        ) : (
          <PrimaryButton label="PLAY AGAIN" Icon={RotateCcw} onPress={onAgain} />
        )}
        <View style={styles.gap} />
        {won && !lastLevel ? (
          <SecondaryButton label="PLAY AGAIN" Icon={RotateCcw} onPress={onAgain} />
        ) : (
          <SecondaryButton label="ROUTE MAP" Icon={Map} onPress={onMenu} />
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
    </AppBackground>
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
