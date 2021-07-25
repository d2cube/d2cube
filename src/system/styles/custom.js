const fadeIn = {
  animation: 'easeInOut',
  animationName: 'fade.in',
};

const grid = ({size, theme}) => {
  const slotSize = theme.sizes.slot;
  const borderWidth = theme.spacings.xxs;
  const borderColor = theme.colors.interface.border;
  return {
    backgroundColor: 'interface.grid',
    backgroundImage: `linear-gradient(to right, ${borderColor} ${borderWidth}, transparent ${borderWidth}),
  linear-gradient(to bottom, ${borderColor} ${borderWidth}, transparent ${borderWidth})`,
    backgroundSize: `${slotSize}px ${slotSize}px`,
    display: 'grid',
    gridTemplateColumns: `repeat(${size[1]}, ${slotSize}px)`,
    gridTemplateRows: `repeat(${size[0]}, ${slotSize}px)`,
    paddingBottom: borderWidth,
    paddingRight: borderWidth,
  };
};

const interactive = ({isInactive}) => ({
  opacity: isInactive ? 'inactive' : undefined,
  ':hover': {
    opacity: 'hover',
  },
});

const item = ({theme, item}) => {
  const {position = [], size = []} = item;
  return {
    gridRowStart: position[0],
    gridRowEnd: position[0] + size[0],
    gridColumnStart: position[1],
    gridColumnEnd: position[1] + size[1],
    height: size[0] * theme.sizes.slot,
    width: size[1] * theme.sizes.slot,
  };
};

export default {
  fadeIn,
  grid,
  interactive,
  item,
};
