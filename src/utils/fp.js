import {isPlainObject, props} from 'uinix-fp';

export const and = (fs) => (x) => fs.reduce((acc, f) => f(x) && acc, true);

export const cb = (f) => (x) => isEmpty(x) ? x : f(x);

export const concat = (x) => (xs) =>
  isEmpty(x) ? xs : xs.concat(Array.isArray(x) ? x : [x]);

export const join = (delimiter) => (xs) => xs.join(delimiter);

export const isEmpty = (x) => x === null || x === undefined;

export const isPropValueEqual = (prop) => (value) => (x) =>
  props(prop)(x) === value;

export const not = (f) => (x) => !f(x);

export const or = (fs) => (x) => fs.reduce((acc, f) => f(x) || acc, false);

export const size = (xs) =>
  isPlainObject(xs) ? Object.keys(xs).length : xs.length;
