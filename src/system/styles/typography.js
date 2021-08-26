const fontFaces = {
  AlegreyaSansRegular: {
    src: ['fonts/alegreya-sans-regular.ttf'],
  },
  Exocet: {
    src: ['fonts/exocet.woff2'],
  },
};

const global = {
  body: {
    fontFamily: 'body',
  },
  h1: {
    fontFamily: 'diablo',
    fontSize: 'xxl',
  },
  h2: {
    fontFamily: 'diablo',
    fontSize: 'xl',
  },
  h3: {
    fontFamily: 'diablo',
    fontSize: 'l',
  },
  h4: {
    fontFamily: 'diablo',
  },
  h5: {
    fontFamily: 'diablo',
  },
  h6: {
    fontFamily: 'diablo',
  },
  mark: {
    background: 'none',
    backgroundColor: 'brand.primary',
    textDecoration: 'underline',
  },
};

const variants = {
  diablo: {
    color: 'brand.primary',
    fontFamily: 'diablo',
    margin: 0,
  },
};

export default {
  fontFaces,
  global,
  variants,
};
