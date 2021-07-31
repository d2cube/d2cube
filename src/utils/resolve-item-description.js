import {pipe} from 'uinix-fp';

import {BasePropertyType, ItemType} from '../enums/index.js';
import {join, pushIfNotEmpty} from './fp.js';

export const resolveItemDescription = (item) => {
  const description = pipe([
    pushIfNotEmpty(name)(item),
    pushIfNotEmpty()(quantity(item)),
    pushIfNotEmpty(clvl)(item.clvl),
  ])([]);

  return description.concat(item.description || []);
};

const clvl = (x) => ({
  text: `Required level: ${x}`,
});

// TODO: rework this and remove null coercion after refactor
const quantity = (item) => {
  if (item.properties?.base?.[BasePropertyType.Quantity]) {
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
    pushIfNotEmpty()(personalization),
    pushIfNotEmpty()(prefix),
    pushIfNotEmpty()(name),
    pushIfNotEmpty((x) => `of ${x}`)(suffix),
    join(' '),
  ])([]);

  return {
    text,
    color,
  };
};
