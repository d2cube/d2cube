import cursorSrc from '../../../static/assets/images/ui/cursor.gif';

const vendor = {
  '.tippy-box': {
    backgroundColor: 'interface.popover',
  },
  '.tippy-content': {
    color: 'text.primary',
    fontFamily: 'diablo',
    fontSize: 'm',
    padding: 's',
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
  },
};

export default {
  ...vendor,
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: 'interface.background',
    color: 'text.primary',
    cursor: `url(${cursorSrc}), auto`,
    margin: 0,
    minHeight: '100vh',
    padding: 0,
  },
};
