import {pipe} from 'uinix-fp';

import {ItemType} from '../../enums/index.js';
import {cb, concat, join} from '../fp.js';
import {resolveItemRunes} from './resolve-item-runes.js';
import {resolveItemRuneword} from './resolve-item-runeword.js';

export const resolveItemName = (item) => {
  const {
    basename,
    quality,
    name,
    personalization,
    prefix,
    sockets,
    suffix,
    tier,
    type,
  } = item;

  let color = sockets ? 'socketed' : null;
  switch (type) {
    case ItemType.Key:
    case ItemType.Essence:
    case ItemType.Token:
      color = 'crafted';
      break;
    default:
      if (quality) {
        color = quality;
      }

      break;
  }

  const runes = resolveItemRunes(item);
  const runeword = resolveItemRuneword(runes)(item);

  const resolvedName = pipe([
    concat(personalization),
    concat(prefix),
    concat(runeword ? runeword.name : name),
    concat(cb((x) => Array.from({length: x}).join('+'))(tier)),
    concat(cb((x) => `of ${x}`)(suffix)),
    join(' '),
  ])([]);

  return pipe([
    concat({color: runeword ? 'runeword' : color, text: resolvedName}),
    concat({color, text: runeword ? name : basename}),
    concat({color: 'runeword', text: runes ? `'${runes}'` : null}),
  ])([]);
};
