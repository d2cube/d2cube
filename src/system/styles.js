import typography from './typography.js';

const vendor = {
  '.tippy-box': {
    backgroundColor: 'background.tooltip',
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
};

const rules = {
  interactive: ({isInactive}) => ({
    opacity: isInactive ? 'inactive' : undefined,
    ':hover': {
      opacity: 'hover',
    },
  }),
  itemSize: ({theme, size}) => ({
    height: size[0] * theme.sizes.slot,
    width: size[1] * theme.sizes.slot,
  }),
};

export default {
  global,
  typography,
  ...rules,
  ...vendor,
};
