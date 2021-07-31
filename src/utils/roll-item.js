/**
 * Rolls an item based on its properties.
 */

import {random} from './random.js';

export const rollItem = (item) => ({
  ...item,
  roll: {
    base: {
      Quantity: random(10, 30),
    },
  },
});
