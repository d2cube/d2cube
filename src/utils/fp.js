import {isPlainObject, k, props} from 'uinix-fp';

export const and = (fs) => (x) => fs.reduce((acc, f) => f(x) && acc, true);

export const cb = (f) => (x) => isEmpty(x) ? x : f(x);

export const concat = (x) => (xs) =>
  isEmpty(x) ? xs : xs.concat(Array.isArray(x) ? x : [x]);

export const fill = (n) => (f) => range(0)(n).map(f);

export const fillNull = (n) => fill(n)(k(null));

export const join = (delimiter) => (xs) => xs.join(delimiter);

export const isEmpty = (x) => x === null || x === undefined;

export const isPropValueEqual = (prop) => (value) => (x) =>
  props(prop)(x) === value;

export const not = (f) => (x) => !f(x);

export const or = (fs) => (x) => fs.reduce((acc, f) => f(x) || acc, false);

export const range = (x1) => (x2) =>
  Array.from({length: x2 - x1}).map((_, i) => i + x1);

export const sortEntriesBy = (order) => (entries) =>
  entries.sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]));

export const size = (xs) =>
  isPlainObject(xs) ? Object.keys(xs).length : xs.length;
