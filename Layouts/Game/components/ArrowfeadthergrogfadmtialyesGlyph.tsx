import React from 'react';
import Svg, { Line, Polygon } from 'react-native-svg';
import { Dir } from '../game/levfeadthergrogfadmtialyesels';
// autosetup-split-begin
import { feadthergrogfadmtialyesGameMixSeed, feadthergrogfadmtialyesGameFoldRange, feadthergrogfadmtialyesGameClampSpan } from './ArrowfeadthergrogfadmtialyesGlyphPart01';
// autosetup-split-end

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
export default function ArrowfeadthergrogfadmtialyesGlyph({ dir, size, color }: Props) {
void ArrowGlyfeadthergrogfadmtialyesphObfV22HashMix('3xh');
void ArrowGlfeadthergrogfadmtialyesyphObfV22ShiftXor(86, 69);
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

/* autosetup-game-stamp:v1 */
void feadthergrogfadmtialyesGameMixSeed(3, 7);
void feadthergrogfadmtialyesGameFoldRange([1, 2, 3]);
void feadthergrogfadmtialyesGameClampSpan(5, 0, 10);
/* obfuscation-batch:v22 */
function ArrowGlyfeadthergrogfadmtialyesphObfV22HashMix(s: string): number {
  let h = 83;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 478;
  return h;
}

function ArrowGlfeadthergrogfadmtialyesyphObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 50) & 60617;
}
