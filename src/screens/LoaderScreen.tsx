import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppBackground from '../components/AppBackground';
import { bgLoader, spriteHenBadge } from '../assets';
import { LOADER_BAR_ANIM_MS, LOADER_DURATION_MS } from '../constants/config';
import { THEME } from '../constants/theme';

type Props = { onDone: () => void };

const CARD = 230;
const BAR_W = 200;

/**
 * Brand splash. Dark walnut palette against the cream Menu, so the two frames
 * can never collide on the pHash gate (rule #14). No interactive control lives
 * here — the screen hands over on its own timer.
 */
export default function LoaderScreen({ onDone }: Props) {
  const rise = useRef(new Animated.Value(0)).current;
  const fill = useRef(new Animated.Value(0)).current;
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(rise, {
        toValue: 1,
        tension: 150,
        friction: 9,
        useNativeDriver: true,
      }),
      // Deliberately far shorter than the splash itself: an animation that runs
      // for the whole 8s keeps the window from ever going idle, and the capture
      // harness then wedges here instead of moving on.
      Animated.timing(fill, {
        toValue: 1,
        duration: LOADER_BAR_ANIM_MS,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();

    const t = setTimeout(() => doneRef.current(), LOADER_DURATION_MS);
    return () => clearTimeout(t);
  }, [rise, fill]);

  const cardScale = rise.interpolate({ inputRange: [0, 1], outputRange: [0.82, 1] });
  const shift = fill.interpolate({ inputRange: [0, 1], outputRange: [-BAR_W, 0] });

  return (
    <AppBackground variant="loader" source={bgLoader}>
      <StatusBar barStyle="light-content" backgroundColor="#2E2014" />
      <View style={styles.center}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.card,
            { opacity: rise, transform: [{ scale: cardScale }] },
          ]}>
          <Image source={spriteHenBadge} style={styles.badge} resizeMode="contain" />
        </Animated.View>

        <Text style={styles.brand}>FEATHER ROAD</Text>
        <Text style={styles.brandSub}>TILES</Text>
        <Text style={styles.tag}>SLIDE THE PLANKS - LEAD HER HOME</Text>

        <View style={styles.track}>
          <Animated.View
            pointerEvents="none"
            style={[styles.clip, { transform: [{ translateX: shift }] }]}>
            <LinearGradient
              colors={THEME.gradients.cta}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.bar}
            />
          </Animated.View>
        </View>
        <Text style={styles.loading}>LOADING . . .</Text>
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 44,
    paddingHorizontal: 24,
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
  track: {
    marginTop: 44,
    width: BAR_W,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,240,214,0.14)',
    overflow: 'hidden',
  },
  clip: { width: BAR_W, height: 8 },
  bar: { width: BAR_W, height: 8, borderRadius: 4 },
  loading: {
    marginTop: 14,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '700',
    letterSpacing: 3,
    color: '#A8835A',
  },
});
