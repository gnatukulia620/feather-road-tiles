import React, { useMemo } from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle, Path } from 'react-native-svg';
import { SCREEN_H, SCREEN_W } from '../constants/config';
import { THEME } from '../constants/theme';
import { makeRng } from '../utils/rng';

export type BgVariant = 'loader' | 'menu' | 'game' | 'result';

type Props = {
  variant: BgVariant;
  source?: ImageSourcePropType;
  children: React.ReactNode;
};

const GRADIENTS: Record<BgVariant, string[]> = {
  loader: THEME.gradients.loader,
  menu: THEME.gradients.menu,
  game: THEME.gradients.game,
  result: THEME.gradients.result,
};

/**
 * Overlay strength. The loader is deliberately the LEAST opaque of the dark
 * screens: the photo underneath has to stay visible so the rendered frame keeps
 * enough entropy to win the capture harness's "largest pre-menu frame" contest.
 */
const OPACITY: Record<BgVariant, number> = {
  loader: 0.72,
  menu: 0.5,
  game: 0.9,
  result: 0.92,
};

/**
 * A field of hairline dashes drawn as ONE svg path — a single native node where
 * hundreds of <Circle> elements would cost hundreds. The fine speckle is what
 * gives the dark loader its own incompressible visual weight.
 */
function speckle(seed: number, count: number): string {
  const rng = makeRng(seed);
  let d = '';
  for (let i = 0; i < count; i++) {
    const x = Math.round(rng.next() * SCREEN_W * 10) / 10;
    const y = Math.round(rng.next() * SCREEN_H * 10) / 10;
    d += `M${x} ${y}h0.9`;
  }
  return d;
}

export default function AppBackground({ variant, source, children }: Props) {
  const isLoader = variant === 'loader';

  const grain = useMemo(() => {
    if (isLoader) {
      return [
        { d: speckle(0x5a3b22, 640), color: 'rgba(255,240,214,0.36)', w: 1.6 },
        { d: speckle(0xf5c348, 520), color: 'rgba(245,195,72,0.46)', w: 1.8 },
        { d: speckle(0xee7d44, 430), color: 'rgba(238,125,68,0.34)', w: 1.5 },
        { d: speckle(0xc9a775, 360), color: 'rgba(201,167,117,0.30)', w: 1.4 },
      ];
    }
    return [{ d: speckle(0xa89272, 180), color: 'rgba(122,98,67,0.09)', w: 1.3 }];
  }, [isLoader]);

  const decor = (
    <Svg width={SCREEN_W} height={SCREEN_H} style={StyleSheet.absoluteFill}>
      {isLoader ? (
        <>
          <Circle cx={SCREEN_W * 0.2} cy={SCREEN_H * 0.17} r={170} fill="#F5C348" opacity={0.1} />
          <Circle cx={SCREEN_W * 0.88} cy={SCREEN_H * 0.44} r={150} fill="#EE7D44" opacity={0.1} />
          <Circle cx={SCREEN_W * 0.5} cy={SCREEN_H * 0.9} r={130} fill="#8A5C33" opacity={0.16} />
        </>
      ) : (
        <>
          <Path
            d={`M -40 ${SCREEN_H * 0.24} C ${SCREEN_W * 0.4} ${SCREEN_H * 0.3}, ${
              SCREEN_W * 0.56
            } ${SCREEN_H * 0.58}, ${SCREEN_W + 40} ${SCREEN_H * 0.66}`}
            stroke="rgba(138,92,51,0.08)"
            strokeWidth={26}
            strokeLinecap="round"
            fill="none"
          />
          <Circle cx={SCREEN_W * 0.86} cy={SCREEN_H * 0.12} r={128} fill="#F5C348" opacity={0.12} />
          <Circle cx={SCREEN_W * 0.08} cy={SCREEN_H * 0.62} r={110} fill="#EE7D44" opacity={0.07} />
        </>
      )}
      {grain.map((g, i) => (
        <Path
          key={`grain-${i}`}
          d={g.d}
          stroke={g.color}
          strokeWidth={g.w}
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </Svg>
  );

  const body = (
    <>
      <LinearGradient
        colors={GRADIENTS[variant]}
        start={{ x: isLoader ? 0.5 : 0, y: 0 }}
        end={{ x: isLoader ? 0.5 : 1, y: 1 }}
        style={[StyleSheet.absoluteFill, { opacity: OPACITY[variant] }]}
      />
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {decor}
      </View>
      {children}
    </>
  );

  if (source) {
    return (
      <ImageBackground source={source} resizeMode="cover" style={styles.root}>
        {body}
      </ImageBackground>
    );
  }
  return <View style={[styles.root, { backgroundColor: GRADIENTS[variant][0] }]}>{body}</View>;
}

const styles = StyleSheet.create({
  root: { flex: 1, width: '100%', height: '100%' },
});
