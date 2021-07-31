import {pipe} from 'uinix-fp';

import {ItemPropertyType} from '../enums/index.js';
import {push} from './fp.js';

export const resolveItemDescription = (item) =>
  pipe([
    push(name(item)), //
    push(quantity(item)),
  ])([]);

export const quantity = (item) => {
  // TODO remove null coercion after refactor
  if (item.properties?.base?.[ItemPropertyType.Quantity]) {
    return {
      text: `Quantity: ${item?.roll?.base?.Quantity}`,
    };
  }
};

export const name = (item) => ({
  text: item.name,
  color: item.quality,
});
