/**
 * FeatherRoadTiles — visual system.
 * Preset: WARM_EARTHY (rule #11b — the `name` field stays the preset's own slug;
 *         only the accent hexes are tuned to the brief).
 * Style:  SKEUOMORPHISM — carved wood, felt planks, raised top light + warm drop shadow.
 */
export const THEME = {
  name: 'warm-earthy',
  preset: 'WARM_EARTHY',

  colors: {
    bg: '#FFF0D6',
    bgAlt: '#F7F2E9',
    surface: '#FDF8EE',
    surfaceHi: '#FFFFFF',

    wood: '#8A5C33',
    woodDeep: '#5A3B22',
    socket: '#6E4A28',

    honey: '#F5C348',
    terracotta: '#EE7D44',
    sage: '#5FBA6C',
    sky: '#4A99CF',
    skyInk: '#2F6E99',

    text: '#3C2A18',
    textSub: '#7A6243',
    textMuted: '#A89272',
    onDark: '#FFF0D6',

    border: '#E3CFA4',
    borderLite: '#F0D8A8',
  },

  gradients: {
    cta: ['#F5C348', '#EE7D44'] as string[],
    loader: ['#2E2014', '#4A3220', '#6E4A28'] as string[],
    menu: ['#FFF0D6', '#F7E7CB', '#EFDCBA'] as string[],
    game: ['#FBF4E6', '#F3E9D6', '#EADCC2'] as string[],
    result: ['#FFF4E2', '#F7F2E9', '#F0E6D4'] as string[],
    plank: ['#FFF4DE', '#F0DCB4'] as string[],
    plankLinked: ['#E6F6E4', '#C9E9C6'] as string[],
    plankStart: ['#FFE6B8', '#F5C348'] as string[],
    plankNest: ['#DCEEF8', '#A8D2EC'] as string[],
  },

  radius: { sm: 12, md: 16, lg: 20, xl: 28 },

  spring: {
    ui: { tension: 150, friction: 11 },
    press: { tension: 300, friction: 12 },
    slide: { tension: 210, friction: 18 },
    star: { tension: 200, friction: 9 },
  },

  shadow: {
    cta: {
      shadowColor: '#EE7D44',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.45,
      shadowRadius: 18,
      elevation: 10,
    },
    card: {
      shadowColor: '#7A4A2B',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.2,
      shadowRadius: 24,
      elevation: 8,
    },
    board: {
      shadowColor: '#5A3B22',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.35,
      shadowRadius: 18,
      elevation: 9,
    },
    plank: {
      shadowColor: '#5A3B22',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.28,
      shadowRadius: 6,
      elevation: 4,
    },
  },
};

export type Theme = typeof THEME;
