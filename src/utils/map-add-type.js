import {isPlainObject} from 'uinix-fp';

export const mapAddType = (type) => (xs) => {
  if (Array.isArray(xs)) {
    return xs.map((x) => ({...x, type}));
  }

  if (isPlainObject(xs)) {
    return Object.entries(xs).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {...value, type},
      }),
      {},
    );
  }

  return xs;
};
