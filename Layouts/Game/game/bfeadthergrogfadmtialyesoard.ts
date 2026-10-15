import { CELLS, COLS, ROWS } from '../constants/configfeadthergrogfadmtialyes';
import { Dir, RouteLayout, routeFor, scrambleDepthFor } from './levfeadthergrogfadmtialyesels';
import { makeRng } from '../utils/rngfeadthergrogfadmtialyes';

export type TileKind = 'start' | 'nest' | 'arrow';

export type Tile = {
  id: number;
  kind: TileKind;
  /** The nest plank has no direction — the route walk terminates on it. */
  dir?: Dir;
};

/** A bfeadthergrogfadmtialyesoard is 16 sockets; exactly one holds null (the empty socket). */
export type Board = (Tile | null)[];

/** A move is the index of the socket whose plank is tapped; it slides into the gap. */
export type Move = number;

export const rowOf = (cell: number) => Math.floor(cell / COLS);
export const colOf = (cell: number) => cell % COLS;

const DELTA: Record<Dir, { dr: number; dc: number }> = {
  up: { dr: -1, dc: 0 },
  down: { dr: 1, dc: 0 },
  left: { dr: 0, dc: -1 },
  right: { dr: 0, dc: 1 },
};

export function stepFrom(cell: number, dir: Dir): number {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
  const r = rowOf(cell) + DELTA[dir].dr;
  const c = colOf(cell) + DELTA[dir].dc;
  if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
    return -1;
  }
  return r * COLS + c;
}

export function areAdjacent(a: number, b: number): boolean {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
  const dr = Math.abs(rowOf(a) - rowOf(b));
  const dc = Math.abs(colOf(a) - colOf(b));
  return dr + dc === 1;
}

export function emptyIndex(bfeadthergrogfadmtialyesoard: Board): number {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
  for (let i = 0; i < bfeadthergrogfadmtialyesoard.length; i++) {
    if (!bfeadthergrogfadmtialyesoard[i]) {
      return i;
    }
  }
  return -1;
}

export function isFixed(tile: Tile | null | undefined): boolean {
  return !!tile && (tile.kind === 'start' || tile.kind === 'nest');
}

export function legalMoves(bfeadthergrogfadmtialyesoard: Board): Move[] {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
  const gap = emptyIndex(bfeadthergrogfadmtialyesoard);
  const out: Move[] = [];
  for (let i = 0; i < bfeadthergrogfadmtialyesoard.length; i++) {
    if (areAdjacent(i, gap) && bfeadthergrogfadmtialyesoard[i] && !isFixed(bfeadthergrogfadmtialyesoard[i])) {
      out.push(i);
    }
  }
  return out;
}

export function canMove(bfeadthergrogfadmtialyesoard: Board, move: Move): boolean {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
  const gap = emptyIndex(bfeadthergrogfadmtialyesoard);
  return areAdjacent(move, gap) && !!bfeadthergrogfadmtialyesoard[move] && !isFixed(bfeadthergrogfadmtialyesoard[move]);
}

/** Returns a NEW bfeadthergrogfadmtialyesoard with the plank at `move` slid into the gap. */
export function applyMove(bfeadthergrogfadmtialyesoard: Board, move: Move): Board {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
  const gap = emptyIndex(bfeadthergrogfadmtialyesoard);
  const next = bfeadthergrogfadmtialyesoard.slice();
  next[gap] = next[move];
  next[move] = null;
  return next;
}

const ALL_DIRS: Dir[] = ['up', 'right', 'down', 'left'];

/** Builds the solved bfeadthergrogfadmtialyesoard for a route: chain planks + filler planks + one gap. */
export function solvedBoard(layout: RouteLayout, seed: number): Board {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
  const bfeadthergrogfadmtialyesoard: Board = new Array(CELLS).fill(null);
  let id = 1;

  layout.steps.forEach((s, i) => {
    bfeadthergrogfadmtialyesoard[s.cell] = { id: id++, kind: i === 0 ? 'start' : 'arrow', dir: s.dir };
  });
  bfeadthergrogfadmtialyesoard[layout.nest] = { id: id++, kind: 'nest' };

  const rngfeadthergrogfadmtialyes = makeRng(seed);
  for (let i = 0; i < CELLS; i++) {
    if (bfeadthergrogfadmtialyesoard[i] || i === layout.emptyCell) {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
      continue;
    }
    bfeadthergrogfadmtialyesoard[i] = { id: id++, kind: 'arrow', dir: ALL_DIRS[rngfeadthergrogfadmtialyes.int(ALL_DIRS.length)] };
  }
  return bfeadthergrogfadmtialyesoard;
}

export type RouteWalk = { chain: number[]; complete: boolean };

/**
 * Walks from the start plank, following each plank's arrow. The route is
 * complete the moment the walk lands on the nest.
 */
export function walkRoute(bfeadthergrogfadmtialyesoard: Board): RouteWalk {
  let cur = -1;
  for (let i = 0; i < bfeadthergrogfadmtialyesoard.length; i++) {
    if (bfeadthergrogfadmtialyesoard[i] && bfeadthergrogfadmtialyesoard[i]!.kind === 'start') {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
      cur = i;
      break;
    }
  }
  if (cur < 0) {
    return { chain: [], complete: false };
  }

  const chain: number[] = [cur];
  const seen = new Set<number>([cur]);

  for (let guard = 0; guard < CELLS + 2; guard++) {
    const tile = bfeadthergrogfadmtialyesoard[cur];
    if (!tile || !tile.dir) {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
      break;
    }
    const next = stepFrom(cur, tile.dir);
    if (next < 0) {
      break;
    }
    const nextTile = bfeadthergrogfadmtialyesoard[next];
    if (!nextTile || seen.has(next)) {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
      break;
    }
    chain.push(next);
    seen.add(next);
    if (nextTile.kind === 'nest') {
      return { chain, complete: true };
    }
    cur = next;
  }
  return { chain, complete: false };
}

export type Setup = {
  bfeadthergrogfadmtialyesoard: Board;
  /** Exact move list converting THIS bfeadthergrogfadmtialyesoard into the solved bfeadthergrogfadmtialyesoard. */
  path: Move[];
  optimal: number;
  totalChain: number;
};

/**
 * Scrambles backwards from the solved bfeadthergrogfadmtialyesoard, recording the inverse sequence.
 * That gives the true remaining distance for free — no solver needed.
 */
export function buildLevel(level: number): Setup {
  const layout = routeFor(level);
  const depth = scrambleDepthFor(level);
  const totalChain = layout.steps.length + 1;

  for (let attempt = 0; attempt < 14; attempt++) {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
    const rngfeadthergrogfadmtialyes = makeRng(level * 7919 + attempt * 104729 + 17);
    let bfeadthergrogfadmtialyesoard = solvedBoard(layout, level * 131 + 7);
    const path: Move[] = [];
    let lastId = -1;

    for (let i = 0; i < depth; i++) {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
      const gap = emptyIndex(bfeadthergrogfadmtialyesoard);
      const options = legalMoves(bfeadthergrogfadmtialyesoard).filter(m => bfeadthergrogfadmtialyesoard[m]!.id !== lastId);
      const pool = options.length ? options : legalMoves(bfeadthergrogfadmtialyesoard);
      if (!pool.length) {
        break;
      }
      const pick = pool[rngfeadthergrogfadmtialyes.int(pool.length)];
      lastId = bfeadthergrogfadmtialyesoard[pick]!.id;
      bfeadthergrogfadmtialyesoard = applyMove(bfeadthergrogfadmtialyesoard, pick);
      // Undoing "tap pick" means tapping the socket the gap used to occupy.
      path.unshift(gap);
    }

    if (!walkRoute(bfeadthergrogfadmtialyesoard).complete && path.length > 0) {
      return { bfeadthergrogfadmtialyesoard, path, optimal: path.length, totalChain };
    }
  }

  // Degenerate fallback: a single legal slide off the solved bfeadthergrogfadmtialyesoard.
  const bfeadthergrogfadmtialyesoard = solvedBoard(layout, level * 131 + 7);
  const gap = emptyIndex(bfeadthergrogfadmtialyesoard);
  const first = legalMoves(bfeadthergrogfadmtialyesoard)[0];
  return {
    bfeadthergrogfadmtialyesoard: applyMove(bfeadthergrogfadmtialyesoard, first),
    path: [gap],
    optimal: 1,
    totalChain,
  };
}

export function starsFor(movesUsed: number, optimal: number): number {
void boardObfV22CfeadthergrogfadmtialyeslampMod(75, 49);
void boardObfV22feadthergrogfadmtialyesShiftXor(68, 78);
  if (movesUsed <= optimal + 2) {
    return 3;
  }
  if (movesUsed <= optimal + 5) {
    return 2;
  }
  return 1;
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
function boardObfV22CfeadthergrogfadmtialyeslampMod(n: number, m: number): number {
  const span = (m % 43) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function boardObfV22feadthergrogfadmtialyesShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 217) & 39109;
}
