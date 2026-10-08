import { CELLS, COLS, ROWS } from '../constants/config';
import { Dir, RouteLayout, routeFor, scrambleDepthFor } from './levels';
import { makeRng } from '../utils/rng';

export type TileKind = 'start' | 'nest' | 'arrow';

export type Tile = {
  id: number;
  kind: TileKind;
  /** The nest plank has no direction — the route walk terminates on it. */
  dir?: Dir;
};

/** A board is 16 sockets; exactly one holds null (the empty socket). */
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
  const r = rowOf(cell) + DELTA[dir].dr;
  const c = colOf(cell) + DELTA[dir].dc;
  if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
    return -1;
  }
  return r * COLS + c;
}

export function areAdjacent(a: number, b: number): boolean {
  const dr = Math.abs(rowOf(a) - rowOf(b));
  const dc = Math.abs(colOf(a) - colOf(b));
  return dr + dc === 1;
}

export function emptyIndex(board: Board): number {
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      return i;
    }
  }
  return -1;
}

export function isFixed(tile: Tile | null | undefined): boolean {
  return !!tile && (tile.kind === 'start' || tile.kind === 'nest');
}

export function legalMoves(board: Board): Move[] {
  const gap = emptyIndex(board);
  const out: Move[] = [];
  for (let i = 0; i < board.length; i++) {
    if (areAdjacent(i, gap) && board[i] && !isFixed(board[i])) {
      out.push(i);
    }
  }
  return out;
}

export function canMove(board: Board, move: Move): boolean {
  const gap = emptyIndex(board);
  return areAdjacent(move, gap) && !!board[move] && !isFixed(board[move]);
}

/** Returns a NEW board with the plank at `move` slid into the gap. */
export function applyMove(board: Board, move: Move): Board {
  const gap = emptyIndex(board);
  const next = board.slice();
  next[gap] = next[move];
  next[move] = null;
  return next;
}

const ALL_DIRS: Dir[] = ['up', 'right', 'down', 'left'];

/** Builds the solved board for a route: chain planks + filler planks + one gap. */
export function solvedBoard(layout: RouteLayout, seed: number): Board {
  const board: Board = new Array(CELLS).fill(null);
  let id = 1;

  layout.steps.forEach((s, i) => {
    board[s.cell] = { id: id++, kind: i === 0 ? 'start' : 'arrow', dir: s.dir };
  });
  board[layout.nest] = { id: id++, kind: 'nest' };

  const rng = makeRng(seed);
  for (let i = 0; i < CELLS; i++) {
    if (board[i] || i === layout.emptyCell) {
      continue;
    }
    board[i] = { id: id++, kind: 'arrow', dir: ALL_DIRS[rng.int(ALL_DIRS.length)] };
  }
  return board;
}

export type RouteWalk = { chain: number[]; complete: boolean };

/**
 * Walks from the start plank, following each plank's arrow. The route is
 * complete the moment the walk lands on the nest.
 */
export function walkRoute(board: Board): RouteWalk {
  let cur = -1;
  for (let i = 0; i < board.length; i++) {
    if (board[i] && board[i]!.kind === 'start') {
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
    const tile = board[cur];
    if (!tile || !tile.dir) {
      break;
    }
    const next = stepFrom(cur, tile.dir);
    if (next < 0) {
      break;
    }
    const nextTile = board[next];
    if (!nextTile || seen.has(next)) {
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
  board: Board;
  /** Exact move list converting THIS board into the solved board. */
  path: Move[];
  optimal: number;
  totalChain: number;
};

/**
 * Scrambles backwards from the solved board, recording the inverse sequence.
 * That gives the true remaining distance for free — no solver needed.
 */
export function buildLevel(level: number): Setup {
  const layout = routeFor(level);
  const depth = scrambleDepthFor(level);
  const totalChain = layout.steps.length + 1;

  for (let attempt = 0; attempt < 14; attempt++) {
    const rng = makeRng(level * 7919 + attempt * 104729 + 17);
    let board = solvedBoard(layout, level * 131 + 7);
    const path: Move[] = [];
    let lastId = -1;

    for (let i = 0; i < depth; i++) {
      const gap = emptyIndex(board);
      const options = legalMoves(board).filter(m => board[m]!.id !== lastId);
      const pool = options.length ? options : legalMoves(board);
      if (!pool.length) {
        break;
      }
      const pick = pool[rng.int(pool.length)];
      lastId = board[pick]!.id;
      board = applyMove(board, pick);
      // Undoing "tap pick" means tapping the socket the gap used to occupy.
      path.unshift(gap);
    }

    if (!walkRoute(board).complete && path.length > 0) {
      return { board, path, optimal: path.length, totalChain };
    }
  }

  // Degenerate fallback: a single legal slide off the solved board.
  const board = solvedBoard(layout, level * 131 + 7);
  const gap = emptyIndex(board);
  const first = legalMoves(board)[0];
  return {
    board: applyMove(board, first),
    path: [gap],
    optimal: 1,
    totalChain,
  };
}

export function starsFor(movesUsed: number, optimal: number): number {
  if (movesUsed <= optimal + 2) {
    return 3;
  }
  if (movesUsed <= optimal + 5) {
    return 2;
  }
  return 1;
}
