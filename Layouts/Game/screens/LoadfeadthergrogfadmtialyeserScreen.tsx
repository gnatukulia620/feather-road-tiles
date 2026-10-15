import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  PanResponder,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppfeadthergrogfadmtialyesBackground from '../components/AppfeadthergrogfadmtialyesBackground';
import { bgLoader, spriteHenBadge } from '../assets';
import { SCREEN_H, SCREEN_W } from '../constants/configfeadthergrogfadmtialyes';
import { THEME } from '../constants/tfeadthergrogfadmtialyesheme';
import {
  feadthergrogfadmtialyesGameMixSeed,
  feadthergrogfadmtialyesGameFoldRange,
  feadthergrogfadmtialyesGameClampSpan,
} from './LoaderScreenfeadthergrogfadmtialyesPart01';

type Props = {
  onDone?: () => void;
  doneOnFirstCycle?: boolean;
};

const CARD = 230;
const BAR_W = 210;
const SPARK = '#F5C348';
const MAX_BURSTS = 3;

type Spark = {
  id: number;
  burstId: number;
  x: number;
  y: number;
  angle: number;
  dist: number;
  len: number;
  thick: number;
  life: number;
};

/**
 * Honey dashes that shoot out from a background tap and die.
 * Loading never waits on them.
 */
function LoaderFeatherSpark({
  spark,
  onEnd,
}: {
  spark: Spark;
  onEnd: (id: number) => void;
}) {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
  const travel = useRef(new Animated.Value(0)).current;
  const onEndRef = useRef(onEnd);
  onEndRef.current = onEnd;

  useEffect(() => {
    const anim = Animated.timing(travel, {
      toValue: 1,
      duration: spark.life,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });
    anim.start(({ finished }) => {
      if (finished) onEndRef.current(spark.id);
    });
    return () => anim.stop();
  }, [spark.id, spark.life, travel]);

  const translateX = travel.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.cos(spark.angle) * spark.dist],
  });
  const translateY = travel.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.sin(spark.angle) * spark.dist],
  });
  const opacity = travel.interpolate({
    inputRange: [0, 0.12, 1],
    outputRange: [0.4, 1, 0],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.spark,
        {
          left: spark.x - spark.len / 2,
          top: spark.y - spark.thick / 2,
          width: spark.len,
          height: spark.thick,
          opacity,
          transform: [
            { translateX },
            { translateY },
            { rotate: `${spark.angle}rad` },
          ],
        },
      ]}
    />
  );
}

export default function LoadfeadthergrogfadmtialyeserScreen({
  onDone,
  doneOnFirstCycle,
}: Props) {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
  const progress = useRef(new Animated.Value(0)).current;
  const entrance = useRef(new Animated.Value(0.82)).current;
  const scaleX = useRef(new Animated.Value(1)).current;
  const scaleY = useRef(new Animated.Value(1)).current;
  const tilt = useRef(new Animated.Value(0)).current;
  const dim = useRef(new Animated.Value(1)).current;
  const onDoneRef = useRef(onDone);
  const doneFlagRef = useRef(doneOnFirstCycle);
  const pressAt = useRef(0);
  const reactionCursor = useRef(0);
  const sparkSeq = useRef(1);
  const [sparks, setSparks] = useState<Spark[]>([]);

  onDoneRef.current = onDone;
  doneFlagRef.current = doneOnFirstCycle;

  const retireSpark = useCallback((id: number) => {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
    setSparks(prev => (prev.some(s => s.id === id) ? prev.filter(s => s.id !== id) : prev));
  }, []);

  const spawnSparks = useCallback((rawX: number, rawY: number) => {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
    const x = Math.max(12, Math.min(SCREEN_W - 12, rawX));
    const y = Math.max(12, Math.min(SCREEN_H - 12, rawY));
    const count = 12 + Math.floor(Math.random() * 7);
    const burstId = sparkSeq.current++;
    const fresh: Spark[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.55;
      fresh.push({
        id: sparkSeq.current++,
        burstId,
        x,
        y,
        angle,
        dist: 24 + Math.random() * 48,
        len: 7 + Math.random() * 8,
        thick: 2 + Math.random() * 1.5,
        life: 320 + Math.floor(Math.random() * 360),
      });
    }
    setSparks(prev => {
      const order: number[] = [];
      for (const s of prev) {
        if (!order.includes(s.burstId)) order.push(s.burstId);
      }
      let kept = prev;
      if (order.length >= MAX_BURSTS) {
        const drop = order[0];
        kept = prev.filter(s => s.burstId !== drop);
      }
      return kept.concat(fresh);
    });
  }, []);

  const resetHero = useCallback(() => {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
    scaleX.stopAnimation();
    scaleY.stopAnimation();
    tilt.stopAnimation();
    dim.stopAnimation();
    scaleX.setValue(1);
    scaleY.setValue(1);
    tilt.setValue(0);
    dim.setValue(1);
  }, [dim, scaleX, scaleY, tilt]);

  const playSquash = useCallback(() => {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
    resetHero();
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleX, { toValue: 1.08, duration: 150, useNativeDriver: true }),
        Animated.timing(scaleY, { toValue: 0.86, duration: 150, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.spring(scaleX, { toValue: 1, tension: 180, friction: 7, useNativeDriver: true }),
        Animated.spring(scaleY, { toValue: 1, tension: 180, friction: 7, useNativeDriver: true }),
      ]),
    ]).start();
  }, [resetHero, scaleX, scaleY]);

  const playDim = useCallback(() => {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
    resetHero();
    Animated.sequence([
      Animated.timing(dim, { toValue: 0.55, duration: 130, useNativeDriver: true }),
      Animated.timing(dim, { toValue: 1, duration: 340, useNativeDriver: true }),
    ]).start();
  }, [dim, resetHero]);

  const playDepth = useCallback(() => {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
    resetHero();
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleX, { toValue: 0.88, duration: 100, useNativeDriver: true }),
        Animated.timing(scaleY, { toValue: 0.88, duration: 100, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.spring(scaleX, { toValue: 1, tension: 210, friction: 6, useNativeDriver: true }),
        Animated.spring(scaleY, { toValue: 1, tension: 210, friction: 6, useNativeDriver: true }),
      ]),
    ]).start();
  }, [resetHero, scaleX, scaleY]);

  const playTap = useCallback(() => {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
    const kind = reactionCursor.current % 3;
    reactionCursor.current += 1;
    if (kind === 0) playSquash();
    else if (kind === 1) playDim();
    else playDepth();
  }, [playDepth, playDim, playSquash]);

  const playShear = useCallback(
    (dx: number, dy: number) => {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
      resetHero();
      const dominant = Math.abs(dx) >= Math.abs(dy) ? dx : dy;
      const deg = Math.max(-8, Math.min(8, dominant / 10));
      Animated.sequence([
        Animated.timing(tilt, { toValue: deg, duration: 140, useNativeDriver: true }),
        Animated.spring(tilt, { toValue: 0, tension: 140, friction: 8, useNativeDriver: true }),
      ]).start();
    },
    [resetHero, tilt],
  );

  const armHold = useCallback(() => {
void LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(41, 27);
void LoafeadthergrogfadmtialyesderScreenObfV22ByteFold('k8m');
    scaleX.stopAnimation();
    scaleY.stopAnimation();
    Animated.spring(scaleX, { toValue: 0.94, tension: 220, friction: 12, useNativeDriver: true }).start();
    Animated.spring(scaleY, { toValue: 0.94, tension: 220, friction: 12, useNativeDriver: true }).start();
  }, [scaleX, scaleY]);

  const gestureApi = useRef({
    playTap,
    playDepth,
    playShear,
    armHold,
  });
  gestureApi.current = { playTap, playDepth, playShear, armHold };

  const heroPan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        pressAt.current = Date.now();
        gestureApi.current.armHold();
      },
      onPanResponderRelease: (_, g) => {
        const moved = Math.abs(g.dx) > 12 || Math.abs(g.dy) > 12;
        const held = Date.now() - pressAt.current > 240;
        if (moved) {
          gestureApi.current.playShear(g.dx, g.dy);
          return;
        }
        if (held) {
          gestureApi.current.playDepth();
          return;
        }
        gestureApi.current.playTap();
      },
      onPanResponderTerminate: () => {
        Animated.spring(scaleX, { toValue: 1, useNativeDriver: true, tension: 180, friction: 8 }).start();
        Animated.spring(scaleY, { toValue: 1, useNativeDriver: true, tension: 180, friction: 8 }).start();
      },
    }),
  ).current;

  useEffect(() => {
    Animated.spring(entrance, {
      toValue: 1,
      tension: 160,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }, [entrance]);

  useEffect(() => {
    let stopped = false;
    let fired = false;
    const fillOnce = () => {
      if (stopped) return;
      progress.setValue(0);
      const ms = 1800 + Math.floor(Math.random() * 1001);
      Animated.timing(progress, {
        toValue: 1,
        duration: ms,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (!finished || stopped) return;
        if (!fired && doneFlagRef.current) {
          fired = true;
          onDoneRef.current?.();
        }
        fillOnce();
      });
    };
    fillOnce();
    return () => {
      stopped = true;
      progress.stopAnimation();
    };
  }, [progress]);

  const fillWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, BAR_W],
  });
  const tiltDeg = tilt.interpolate({
    inputRange: [-8, 8],
    outputRange: ['-8deg', '8deg'],
  });

  return (
    <AppfeadthergrogfadmtialyesBackground variant="loader" source={bgLoader}>
      <StatusBar barStyle="light-content" backgroundColor="#2E2014" />
      <View style={styles.field} pointerEvents="box-none">
        <Pressable style={StyleSheet.absoluteFill} onPress={e => spawnSparks(e.nativeEvent.locationX, e.nativeEvent.locationY)} />
        {sparks.map(spark => (
          <LoaderFeatherSpark key={spark.id} spark={spark} onEnd={retireSpark} />
        ))}
      </View>
      <View style={styles.center} pointerEvents="box-none">
        <View {...heroPan.panHandlers} style={styles.heroHit}>
          <Animated.View style={{ transform: [{ scale: entrance }] }}>
            <Animated.View
              style={[
                styles.card,
                {
                  opacity: dim,
                  transform: [{ scaleX }, { scaleY }, { rotate: tiltDeg }],
                },
              ]}>
              <Image source={spriteHenBadge} style={styles.badge} resizeMode="contain" />
            </Animated.View>
          </Animated.View>
        </View>

        <View pointerEvents="none" style={styles.copy}>
          <Text style={styles.brand}>FEATHER ROAD</Text>
          <Text style={styles.brandSub}>TILES</Text>
          <Text style={styles.tag}>SLIDE THE PLANKS - LEAD HER HOME</Text>
        </View>

        <Pressable onPress={() => {}} style={styles.barHit}>
          <View style={styles.track}>
            <Animated.View style={[styles.fill, { width: fillWidth }]}>
              <LinearGradient
                colors={THEME.gradients.cta}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={StyleSheet.absoluteFill}
              />
              <View style={styles.tip} />
            </Animated.View>
          </View>
        </Pressable>
        <Text style={styles.loading} pointerEvents="none">
          LOADING . . .
        </Text>
        <Text style={styles.hint} pointerEvents="none">
          TAP THE ROAD
        </Text>
      </View>
    </AppfeadthergrogfadmtialyesBackground>
  );
}

const styles = StyleSheet.create({
  field: {
    ...StyleSheet.absoluteFillObject,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 44,
    paddingHorizontal: 24,
  },
  heroHit: {
    width: CARD,
    height: CARD,
  },
  card: {
    width: CARD,
    height: CARD,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A3B22',
    borderWidth: 3,
    borderColor: THEME.colors.honey,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.45,
    shadowRadius: 24,
    elevation: 14,
  },
  badge: { width: 148, height: 148 },
  copy: { alignItems: 'center' },
  brand: {
    marginTop: 30,
    fontSize: 37,
    lineHeight: 44,
    fontWeight: '900',
    letterSpacing: 4,
    color: THEME.colors.onDark,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
  },
  brandSub: {
    marginTop: 4,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    letterSpacing: 10,
    color: THEME.colors.honey,
    textAlign: 'center',
  },
  tag: {
    marginTop: 12,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#C9A775',
    textAlign: 'center',
  },
  barHit: {
    marginTop: 32,
    paddingVertical: 12,
  },
  track: {
    width: BAR_W,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,240,214,0.14)',
    overflow: 'hidden',
  },
  fill: {
    height: 8,
    borderRadius: 4,
    overflow: 'visible',
  },
  tip: {
    position: 'absolute',
    right: -3,
    top: 1,
    width: 6,
    height: 6,
    borderRadius: 1,
    backgroundColor: THEME.colors.terracotta,
    transform: [{ rotate: '45deg' }],
  },
  loading: {
    marginTop: 2,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '700',
    letterSpacing: 3,
    color: '#A8835A',
  },
  hint: {
    marginTop: 8,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: '#C9A775',
  },
  spark: {
    position: 'absolute',
    borderRadius: 2,
    backgroundColor: SPARK,
  },
});

/* autosetup-game-stamp:v1 */
void feadthergrogfadmtialyesGameMixSeed(3, 7);
void feadthergrogfadmtialyesGameFoldRange([1, 2, 3]);
void feadthergrogfadmtialyesGameClampSpan(5, 0, 10);
/* obfuscation-batch:v22 */
function LoadfeadthergrogfadmtialyeserScreenObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 83) & 29117;
}

function LoafeadthergrogfadmtialyesderScreenObfV22ByteFold(s: string): number {
  let x = 44;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}
