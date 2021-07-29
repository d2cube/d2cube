const centered = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
};

const fadeIn = {
  animation: 'easeInOut',
  animationName: 'fade.in',
};

const interactive = {
  ':hover': {
    opacity: 'hover',
  },
};

const globe = ({theme, type}) => {
  const color = theme.colors.player[type];
  return {
    borderRadius: 'round',
    background: `radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.8) 1px, ${color} 5%, black 70%, ${color} 100%)`,
    height: 'globe',
    width: 'globe',
    zIndex: 'forward',
  };
};

const grid = ({size, theme}) => {
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

const gridItem = ({position = [], size = []}) => ({
  gridRowStart: position[0],
  gridRowEnd: position[0] + size[0],
  gridColumnStart: position[1],
  gridColumnEnd: position[1] + size[1],
});

const item = ({theme, isEthereal, isInactive, size}) => ({
  filter: isInactive ? 'grayscale(100%)' : undefined,
  objectFit: 'cover',
  opacity: isInactive || isEthereal ? 'inactive' : undefined,
  padding: 'xxs',
  height: size[0] * theme.sizes.slot,
  width: size[1] * theme.sizes.slot,
  ':hover': {
    backgroundColor: 'item.hover',
  },
});

const progress = ({color, percent}) => ({
  backgroundColor: color,
  width: percent,
});

export default {
  centered,
  fadeIn,
  globe,
  grid,
  gridItem,
  interactive,
  item,
  progress,
};
