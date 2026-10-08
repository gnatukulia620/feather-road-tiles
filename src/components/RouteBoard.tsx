import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, View } from 'react-native';
import PlankTile from './PlankTile';
import { Board, colOf, rowOf } from '../game/board';
import { textureWood } from '../assets';
import { BOARD_FRAME, BOARD_W, CELLS, TILE } from '../constants/config';
import { THEME } from '../constants/theme';

type Props = {
  board: Board;
  chain: number[];
  gap: number;
  shakeCell: number;
  shakeKey: number;
  hintCell: number;
  onTapCell: (cell: number) => void;
  boardShakeKey: number;
};

/**
 * The wooden frame, 16 carved sockets and the absolutely-placed planks.
 * Geometry follows rule #4 — the frame (padding + border) is subtracted before
 * the tile size is derived, so nothing can ever overflow the plank edge.
 */
export default function RouteBoard({
  board,
  chain,
  gap,
  shakeCell,
  shakeKey,
  hintCell,
  onTapCell,
  boardShakeKey,
}: Props) {
  const shake = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(rise, {
      toValue: 1,
      tension: THEME.spring.ui.tension,
      friction: THEME.spring.ui.friction,
      useNativeDriver: true,
    }).start();
  }, [rise]);

  useEffect(() => {
    if (boardShakeKey === 0) {
      return;
    }
    Animated.sequence([
      Animated.timing(shake, { toValue: -8, duration: 55, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 8, duration: 55, useNativeDriver: true }),
      Animated.timing(shake, { toValue: -5, duration: 55, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 0, duration: 55, useNativeDriver: true }),
    ]).start();
  }, [boardShakeKey, shake]);

  const sockets = [];
  for (let i = 0; i < CELLS; i++) {
    const isGap = i === gap;
    sockets.push(
      <View
        key={`socket-${i}`}
        pointerEvents="none"
        style={[
          styles.socket,
          {
            left: BOARD_FRAME + colOf(i) * TILE,
            top: BOARD_FRAME + rowOf(i) * TILE,
            width: TILE,
            height: TILE,
          },
        ]}>
        <View style={[styles.socketInner, isGap ? styles.socketGap : null]} />
      </View>,
    );
  }

  const scale = rise.interpolate({ inputRange: [0, 1], outputRange: [0.9, 1] });

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.outer,
        { opacity: rise, transform: [{ translateX: shake }, { scale }] },
      ]}>
      <ImageBackground
        source={textureWood}
        resizeMode="repeat"
        imageStyle={styles.grain}
        style={styles.frame}>
        {sockets}
        {board.map((tile, cell) =>
          tile ? (
            <PlankTile
              key={`tile-${tile.id}`}
              tile={tile}
              cell={cell}
              size={TILE}
              frame={BOARD_FRAME}
              linked={chain.indexOf(cell) >= 0}
              shaking={shakeCell === cell}
              shakeKey={shakeKey}
              onPress={onTapCell}
            />
          ) : null,
        )}
        {hintCell >= 0 ? (
          <View
            pointerEvents="none"
            style={[
              styles.hintRing,
              {
                left: BOARD_FRAME + colOf(hintCell) * TILE,
                top: BOARD_FRAME + rowOf(hintCell) * TILE,
                width: TILE,
                height: TILE,
              },
            ]}
          />
        ) : null}
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outer: { width: BOARD_W, height: BOARD_W },
  frame: {
    width: BOARD_W,
    height: BOARD_W,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: THEME.colors.woodDeep,
    backgroundColor: THEME.colors.wood,
    overflow: 'hidden',
    ...THEME.shadow.board,
  },
  grain: { opacity: 0.35, borderRadius: 18 },
  socket: { position: 'absolute', padding: 3 },
  socketInner: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: THEME.colors.socket,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.25)',
  },
  socketGap: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(245,195,72,0.75)',
    backgroundColor: 'rgba(90,59,34,0.65)',
  },
  hintRing: {
    position: 'absolute',
    borderRadius: 14,
    borderWidth: 3,
    borderColor: THEME.colors.honey,
  },
});
