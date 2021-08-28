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

const global = {
  body: {
    fontFamily: 'body',
  },
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
};

const variants = {
  diablo,
};

export default {
  fontFaces,
  global,
  variants,
};
