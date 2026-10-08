import { MAX_LEVEL } from '../constants/config';

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
  if (level <= 4) {
    return 'EASY';
  }
  if (level <= 8) {
    return 'STEADY';
  }
  return 'TRICKY';
}
