import {props} from 'uinix-fp';

export const and = (fs) => (x) => fs.reduce((acc, f) => f(x) && acc, true);

export const or = (fs) => (x) => fs.reduce((acc, f) => f(x) || acc, false);

export const not = (f) => (x) => !f(x);

export const isEmpty = x => x === null || x === undefined;

export const coerce = (f) => x => isEmpty(x) ? null : f(x);

export const isPropValueEqual = (prop) => (value) => (x) =>
  props(prop)(x) === value;

export const push = (x) => (xs) => isEmpty(x) ? xs : [...xs, x];
