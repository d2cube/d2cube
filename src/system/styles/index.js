import custom from './custom.js';
import global from './global.js';
import typography from './typography.js';
import variants from './variants.js';

export default {
  breakpoints: ['480x', '768px'],
  global,
  typography,
  variants,
  ...custom,
};
