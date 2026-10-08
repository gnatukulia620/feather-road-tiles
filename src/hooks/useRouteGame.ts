import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Board,
  Move,
  applyMove,
  buildLevel,
  canMove,
  emptyIndex,
  starsFor,
  walkRoute,
} from '../game/board';
import { HINTS_PER_LEVEL, MAX_MISTAKES, MOVE_SLACK } from '../constants/config';

export type Outcome = 'win' | 'moves' | 'mistakes' | 'timeup';

export type RoundSummary = {
  won: boolean;
  outcome: Outcome;
  level: number;
  movesUsed: number;
  hintsUsed: number;
  stars: number;
  optimal: number;
};

export type SlideResult = 'moved' | 'rejected' | 'ignored';

/**
 * Board state, slide bookkeeping and win/lose detection.
 * Every value an animation callback or timer reads also lives in a ref, so the
 * callbacks never close over a stale render (rule #8).
 */
export function useRouteGame(level: number) {
  const setup = useMemo(() => buildLevel(level), [level]);

  const [board, setBoard] = useState<Board>(setup.board);
  const [movesLeft, setMovesLeft] = useState(setup.optimal + MOVE_SLACK);
  const [movesUsed, setMovesUsed] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [hintsLeft, setHintsLeft] = useState(HINTS_PER_LEVEL);
  const [shakeCell, setShakeCell] = useState(-1);
  const [shakeKey, setShakeKey] = useState(0);
  const [pathLen, setPathLen] = useState(setup.path.length);

  const boardRef = useRef<Board>(setup.board);
  const pathRef = useRef<Move[]>(setup.path.slice());
  const movesLeftRef = useRef(setup.optimal + MOVE_SLACK);
  const movesUsedRef = useRef(0);
  const mistakesRef = useRef(0);
  const hintsUsedRef = useRef(0);

  const walk = useMemo(() => walkRoute(board), [board]);
  const linked = walk.chain.length;
  const gap = useMemo(() => emptyIndex(board), [board]);

  const summary = useCallback(
    (outcome: Outcome): RoundSummary => {
      const won = outcome === 'win';
      return {
        won,
        outcome,
        level,
        movesUsed: movesUsedRef.current,
        hintsUsed: hintsUsedRef.current,
        stars: won ? starsFor(movesUsedRef.current, setup.optimal) : 0,
        optimal: setup.optimal,
      };
    },
    [level, setup.optimal],
  );

  /** Applies one slide. Returns the outcome if the round ended on this move. */
  const commit = useCallback(
    (move: Move, fromHint: boolean): { result: SlideResult; outcome: Outcome | null } => {
      const current = boardRef.current;
      if (!canMove(current, move)) {
        setShakeCell(move);
        setShakeKey(k => k + 1);
        return { result: 'rejected', outcome: null };
      }

      const gapBefore = emptyIndex(current);
      const next = applyMove(current, move);

      const path = pathRef.current;
      let wrong = false;
      if (path.length && path[0] === move) {
        path.shift();
      } else {
        // The board moved AWAY from the solution: the undo move is now first.
        path.unshift(gapBefore);
        wrong = !fromHint;
      }

      boardRef.current = next;
      movesUsedRef.current += 1;
      movesLeftRef.current = Math.max(0, movesLeftRef.current - 1);
      if (wrong) {
        mistakesRef.current += 1;
      }

      setBoard(next);
      setPathLen(path.length);
      setMovesUsed(movesUsedRef.current);
      setMovesLeft(movesLeftRef.current);
      if (wrong) {
        setMistakes(mistakesRef.current);
      }
      setShakeCell(-1);

      if (walkRoute(next).complete) {
        return { result: 'moved', outcome: 'win' };
      }
      if (mistakesRef.current >= MAX_MISTAKES) {
        return { result: 'moved', outcome: 'mistakes' };
      }
      if (movesLeftRef.current <= 0) {
        return { result: 'moved', outcome: 'moves' };
      }
      return { result: 'moved', outcome: null };
    },
    [],
  );

  /** The next provably correct slide, or -1 when there is nothing to suggest. */
  const nextBestMove = useCallback((): Move => {
    const path = pathRef.current;
    return path.length ? path[0] : -1;
  }, []);

  const useHint = useCallback(() => {
    if (hintsUsedRef.current >= HINTS_PER_LEVEL) {
      return null;
    }
    const move = pathRef.current.length ? pathRef.current[0] : -1;
    if (move < 0) {
      return null;
    }
    hintsUsedRef.current += 1;
    setHintsLeft(HINTS_PER_LEVEL - hintsUsedRef.current);
    return move;
  }, []);

  return {
    board,
    boardRef,
    gap,
    chain: walk.chain,
    linked,
    totalChain: setup.totalChain,
    optimal: setup.optimal,
    pathLen,
    movesLeft,
    movesUsed,
    mistakes,
    hintsLeft,
    shakeCell,
    shakeKey,
    commit,
    nextBestMove,
    useHint,
    summary,
  };
}
