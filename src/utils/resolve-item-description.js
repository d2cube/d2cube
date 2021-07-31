import {pipe} from 'uinix-fp';

import {ItemPropertyType, ItemType} from '../enums/index.js';
import {concatIfNotEmpty, join} from './fp.js';

export const resolveItemDescription = (item) =>
  pipe([
    concatIfNotEmpty(name)(item),
    concatIfNotEmpty()(quantity(item)),
    concatIfNotEmpty(clvl)(item.clvl),
    concatIfNotEmpty()(item.description),
  ])([]);

const clvl = (x) => ({
  text: `Required level: ${x}`,
});

// TODO: rework this and remove null coercion after refactor
const quantity = (item) => {
  if (item.properties?.base?.[ItemPropertyType.Quantity]) {
    return {
      text: `Quantity: ${item?.roll?.base?.Quantity}`,
    };
  }
};

const name = (item) => {
  const {quality, name, personalization, prefix, suffix, type} = item;

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

  const text = pipe([
    concatIfNotEmpty()(personalization),
    concatIfNotEmpty()(prefix),
    concatIfNotEmpty()(name),
    concatIfNotEmpty((x) => `of ${x}`)(suffix),
    join(' '),
  ])([]);

  return {
    text,
    color,
  };
};
