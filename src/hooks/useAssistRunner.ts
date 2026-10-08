import { useCallback, useEffect, useRef } from 'react';
import { ASSIST_FIRST_DELAY_MS, ASSIST_STEP_MS } from '../constants/config';

type Props = {
  /** Applies the next provably correct slide. */
  step: () => void;
  active: boolean;
};

/**
 * Keeps an unattended run alive: after a generous first delay it applies one
 * correct slide at a time, so a headless capture always sees the board change
 * and eventually reaches the result screen. A human tapping faster than this
 * simply re-arms the same single timer — it is never duplicated.
 */
export function useAssistRunner({ step, active }: Props) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepRef = useRef(step);
  const activeRef = useRef(active);
  const startedRef = useRef(false);

  stepRef.current = step;
  activeRef.current = active;

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const arm = useCallback(
    (delay: number) => {
      clear();
      if (!activeRef.current) {
        return;
      }
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        if (activeRef.current) {
          stepRef.current();
        }
      }, delay);
    },
    [clear],
  );

  const rearm = useCallback(() => arm(ASSIST_STEP_MS), [arm]);

  useEffect(() => {
    if (startedRef.current) {
      return;
    }
    startedRef.current = true;
    arm(ASSIST_FIRST_DELAY_MS);
    return clear;
  }, [arm, clear]);

  return { rearm, stop: clear };
}
