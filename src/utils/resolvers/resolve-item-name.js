import {pipe} from 'uinix-fp';

import {ItemType} from '../../enums/index.js';
import {cb, concat, join} from '../fp.js';

export const resolveItemName = (item) => {
  const {quality, name, personalization, prefix, suffix, tier, type} = item;

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
    concat(personalization),
    concat(prefix),
    concat(name),
    concat(cb((x) => Array.from({length: x}).join('+'))(tier)),
    concat(cb((x) => `of ${x}`)(suffix)),
    join(' '),
  ])([]);

  return {color, text};
};
