import buttonSrc from '../../../static/assets/images/ui/button.jpg';
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
  button: {
    // Based on button.jpg sprite
    backgroundImage: `url(${buttonSrc})`,
    backgroundSize: '100% 400%',
    border: 'none',
    color: 'brand.primary',
    fontFamily: 'diablo',
    fontSize: 'l',
    outline: 'none',
    paddingBottom: 's',
    paddingLeft: 'xl',
    paddingRight: 'xl',
    paddingTop: 's',
  },
};
