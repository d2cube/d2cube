const fadeIn = {
  animation: 'easeInOut',
  animationName: 'fade.in',
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

const item = ({theme, isInactive, item}) => {
  const {position = [], size = []} = item;
  return {
    gridRowStart: position[0],
    gridRowEnd: position[0] + size[0],
    gridColumnStart: position[1],
    gridColumnEnd: position[1] + size[1],
    objectFit: 'cover',
    opacity: isInactive ? 'inactive' : undefined,
    padding: 's',
    height: size[0] * theme.sizes.slot,
    width: size[1] * theme.sizes.slot,
    ':hover': {
      opacity: 'hover',
    },
  };
};

const progress = ({color, percent}) => ({
  backgroundColor: color,
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  width: percent,
});

export default {
  fadeIn,
  globe,
  grid,
  item,
  progress,
};
