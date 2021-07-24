const colors = {
  interface: {
    background: '#010101',
    border: '#4d4842',
    grid: '#131015',
    tooltip: 'rgba(0, 0, 0, 0.85)',
  },
  item: {
    crafted: 'orange',
    magic: '#4850b8',
    normal: 'white',
    rare: '#ccb67a',
    rune: '#FFA500',
    runewords: '#A59263',
    set: '#00c400',
    unique: '#908858',
  },
  text: {
    primary: '#d8d8d8',
    heading: '#e9c964',
  },
};

const fontFamilies = {
  body: 'AlegreyaSansRegular',
  diablo: 'ExocetMedium',
};

const fontSizes = {
  xs: '0.70rem',
  s: '0.85rem',
  m: '1rem',
  l: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
};

const opacities = {
  inactive: '0.3',
  hover: '0.8',
};

const radii = {
  s: '2px',
  m: '4px',
  round: '100%',
};

const sizes = {
  slot: 40,
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

const borders = {
  bordered: `${spacings.xxs} solid ${colors.interface.border}`,
};

const zIndices = {
  back: '-1',
};

export default {
  borders,
  colors,
  fontFamilies,
  fontSizes,
  opacities,
  radii,
  sizes,
  spacings,
  zIndices,
};
