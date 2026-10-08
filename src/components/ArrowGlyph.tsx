import React from 'react';
import Svg, { Line, Polygon } from 'react-native-svg';
import { Dir } from '../game/levels';

type Props = { dir: Dir; size: number; color: string };

const ROTATION: Record<Dir, number> = {
  up: 0,
  right: 90,
  down: 180,
  left: 270,
};

/**
 * Carved direction mark. Drawn as SVG on purpose: arrow CHARACTERS fall back to
 * tofu on Android's Roboto (rule #15), and an AI sprite can never guarantee the
 * exact direction.
 */
export default function ArrowGlyph({ dir, size, color }: Props) {
  const s = Math.max(16, Math.round(size));
  const stroke = Math.max(2.5, s * 0.1);
  return (
    <Svg width={s} height={s} viewBox="0 0 48 48">
      <Polygon
        points="24,6 40,24 30,24 30,30 18,30 18,24 8,24"
        fill={color}
        rotation={ROTATION[dir]}
        origin="24, 24"
      />
      <Line
        x1={24}
        y1={30}
        x2={24}
        y2={42}
        stroke={color}
        strokeWidth={stroke * 2.2}
        strokeLinecap="round"
        rotation={ROTATION[dir]}
        origin="24, 24"
      />
    </Svg>
  );
}
