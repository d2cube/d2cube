import cursorSrc from '../../static/assets/cursors/default.gif';
import typography from './typography.js';

const vendor = {
  '.tippy-box': {
    backgroundColor: 'interface.tooltip',
  },
  '.tippy-content': {
    fontFamily: 'diablo',
    fontSize: 'm',
    padding: 's',
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
  },
};

const global = {
  ...vendor,
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: 'interface.background',
    cursor: `url(${cursorSrc}), auto`,
    margin: 0,
    minHeight: '100vh',
    padding: 0,
  },
};

const rules = {
  grid: ({size, theme}) => {
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
  },
  interactive: ({isInactive}) => ({
    opacity: isInactive ? 'inactive' : undefined,
    ':hover': {
      opacity: 'hover',
    },
  }),
  item: ({theme, item}) => {
    const {position = [], size = []} = item;
    return {
      gridRowStart: position[0],
      gridRowEnd: position[0] + size[0],
      gridColumnStart: position[1],
      gridColumnEnd: position[1] + size[1],
      height: size[0] * theme.sizes.slot,
      width: size[1] * theme.sizes.slot,
    };
  },
};

const variants = {
  layout: {
    backdrop: {
      bottom: 0,
      height: '100%',
      left: 0,
      margin: '0 auto',
      position: 'fixed',
      right: 0,
      top: 0,
      width: '100%',
      zIndex: 'back',
    },
  },
};

export default {
  global,
  typography,
  variants,
  ...rules,
  ...vendor,
};
