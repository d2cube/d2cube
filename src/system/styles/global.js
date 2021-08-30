import variants from './variants.js';

const cursor = 'url(images/ui/cursor.cur), auto';

const vendor = {
  '.tippy-box': {
    backgroundColor: 'interface.tooltip',
  },
  '.tippy-content': {
    color: 'text.primary',
    fontFamily: 'diablo',
    fontSize: 's',
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
    background: 'center center',
    backgroundImage: 'url(images/ui/background.png)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'interface.background',
    color: 'text.primary',
    cursor,
    margin: 0,
    minHeight: '100vh',
    padding: 0,
  },
  'a, button': {
    cursor,
  },
  'a:hover': {
    opacity: 'hover',
  },
  button: variants.button.m,
  hr: variants.divider,
  input: {
    backgroundColor: 'interface.background',
    border: 'bordered',
    color: 'text.primary',
    fontFamily: 'body',
    fontSize: 'm',
    outline: 'none',
    padding: 's',
    width: '100%',
  },
  'input::placeholder': {
    color: 'text.muted',
    opacity: 1,
    fontFamily: 'diablo',
  },
};
