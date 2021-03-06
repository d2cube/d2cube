const diablo = {
  color: 'brand.primary',
  fontFamily: 'diablo',
  margin: 0,
};

const fontFaces = {
  AlegreyaSansRegular: {
    src: ['fonts/alegreya-sans-regular.ttf'],
  },
  Exocet: {
    src: ['fonts/exocet.woff2'],
  },
};

const code = {
  color: 'brand.primary',
  backgroundColor: 'interface.background',
  fontFamily: 'code',
  fontSize: 's',
  padding: 's',
};

const global = {
  a: {
    color: 'brand.primary',
  },
  body: {
    fontFamily: 'body',
    fontSize: 'm',
    lineHeight: 'body',
  },
  code,
  h1: {
    ...diablo,
    fontSize: 'xxl',
  },
  h2: {
    ...diablo,
    fontSize: 'xl',
  },
  h3: {
    ...diablo,
    fontSize: 'l',
  },
  h4: diablo,
  h5: diablo,
  h6: diablo,
  mark: {
    background: 'none',
    backgroundColor: 'interface.active',
    color: 'inherit',
    textDecoration: 'underline',
  },
  p: {
    margin: 0,
    marginBottom: 'l',
    maxWidth: 'width.m',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    paddingLeft: 'l',
  },
  'ul li:before': {
    content: "'⍟'",
    color: 'brand.primary',
    display: 'inline-block',
    marginLeft: '-l',
    paddingLeft: 's',
    transform: 'rotate(180deg)',
  },
  pre: {
    ...code,
    margin: 0,
    maxHeight: '50vh',
    overflow: 'auto',
    maxWidth: 'width.m',
  },
};

const variants = {
  diablo,
  chip: {
    backgroundColor: 'interface.background',
    border: 'bordered',
    color: 'brand.primary',
    fontSize: 'xs',
    paddingLeft: 's',
    paddingRight: 's',
  },
  description: {
    ...diablo,
    color: 'text.muted',
  },
  error: {
    color: 'interface.error',
  },
};

export default {
  fontFaces,
  global,
  variants,
};
