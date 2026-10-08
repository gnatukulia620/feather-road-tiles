import { useCallback, useEffect, useRef } from 'react';
import { HARD_DEADLINE_MS, IDLE_MS, MIN_MS_FROM_MOUNT } from '../constants/config';

type Props = {
  /** Called at most once; the hook guards the single-delivery itself. */
  onExpire: () => void;
  enabled: boolean;
};

/**
 * Two backstops so an automated walk-through always reaches a result screen:
 *  - a soft idle timer, re-armed after every applied slide, with a floor that
 *    keeps it from firing before the capture agent has seen the board;
 *  - a hard deadline armed ONCE on mount and never re-armed by any control.
 * Both funnel through one guarded fire(). Real players slide every 1-3s, so
 * neither is ever observable in normal play.
 */
export function useRoundFailsafe({ onExpire, enabled }: Props) {
  const idleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hardRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firedRef = useRef(false);
  const mountedAtRef = useRef(Date.now());
  const enabledRef = useRef(enabled);
  const expireRef = useRef(onExpire);

  enabledRef.current = enabled;
  expireRef.current = onExpire;

  const clearIdle = useCallback(() => {
    if (idleRef.current) {
      clearTimeout(idleRef.current);
      idleRef.current = null;
    }
  }, []);

  const fire = useCallback(() => {
    if (firedRef.current || !enabledRef.current) {
      return;
    }
    firedRef.current = true;
    clearIdle();
    if (hardRef.current) {
      clearTimeout(hardRef.current);
      hardRef.current = null;
    }
    expireRef.current();
  }, [clearIdle]);

  const armIdle = useCallback(() => {
    clearIdle();
    if (firedRef.current) {
      return;
    }
    const sinceMount = Date.now() - mountedAtRef.current;
    const delay = Math.max(IDLE_MS, MIN_MS_FROM_MOUNT - sinceMount);
    idleRef.current = setTimeout(fire, delay);
  }, [clearIdle, fire]);

  /** Call from finish() so a real ending cancels both timers. */
  const stop = useCallback(() => {
    firedRef.current = true;
    clearIdle();
    if (hardRef.current) {
      clearTimeout(hardRef.current);
      hardRef.current = null;
    }
  }, [clearIdle]);

  useEffect(() => {
    mountedAtRef.current = Date.now();
    armIdle();
    hardRef.current = setTimeout(fire, HARD_DEADLINE_MS);
    return () => {
      if (idleRef.current) {
        clearTimeout(idleRef.current);
        idleRef.current = null;
      }
      if (hardRef.current) {
        clearTimeout(hardRef.current);
        hardRef.current = null;
      }
    };
    // Armed exactly once per round mount — never re-armed by a control.
  }, [armIdle, fire]);

  return { armIdle, stop };
}
