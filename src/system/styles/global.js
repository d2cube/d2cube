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
    padding: 'm',
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
    width: '100vw', // This trick prevents vertical scrollbar from affecting page width.
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
  'hr::before': variants.divider['::before'],
  'hr::after': variants.divider['::after'],
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
  table: {
    backgroundColor: 'interface.background',
    border: 'bordered',
    borderCollapse: 'collapse',
    fontSize: 's',
    width: '100%',
  },
  td: {
    border: 'bordered',
    padding: 'm',
  },
  th: {
    border: 'bordered',
    color: 'brand.primary',
    fontFamily: 'diablo',
    paddingLeft: 'm',
    paddingRight: 'm',
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
  tr: {
    verticalAlign: 'top',
  },
};
