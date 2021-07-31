import {i, pipe} from 'uinix-fp';

import {ItemPropertyType, ItemType} from '../enums/index.js';
import {coerce, push} from './fp.js';

export const resolveItemDescription = (item) =>
  pipe([
    push(name(item)),
    push(quantity(item)),
    push(clvl(item.clvl)),
    push(description(item.description)),
  ])([]);

export const clvl = coerce((x) => ({
  text: `Required level: ${x}`,
}));

export const description = coerce(i);

export const quantity = (item) => {
  // TODO remove null coercion after refactor
  if (item.properties?.base?.[ItemPropertyType.Quantity]) {
    return {
      text: `Quantity: ${item?.roll?.base?.Quantity}`,
    };
  }
};

export const name = (item) => {
  const {quality, name, type} = item;

  let color;
  switch (type) {
    case ItemType.Key:
    case ItemType.Essence:
    case ItemType.Token:
      color = 'crafted';
      break;
    default:
      color = quality;
      break;
  }

  return {
    text: name,
    color,
  };
};
