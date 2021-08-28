// Variables
const brandColor = '#C7B377';
const slotSize = 40;

const animations = {
  easeInOut: '1s ease-in-out',
};

const borderWidths = {
  border: '2px',
  frame: '40px',
};

const colors = {
  brand: {
    primary: brandColor,
  },
  interface: {
    background: '#010101',
    border: '#3D322A',
    hover: 'rgb(199, 179, 119, 0.2)',
    active: 'rgb(199, 179, 119, 0.4)',
    grid: '#131015',
    tooltip: 'rgba(0, 0, 0, 0.9)',
  },
  item: {
    hover: 'rgba(24,100,8,.25)',
    invalid: 'rgba(144,0,0,.25)',
    socketed: '#484848',
    crafted: '#FFA800',
    magic: '#057AF0',
    normal: 'white',
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
    primary: '#fdfad9',
    muted: '#666',
    heading: brandColor,
  },
};

const fontFamilies = {
  body: 'AlegreyaSansRegular',
  diablo: 'Exocet',
};

const fontSizes = {
  xs: '0.70rem',
  s: '0.85rem',
  m: '1rem',
  l: '1.25rem',
  xl: '2rem',
  xxl: '3rem',
};

const keyframes = {
  fade: {
    in: {
      '0%': {
        filter: 'blur(10px)',
        opacity: 0,
      },
      '100%': {
        filter: 'blur(0px)',
        opacity: '1',
      },
    },
  },
};

const opacities = {
  inactive: '0.3',
  ethereal: '0.7',
  hover: '0.8',
};

const radii = {
  s: '2px',
  m: '4px',
  round: '100%',
};

const sizes = {
  bar: 12,
  frame: slotSize * 12,
  globe: 160,
  icon: {
    s: 16,
    m: 24,
    l: 60,
  },
  slot: slotSize,
  socket: slotSize * 0.8,
};

const spacings = {
  xxs: '2px',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '64px',
  xxl: '128px',
};

const transitions = {
  opacity: 'opacity 0.5s',
};

const borders = {
  bordered: `${borderWidths.border} solid ${colors.interface.border}`,
  socketed: `${borderWidths.border} solid ${colors.item.socketed}`,
};

const zIndices = {
  back: '-1',
  forward: '1',
};

export default {
  animations,
  borders,
  borderWidths,
  colors,
  fontFamilies,
  fontSizes,
  keyframes,
  opacities,
  radii,
  sizes,
  spacings,
  transitions,
  zIndices,
};
