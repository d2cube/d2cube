import alegreyaSansRegularSrc from '../../../static/assets/fonts/alegreya-sans-regular.ttf';
import exocetMediumSrc from '../../../static/assets/fonts/exocet-medium.ttf';

const fontFaces = {
  AlegreyaSansRegular: {
    src: [alegreyaSansRegularSrc],
  },
  ExocetMedium: {
    src: [exocetMediumSrc],
  },
};

const global = {
  body: {
    fontFamily: 'body',
  },
  h1: {
    fontFamily: 'diablo',
  },
  h2: {
    fontFamily: 'diablo',
  },
  h3: {
    fontFamily: 'diablo',
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
};

const variants = {
  brand: {
    color: 'brand.primary',
    fontSize: 'xxl',
    margin: 0,
  },
};

export default {
  fontFaces,
  global,
  variants,
};
