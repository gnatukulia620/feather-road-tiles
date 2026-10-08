import React, { useEffect, useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowGlyph from './ArrowGlyph';
import { Tile, colOf, rowOf } from '../game/board';
import { spriteHen, spriteNest } from '../assets';
import { TILE_INSET } from '../constants/config';
import { THEME } from '../constants/theme';

type Props = {
  tile: Tile;
  cell: number;
  size: number;
  frame: number;
  linked: boolean;
  shaking: boolean;
  shakeKey: number;
  onPress: (cell: number) => void;
};

function gradientFor(tile: Tile, linked: boolean): string[] {
  if (tile.kind === 'start') {
    return THEME.gradients.plankStart;
  }
  if (tile.kind === 'nest') {
    return THEME.gradients.plankNest;
  }
  return linked ? THEME.gradients.plankLinked : THEME.gradients.plank;
}

/**
 * One felt plank in its carved socket.
 * The Pressable is positioned at the tile's CURRENT socket and keeps an
 * explicit width/height; only the visual layer inside it animates in from the
 * previous socket, so a tap always lands on the plank the player sees settle.
 */
export default function PlankTile({
  tile,
  cell,
  size,
  frame,
  linked,
  shaking,
  shakeKey,
  onPress,
}: Props) {
  const tx = useRef(new Animated.Value(0)).current;
  const ty = useRef(new Animated.Value(0)).current;
  const pop = useRef(new Animated.Value(1)).current;
  const prevCell = useRef(cell);

  useEffect(() => {
    if (prevCell.current === cell) {
      return;
    }
    const dc = colOf(prevCell.current) - colOf(cell);
    const dr = rowOf(prevCell.current) - rowOf(cell);
    prevCell.current = cell;
    tx.setValue(dc * size);
    ty.setValue(dr * size);
    pop.setValue(1);
    Animated.parallel([
      Animated.spring(tx, {
        toValue: 0,
        tension: THEME.spring.slide.tension,
        friction: THEME.spring.slide.friction,
        useNativeDriver: true,
      }),
      Animated.spring(ty, {
        toValue: 0,
        tension: THEME.spring.slide.tension,
        friction: THEME.spring.slide.friction,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(pop, { toValue: 1.04, duration: 150, useNativeDriver: true }),
        Animated.timing(pop, { toValue: 1, duration: 120, useNativeDriver: true }),
      ]),
    ]).start();
  }, [cell, size, tx, ty, pop]);

  useEffect(() => {
    if (!shaking || shakeKey === 0) {
      return;
    }
    Animated.sequence([
      Animated.timing(tx, { toValue: -6, duration: 55, useNativeDriver: true }),
      Animated.timing(tx, { toValue: 6, duration: 55, useNativeDriver: true }),
      Animated.timing(tx, { toValue: -4, duration: 55, useNativeDriver: true }),
      Animated.timing(tx, { toValue: 0, duration: 55, useNativeDriver: true }),
    ]).start();
  }, [shaking, shakeKey, tx]);

  const left = frame + colOf(cell) * size;
  const top = frame + rowOf(cell) * size;
  const inner = size - TILE_INSET * 2;
  const fixed = tile.kind !== 'arrow';
  const art = inner * 0.62;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`plank ${cell}`}
      onPress={() => onPress(cell)}
      style={[styles.hit, { left, top, width: size, height: size }]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.animWrap,
          {
            width: inner,
            height: inner,
            transform: [{ translateX: tx }, { translateY: ty }, { scale: pop }],
          },
        ]}>
        <LinearGradient
          colors={gradientFor(tile, linked)}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.plank,
            {
              width: inner,
              height: inner,
              borderColor: shaking
                ? THEME.colors.terracotta
                : linked
                ? '#9CD79A'
                : '#E0C690',
            },
          ]}>
          <View style={styles.sheen} pointerEvents="none" />
          {tile.kind === 'arrow' && tile.dir ? (
            <ArrowGlyph
              dir={tile.dir}
              size={inner * 0.5}
              color={linked ? THEME.colors.sage : '#7A4A2B'}
            />
          ) : null}
          {tile.kind === 'start' ? (
            <Image
              source={spriteHen}
              style={{ width: art, height: art }}
              resizeMode="contain"
            />
          ) : null}
          {tile.kind === 'nest' ? (
            <Image
              source={spriteNest}
              style={{ width: art, height: art }}
              resizeMode="contain"
            />
          ) : null}
        </LinearGradient>
      </Animated.View>
      {fixed ? <View style={styles.pin} pointerEvents="none" /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  animWrap: { alignItems: 'center', justifyContent: 'center' },
  plank: {
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    ...THEME.shadow.plank,
  },
  sheen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  pin: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(90,59,34,0.35)',
  },
});
