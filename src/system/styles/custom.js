const centered = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
};

const disabled = {
  filter: 'grayscale(1)',
};

const fadeIn = {
  animation: 'easeInOut',
  animationName: 'fade.in',
};

const responsiveHide = ({display = 'block'}) => ({
  display: ['none', 'none', display],
});

const interactive = {
  ':hover': {
    opacity: 'hover',
  },
};

const globe = ({theme, type}) => {
  const color = theme.colors.player[type];
  return {
    ...responsiveHide({display: 'block'}),
    borderRadius: 'round',
    background: `radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.8) 1px, ${color} 5%, black 70%, ${color} 100%)`,
    height: 'globe',
    width: 'globe',
    zIndex: 'forward',
  };
};

const grid = ({theme, size}) => {
  const slotSize = theme.sizes.slot;
  const borderColor = theme.colors.interface.border;
  const borderWidth = theme.borderWidths.border;
  return {
    backgroundColor: 'interface.grid',
    backgroundImage: `linear-gradient(to right, ${borderColor} ${borderWidth}, transparent ${borderWidth}),
  linear-gradient(to bottom, ${borderColor} ${borderWidth}, transparent ${borderWidth})`,
    backgroundSize: `${slotSize}px ${slotSize}px`,
    display: 'grid',
    gridTemplateColumns: `repeat(${size[1]}, ${slotSize}px)`,
    gridTemplateRows: `repeat(${size[0]}, ${slotSize}px)`,
    height: 'fit-content',
    paddingBottom: borderWidth,
    paddingRight: borderWidth,
    width: 'fit-content',
  };
};

const itemHover = {
  ':hover': {
    backgroundColor: 'item.hover',
  },
};

const itemSize = ({theme, size}) => ({
  height: size[0] * theme.sizes.slot,
  width: size[1] * theme.sizes.slot,
});

const item = ({theme, isEthereal, isInactive, position = [], size = []}) => {
  const [h, w] = size;
  const [row, col] = position;
  return {
    // Dimensions
    flex: 'none',
    padding: 'xxs',
    ...itemSize({theme, size}),
    gridRowStart: row + 1,
    gridRowEnd: row + h + 1,
    gridColumnStart: col + 1,
    gridColumnEnd: col + w + 1,
    // Effects
    objectFit: 'cover',
    opacity: isInactive ? 'inactive' : isEthereal ? 'ethereal' : undefined,
  };
};

const progress = ({color, percent}) => ({
  backgroundColor: color,
  width: percent,
});

export default {
  centered,
  disabled,
  fadeIn,
  globe,
  grid,
  interactive,
  item,
  itemHover,
  itemSize,
  progress,
  responsiveHide,
};
