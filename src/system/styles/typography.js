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
    backgroundColor: 'brand.primary',
    textDecoration: 'underline',
  },
  p: {
    maxWidth: 'paragraph.width',
  },
  ul: {
    paddingLeft: 'l',
  },
  pre: {
    ...code,
    margin: 0,
    maxHeight: 'pre.height',
    overflow: 'auto',
  },
};

const variants = {
  diablo,
  error: {
    color: 'interface.error',
  },
};

export default {
  fontFaces,
  global,
  variants,
};
