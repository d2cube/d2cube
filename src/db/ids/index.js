/**
 * All items have human-readable ID values expressed in PascalCase.
 *
 * Note: Item images are named after their IDs.
 */

import ammunition from './ammunition.js';
import gem from './gem.js';
import potion from './potion.js';
import rune from './rune.js';
import scroll from './scroll.js';
import tome from './tome.js';

export default {
  ...ammunition,
  ...gem,
  ...potion,
  ...rune,
  ...scroll,
  ...tome,
};
