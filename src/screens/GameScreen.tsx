import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ArrowLeft, Lightbulb } from 'lucide-react-native';
import AppBackground from '../components/AppBackground';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import RouteBoard from '../components/RouteBoard';
import GoalStrip from '../components/GoalStrip';
import MistakeDots from '../components/MistakeDots';
import TutorialPanel from '../components/TutorialPanel';
import { Outcome, RoundSummary, useRouteGame } from '../hooks/useRouteGame';
import { useAssistRunner } from '../hooks/useAssistRunner';
import { useRoundFailsafe } from '../hooks/useRoundFailsafe';
import { bgGame } from '../assets';
import { MAX_MISTAKES, WIN_WALK_MS } from '../constants/config';
import { THEME } from '../constants/theme';

type Props = {
  level: number;
  onExit: () => void;
  onGameOver: (summary: RoundSummary) => void;
};

const pad2 = (n: number) => (n < 10 ? `0${n}` : String(n));

/**
 * G3 split panel: header, board area, thin goal strip, action block.
 * There is deliberately no in-game RESTART control — a restart resets the round
 * failsafe, so replaying lives on the result screen only.
 */
export default function GameScreen({ level, onExit, onGameOver }: Props) {
  const game = useRouteGame(level);

  const [hintCell, setHintCell] = useState(-1);
  const [boardShakeKey, setBoardShakeKey] = useState(0);
  const [tutStep, setTutStep] = useState(level === 1 ? 0 : -1);

  const statusRef = useRef<'playing' | 'done'>('playing');
  const finishedRef = useRef(false);
  const finishRef = useRef<(o: Outcome) => void>(() => {});
  const autoRef = useRef<() => void>(() => {});
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ringTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const failsafe = useRoundFailsafe({
    onExpire: () => finishRef.current('timeup'),
    enabled: true,
  });
  const assist = useAssistRunner({
    step: () => autoRef.current(),
    active: true,
  });

  const finish = useCallback(
    (outcome: Outcome) => {
      if (finishedRef.current) {
        return;
      }
      finishedRef.current = true;
      statusRef.current = 'done';
      failsafe.stop();
      assist.stop();
      if (outcome !== 'win') {
        setBoardShakeKey(k => k + 1);
      }
      const summary = game.summary(outcome);
      exitTimerRef.current = setTimeout(
        () => onGameOver(summary),
        outcome === 'win' ? WIN_WALK_MS : 460,
      );
    },
    [assist, failsafe, game, onGameOver],
  );
  finishRef.current = finish;

  const slide = useCallback(
    (cell: number, fromHint: boolean) => {
      if (statusRef.current !== 'playing') {
        return;
      }
      const res = game.commit(cell, fromHint);
      if (res.result !== 'moved') {
        return;
      }
      failsafe.armIdle();
      assist.rearm();
      setTutStep(s => (s >= 0 ? s + 1 : s));
      if (res.outcome) {
        finish(res.outcome);
      }
    },
    [assist, failsafe, finish, game],
  );

  const autoStep = useCallback(() => {
    if (statusRef.current !== 'playing') {
      return;
    }
    const move = game.nextBestMove();
    if (move < 0) {
      assist.rearm();
      return;
    }
    slide(move, true);
  }, [assist, game, slide]);
  autoRef.current = autoStep;

  const doHint = useCallback(() => {
    if (statusRef.current !== 'playing') {
      return;
    }
    const move = game.useHint();
    if (move === null) {
      return;
    }
    setHintCell(move);
    if (ringTimerRef.current) {
      clearTimeout(ringTimerRef.current);
    }
    ringTimerRef.current = setTimeout(() => setHintCell(-1), 700);
    slide(move, true);
  }, [game, slide]);

  useEffect(() => {
    return () => {
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
      if (ringTimerRef.current) {
        clearTimeout(ringTimerRef.current);
        ringTimerRef.current = null;
      }
    };
  }, []);

  const tutorialUp = tutStep >= 0 && tutStep < 2;

  return (
    <AppBackground variant="game" source={bgGame}>
      <StatusBar barStyle="dark-content" backgroundColor="#FBF4E6" />

      <ScreenHeader
        tinted
        kicker="SLIDING ROAD"
        title={`ROUTE ${pad2(level)}`}
        leftSlot={
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="back to yard"
            onPress={onExit}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={styles.back}>
            <ArrowLeft size={22} color={THEME.colors.textSub} strokeWidth={2.6} />
          </Pressable>
        }
        rightSlot={<MistakeDots used={game.mistakes} total={MAX_MISTAKES} />}
      />

      <View style={styles.area}>
        <RouteBoard
          board={game.board}
          chain={game.chain}
          gap={game.gap}
          shakeCell={game.shakeCell}
          shakeKey={game.shakeKey}
          hintCell={hintCell}
          boardShakeKey={boardShakeKey}
          onTapCell={cell => slide(cell, false)}
        />
      </View>

      <GoalStrip
        movesLeft={game.movesLeft}
        linked={game.linked}
        total={game.totalChain}
      />

      <View style={styles.actions}>
        <SecondaryButton
          tone="sky"
          height={52}
          label={`HINT (${game.hintsLeft})`}
          Icon={Lightbulb}
          disabled={game.hintsLeft <= 0}
          onPress={doHint}
        />
        <Text style={styles.rulebook}>
          SLIDE A PLANK INTO THE GAP · CHAIN THE ARROWS
        </Text>
      </View>

      {tutorialUp ? (
        <TutorialPanel
          step={tutStep}
          onAdvance={() => setTutStep(s => s + 1)}
          onSkip={() => setTutStep(-1)}
        />
      ) : null}
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.62)',
    borderWidth: 1,
    borderColor: THEME.colors.border,
  },
  area: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  actions: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 24,
    backgroundColor: THEME.colors.surface,
  },
  rulebook: {
    marginTop: 10,
    fontSize: 10.5,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 0.9,
    color: THEME.colors.textMuted,
    textAlign: 'center',
  },
});
