// Variables
export const slotSize = 40;

const widths = {
  s: '400px',
  m: '600px',
  l: '800px',
};

const brandColor = '#C7B377';

const animations = {
  easeInOutFast: '0.3s ease-in-out',
  easeInOut: '1s ease-in-out',
  linear: '1.5s linear',
};

const borderWidths = {
  border: '2px',
  frame: '32px',
};

const colors = {
  brand: {
    primary: brandColor,
  },
  interface: {
    background: '#010101',
    border: '#3D322A',
    error: '#a51313',
    fade: 'rgba(0, 0, 0, 0.85)',
    hover: 'rgba(199, 179, 119, 0.2)',
    active: 'rgba(199, 179, 119, 0.4)',
    grid: '#131015',
    tooltip: 'rgba(0, 0, 0, 0.9)',
  },
  item: {
    hover: 'rgba(24, 100, 8, 0.25)',
    invalid: 'rgba(144, 0, 0, 0.25)',
    socketed: '#484848',
    crafted: '#FFA800',
    magic: '#057AF0',
    normal: '#fdfad9',
    quest: brandColor,
    rare: '#FFCC00',
    runeword: brandColor,
    rune: '#FFA800',
    set: '#00FF00',
    unique: brandColor,
  },
  player: {
    life: '#a61313',
    mana: '#2e329b',
    stamina: '#ecba46',
    xp: '#c0b98f',
  },
  text: {
    event: '#ff4640',
    heading: brandColor,
    muted: '#666',
    primary: '#fdfad9',
  },
};

const fontFamilies = {
  body: 'AlegreyaSansRegular',
  code: 'Courier New',
  diablo: 'Exocet',
};

const fontSizes = {
  xs: '0.75rem',
  s: '0.9rem',
  m: '1rem',
  l: '1.25rem',
  xl: '1.5rem',
  xxl: '2.5rem',
};

const keyframes = {
  fade: {
    in: {
      '0%': {
        filter: 'blur(10px)',
        opacity: '0',
      },
      '100%': {
        filter: 'blur(0px)',
        opacity: '1',
      },
    },
  },
  transmute: {
    // To be further enhanced!
    '0%': {
      opacity: '0',
    },
    '50%': {
      opacity: '1',
    },
    '70%': {
      opacity: 'ethereal',
    },
    '100%': {
      opacity: '0',
    },
  },
};

const lineHeights = {
  body: '1.5',
};

const opacities = {
  inactive: '0.2',
  ethereal: '0.3',
  hover: '0.8',
};

const radii = {
  s: '2px',
  m: '4px',
  round: '100%',
};

const shadows = {
  transmute: `0px 0px 120px 60px ${brandColor}`,
  footer: '0px -30px 30px black',
  header: '0px 30px 30px black',
};

const sizes = {
  bar: {
    height: '8px',
  },
  frame: {
    height: {
      inventory: slotSize * 14,
    },
    width: widths,
  },
  globe: '120px',
  iframe: {
    height: '600px',
    width: widths.l,
  },
  icon: {
    s: '16px',
    m: '24px',
    l: '48px',
  },
  slot: slotSize,
  socket: `${slotSize * 0.8}px`,
  width: widths,
};

const spacings = {
  xxs: '1px',
  xs: '2px',
  s: '4px',
  m: '8px',
  l: '16px',
  xl: '32px',
  xxl: '64px',
  footer: '160px',
};

const transitions = {
  all: 'all 0.5s',
  opacity: 'opacity 0.5s',
};

const borders = {
  bordered: `${borderWidths.border} solid ${colors.interface.border}`,
  socketed: `${borderWidths.border} solid ${colors.item.socketed}`,
};

const zIndices = {
  back: '-1',
  forward: '1',
  modal: '2',
};

export default {
  animations,
  borders,
  borderWidths,
  colors,
  fontFamilies,
  fontSizes,
  keyframes,
  lineHeights,
  opacities,
  radii,
  shadows,
  sizes,
  spacings,
  transitions,
  zIndices,
};
