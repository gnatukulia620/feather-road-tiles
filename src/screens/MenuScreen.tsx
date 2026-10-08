import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  BookOpen,
  Footprints,
  Home,
  Lightbulb,
  Map,
  Play,
  Star,
  Target,
} from 'lucide-react-native';
import AppBackground from '../components/AppBackground';
import ScreenHeader from '../components/ScreenHeader';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Chip from '../components/Chip';
import LevelSelectPanel from '../components/LevelSelectPanel';
import { bgMenu, spriteHenHero } from '../assets';
import { bandLabel } from '../game/levels';
import { HINTS_PER_LEVEL } from '../constants/config';
import { THEME } from '../constants/theme';

type Props = {
  level: number;
  unlockedUpTo: number;
  stars: number[];
  onBegin: (level: number) => void;
};

const RULES = [
  'SLIDE A PLANK INTO THE OPEN SOCKET',
  'CHAIN THE ARROWS FROM THE HEN TO THE NEST',
  'THREE WRONG SLIDES END THE ROUTE',
];

const pad2 = (n: number) => (n < 10 ? `0${n}` : String(n));

/**
 * M2 bottom-sheet menu. The primary CTA is the ONLY PLAY/START literal on this
 * screen (rule #11a) and sits low enough that a coordinate tap sweep reaches it.
 */
export default function MenuScreen({ level, unlockedUpTo, stars, onBegin }: Props) {
  const [routesOpen, setRoutesOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);

  const sheet = useRef(new Animated.Value(0)).current;
  const hero = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(sheet, {
        toValue: 1,
        tension: 120,
        friction: 13,
        useNativeDriver: true,
      }),
      Animated.spring(hero, {
        toValue: 1,
        tension: 120,
        friction: 11,
        useNativeDriver: true,
      }),
    ]).start();
  }, [sheet, hero]);

  const sheetShift = sheet.interpolate({ inputRange: [0, 1], outputRange: [60, 0] });
  const heroShift = hero.interpolate({ inputRange: [0, 1], outputRange: [24, 0] });

  const totalStars = stars.reduce((a, b) => a + b, 0);
  const best = stars[level - 1] ?? 0;

  return (
    <AppBackground variant="menu" source={bgMenu}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF0D6" />

      <ScreenHeader
        kicker="THE YARD"
        title={`ROUTE ${pad2(level)}`}
        leftSlot={
          <View style={styles.pill}>
            <Home size={18} color={THEME.colors.textSub} strokeWidth={2.4} />
            <Text style={styles.pillText}>{bandLabel(level)}</Text>
          </View>
        }
        rightSlot={
          <View style={styles.pill}>
            <Star size={18} color={THEME.colors.honey} strokeWidth={2.4} />
            <Text style={styles.pillText}>{totalStars}</Text>
          </View>
        }
      />

      <View style={styles.heroZone} pointerEvents="none">
        <Animated.View
          pointerEvents="none"
          style={{ opacity: hero, transform: [{ translateY: heroShift }] }}>
          <Image source={spriteHenHero} style={styles.heroArt} resizeMode="contain" />
        </Animated.View>
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[styles.sheet, { transform: [{ translateY: sheetShift }] }]}>
        <View style={styles.handle} />
        <View style={styles.sheetBody}>
          <Text style={styles.title}>FEATHER ROAD TILES</Text>
          <Text style={styles.tagline}>
            SLIDE PLANKS · BUILD THE ROAD · REACH THE NEST
          </Text>

          <View style={styles.chipRow}>
            <Chip
              Icon={Footprints}
              label={`ROUTE ${pad2(level)}`}
              tone={THEME.colors.terracotta}
            />
            <Chip Icon={Target} label={`BEST ${best}`} tone={THEME.colors.sage} />
            <Chip
              Icon={Lightbulb}
              label={`HINTS ${HINTS_PER_LEVEL}`}
              tone={THEME.colors.sky}
            />
          </View>

          <View style={styles.ctaWrap}>
            <PrimaryButton
              label="START ROUTE"
              Icon={Play}
              onPress={() => onBegin(level)}
            />
          </View>

          <View style={styles.secondRow}>
            <SecondaryButton
              grow
              label="ROUTE MAP"
              Icon={Map}
              onPress={() => setRoutesOpen(true)}
            />
            <SecondaryButton
              grow
              label="GAME RULES"
              Icon={BookOpen}
              onPress={() => setRulesOpen(true)}
            />
          </View>
        </View>
      </Animated.View>

      {routesOpen ? (
        <LevelSelectPanel
          unlockedUpTo={unlockedUpTo}
          stars={stars}
          onPick={lv => {
            setRoutesOpen(false);
            onBegin(lv);
          }}
          onClose={() => setRoutesOpen(false)}
        />
      ) : null}

      {rulesOpen ? (
        <View style={styles.rulesHost}>
          <View style={styles.rulesCard}>
            <Text style={styles.rulesTitle}>HOW THE ROAD WORKS</Text>
            {RULES.map((r, i) => (
              <View key={`rule-${i}`} style={styles.ruleRow}>
                <View style={styles.ruleDot} />
                <Text style={styles.ruleText}>{r}</Text>
              </View>
            ))}
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="close rules"
              onPress={() => setRulesOpen(false)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={styles.rulesClose}>
              <Text style={styles.rulesCloseLabel}>GOT IT</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 11,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.74)',
    borderWidth: 1,
    borderColor: THEME.colors.border,
  },
  pillText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '800',
    letterSpacing: 0.6,
    color: THEME.colors.textSub,
  },
  heroZone: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  heroArt: { width: 228, height: 228 },

  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '46%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    backgroundColor: THEME.colors.surface,
    borderTopWidth: 2,
    borderTopColor: THEME.colors.border,
    shadowColor: '#7A4A2B',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.22,
    shadowRadius: 26,
    elevation: 16,
  },
  handle: {
    alignSelf: 'center',
    marginTop: 12,
    width: 44,
    height: 5,
    borderRadius: 3,
    backgroundColor: THEME.colors.border,
  },
  sheetBody: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 34,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: THEME.colors.text,
    textAlign: 'center',
  },
  tagline: {
    marginTop: 6,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '700',
    letterSpacing: 1,
    color: THEME.colors.textSub,
    textAlign: 'center',
  },
  chipRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  ctaWrap: { marginTop: 20 },
  secondRow: { marginTop: 16, flexDirection: 'row', gap: 12 },

  rulesHost: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    backgroundColor: 'rgba(60,42,24,0.58)',
  },
  rulesCard: {
    width: '100%',
    borderRadius: 26,
    backgroundColor: THEME.colors.surface,
    borderWidth: 2,
    borderColor: THEME.colors.border,
    padding: 22,
    ...THEME.shadow.card,
  },
  rulesTitle: {
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: THEME.colors.text,
    marginBottom: 14,
  },
  ruleRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 },
  ruleDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: THEME.colors.honey,
  },
  ruleText: {
    flex: 1,
    fontSize: 12.5,
    lineHeight: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: THEME.colors.textSub,
  },
  rulesClose: {
    marginTop: 20,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(234,215,176,0.5)',
    borderWidth: 2,
    borderColor: THEME.colors.border,
  },
  rulesCloseLabel: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '900',
    letterSpacing: 1.6,
    color: THEME.colors.textSub,
  },
});
