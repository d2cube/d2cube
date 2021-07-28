import {props} from 'uinix-fp';

export const and = (fs) => (x) => fs.reduce((acc, f) => f(x) && acc, true);

export const or = (fs) => (x) => fs.reduce((acc, f) => f(x) || acc, true);

export const not = (f) => (x) => !f(x);

export const isEqualPropValue = (prop) => (value) => (x) =>
  value === props(prop)(x);
