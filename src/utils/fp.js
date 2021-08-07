import {isPlainObject, k, props} from 'uinix-fp';

export const and = (fs) => (x) => fs.reduce((acc, f) => f(x) && acc, true);

export const not = (f) => (x) => !f(x);

export const or = (fs) => (x) => fs.reduce((acc, f) => f(x) || acc, false);

export const cb = (f) => (x) => isEmpty(x) ? x : f(x);

export const concat = (x) => (xs) =>
  isEmpty(x) ? xs : xs.concat(Array.isArray(x) ? x : [x]);

export const fill = (n) => (f) => range(0)(n).map(f);

export const fillNull = (n) => fill(n)(k(null));

export const floor = (x) => Math.floor(x);

export const join = (delimiter) => (xs) => xs.join(delimiter);

export const isEmpty = (x) => x === null || x === undefined;

export const isPropValueEqual = (prop) => (value) => (x) =>
  props(prop)(x) === value;

export const add = (x) => (y) => x + y;

export const multiply = (x) => (y) => x * y;

export const percent = (x) => (x + 100) / 100;

export const range = (x1) => (x2) =>
  Array.from({length: x2 - x1}).map((_, i) => i + x1);

/**
 * Sort entries based on some property order.
 * If an entry property is not matched, sort it to the bottom.
 */
export const sortEntriesBy = (order) => (entries) =>
  entries.sort((a, b) => {
    const aIndex = order.indexOf(a[0]);
    const bIndex = order.indexOf(b[0]);
    if (aIndex === bIndex) {
      return 0;
    }

    if (aIndex === -1) {
      return 1;
    }

    if (bIndex === -1) {
      return -1;
    }

    return aIndex - bIndex;
  });

export const size = (xs) =>
  isPlainObject(xs) ? Object.keys(xs).length : xs.length;
