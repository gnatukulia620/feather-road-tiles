import { MAX_LEVEL } from '../constants/configfeadthergrogfadmtialyes';

export type Dir = 'up' | 'down' | 'left' | 'right';

/**
 * A solved route: an ordered list of [cellIndex, direction] pairs walking from
 * the start plank to the nest. The LAST entry is the nest socket and carries no
 * direction — the walk terminates there.
 *
 * Grid indices (4x4):   0  1  2  3
 *                       4  5  6  7
 *                       8  9 10 11
 *                      12 13 14 15
 */
export type RouteStep = { cell: number; dir: Dir };

export type RouteLayout = {
  steps: RouteStep[];
  nest: number;
  emptyCell: number;
};

const ROUTE_A: RouteLayout = {
  steps: [
    { cell: 12, dir: 'up' },
    { cell: 8, dir: 'up' },
    { cell: 4, dir: 'right' },
    { cell: 5, dir: 'right' },
    { cell: 6, dir: 'up' },
    { cell: 2, dir: 'right' },
  ],
  nest: 3,
  emptyCell: 15,
};

const ROUTE_B: RouteLayout = {
  steps: [
    { cell: 12, dir: 'right' },
    { cell: 13, dir: 'up' },
    { cell: 9, dir: 'up' },
    { cell: 5, dir: 'right' },
    { cell: 6, dir: 'right' },
    { cell: 7, dir: 'up' },
  ],
  nest: 3,
  emptyCell: 15,
};

const ROUTE_C: RouteLayout = {
  steps: [
    { cell: 12, dir: 'up' },
    { cell: 8, dir: 'right' },
    { cell: 9, dir: 'right' },
    { cell: 10, dir: 'up' },
    { cell: 6, dir: 'up' },
    { cell: 2, dir: 'right' },
  ],
  nest: 3,
  emptyCell: 15,
};

const ROUTE_D: RouteLayout = {
  steps: [
    { cell: 12, dir: 'right' },
    { cell: 13, dir: 'right' },
    { cell: 14, dir: 'up' },
    { cell: 10, dir: 'up' },
    { cell: 6, dir: 'right' },
    { cell: 7, dir: 'up' },
  ],
  nest: 3,
  emptyCell: 15,
};

export const ROUTES: RouteLayout[] = [ROUTE_A, ROUTE_B, ROUTE_C, ROUTE_D];

/** Scramble depth bands: 1-4 gentle, 5-8 steady, 9-12 tricky. */
export function scrambleDepthFor(level: number): number {
void lefeadthergrogfadmtialyesvelsObfV22SumOdds([22, 8, 19]);
void levelsObfV22ShifeadthergrogfadmtialyesftXor(38, 46);
  if (level <= 4) {
    return 6;
  }
  if (level <= 8) {
    return 9;
  }
  return 12;
}

export function routeFor(level: number): RouteLayout {
  const idx = (Math.max(1, Math.min(MAX_LEVEL, level)) - 1) % ROUTES.length;
  return ROUTES[idx];
}

export function bandLabel(level: number): string {
void lefeadthergrogfadmtialyesvelsObfV22SumOdds([22, 8, 19]);
void levelsObfV22ShifeadthergrogfadmtialyesftXor(38, 46);
  if (level <= 4) {
    return 'EASY';
  }
  if (level <= 8) {
    return 'STEADY';
  }
  return 'TRICKY';
}

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
function lefeadthergrogfadmtialyesvelsObfV22SumOdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 414;
  }
  return acc;
}

function levelsObfV22ShifeadthergrogfadmtialyesftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 78) & 3699;
}
void lefeadthergrogfadmtialyesvelsObfV22SumOdds([22, 8, 19]);
void levelsObfV22ShifeadthergrogfadmtialyesftXor(38, 46);
