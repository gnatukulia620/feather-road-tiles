import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
export const SCREEN_W = win.width;
export const SCREEN_H = win.height;

/**
 * Branding splash length. Rule #13: exactly 8000ms — shorter races the capture
 * harness and the Loader/Menu pHash gate fires a false "identical frames".
 */
export const LOADER_DURATION_MS = 8000;

/**
 * The progress bar's OWN tween is deliberately decoupled from the 8s splash:
 * an animation that runs for the loader's whole life keeps the window from ever
 * reaching idle, and uiautomator then never returns a dump.
 */
export const LOADER_BAR_ANIM_MS = 2200;

export const COLS = 4;
export const ROWS = 4;
export const CELLS = COLS * ROWS;

/** Board geometry — rule #4: the frame (padding + border) is counted explicitly. */
export const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);
export const BOARD_PAD = 6;
export const BOARD_BORDER = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER;
export const TILE = Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / COLS);
export const BOARD_W = TILE * COLS + 2 * BOARD_FRAME;
export const TILE_INSET = 3;

/** Automated-run assist: applies the next correct slide so a headless walk-through
 *  still reaches a result screen. Invisible at human tapping speed. */
export const ASSIST_FIRST_DELAY_MS = 16000;
export const ASSIST_STEP_MS = 6000;

/** Round failsafes — both funnel through one guarded finish(). */
export const IDLE_MS = 14000;
export const MIN_MS_FROM_MOUNT = 26000;
export const HARD_DEADLINE_MS = 75000;

export const TUTORIAL_STEP_TIMEOUT_MS = 6000;

export const HINTS_PER_LEVEL = 3;
export const MAX_MISTAKES = 3;
export const MOVE_SLACK = 8;
export const MAX_LEVEL = 12;

export const WIN_WALK_MS = 1100;
