import {pipe} from 'uinix-fp';

import {ItemPropertyType} from '../enums/index.js';
import {coerce, push} from './fp.js';

export const resolveItemDescription = (item) =>
  pipe([
    push(name(item)), //
    push(quantity(item)),
    push(clvl(item.clvl)),
  ])([]);

export const quantity = (item) => {
  // TODO remove null coercion after refactor
  if (item.properties?.base?.[ItemPropertyType.Quantity]) {
    return {
      text: `Quantity: ${item?.roll?.base?.Quantity}`,
    };
  }
};

export const clvl = coerce(x => ({
  text: `Required level: ${x}`,
}));

export const name = (item) => ({
  text: item.name,
  color: item.quality,
});
