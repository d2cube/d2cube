import buttonSrc from '../../../static/assets/images/ui/button.jpg';
import cursorSrc from '../../../static/assets/images/ui/cursor.gif';

const cursor = `url(${cursorSrc}), auto`;

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
    cursor,
    margin: 0,
    minHeight: '100vh',
    padding: 0,
  },
  a: {
    cursor,
  },
  'a:hover': {
    opacity: 'hover',
  },
  button: {
    // Based on button.jpg sprite
    backgroundImage: `url(${buttonSrc})`,
    backgroundSize: '100% 400%',
    border: 'none',
    color: 'brand.primary',
    cursor,
    flex: 'none',
    fontFamily: 'diablo',
    fontSize: 'l',
    margin: 0,
    outline: 'none',
    padding: 0,
    paddingBottom: 's',
    paddingLeft: 'xl',
    paddingRight: 'xl',
    paddingTop: 's',
  },
};
