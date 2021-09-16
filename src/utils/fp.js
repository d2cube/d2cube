import escapeStringRegexp from 'escape-string-regexp';
import {isPlainObject, k, merge, props} from 'uinix-fp';

export const append = (x) => (y) => y + x;

export const and = (fs) => (x) => fs.reduce((acc, f) => f(x) && acc, true);

export const not = (f) => (x) => !f(x);

export const or = (fs) => (x) => fs.reduce((acc, f) => f(x) || acc, false);

export const cb = (f) => (x) => isEmpty(x) ? x : f(x);

export const concat = (x) => (xs) =>
  isEmpty(x) ? xs : xs.concat(Array.isArray(x) ? x : [x]);

export const clone = (x) => (isPlainObject(x) ? merge({})(x) : x);

export const normalize = (key) => (xs) =>
  Object.fromEntries(xs.map((x) => [x[key], x]));

export const degroupBy = (key) => (xs) => xs.flatMap((x) => x[key] || x);

export const groupBy = (key) => (xs) =>
  xs.reduce((acc, x) => {
    const group = props(key)(x);
    if (!(group in acc)) {
      acc[group] = [];
    }

    acc[group].push(x);
    return acc;
  }, {});

export const keyOn = (key) => (x) => ({[key]: x});

export const fill = (n) => (f) => range(1)(n).map(f);

export const fillNull = (n) => fill(n)(k(null));

export const join = (delimiter) => (xs) => xs.join(delimiter);

export const humanize = (x) => x.replace(/([A-Z])/g, ' $1').trim();

export const isEmpty = (x) => x === null || x === undefined;

export const isEmptyObject = (x) =>
  isPlainObject(x) && Object.keys(x).length === 0;

export const isNumber = (x) => /^-?\d*.{0,1}\d+$/.test(x);

export const isPropValueEqual = (prop) => (value) => (x) =>
  props(prop)(x) === value;

export const add = (x) => (y) => x + y;

const equal = (x) => (y) => x === y;

export const count =
  (f = equal) =>
  (y) =>
  (xs) =>
    xs.filter(f(y)).length;

export const match = (p) => (x) =>
  new RegExp(escapeStringRegexp(p), 'i').test(x);

export const map = (f) => (xs) => xs.map(f);

export const max = (x) => (y) => Math.max(x, y);

export const min = (x) => (y) => Math.min(x, y);

export const multiply = (x) => (y) => x * y;

export const percent = (x) => (x + 100) / 100;

export const prepend = (x2) => (x1) => `${x1}${x2}`;

export const range = (x1) => (x2) =>
  Array.from({length: x2 - x1 + 1}).map((_, i) => i + x1);

// TODO: reference S.sum
export const sum = (xs) => {
  const [firstValue] = xs;
  if (isPlainObject(firstValue)) {
    const keys = Object.keys(firstValue);
    return xs.reduce((acc, x) => {
      keys.forEach((key) => {
        if (!(key in acc)) {
          acc[key] = 0;
        }

        acc[key] += x[key];
      });
      return acc;
    }, {});
  }

  return xs.reduce((acc, x) => acc + x, 0);
};

export const size = (xs) =>
  isPlainObject(xs) ? Object.keys(xs).length : xs.length;

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
