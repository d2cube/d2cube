import {pipe} from 'uinix-fp';

import {ItemType} from '../../enums/index.js';
import {cb, concat, join} from '../fp.js';
import {resolveItemRunes} from './resolve-item-runes.js';
import {resolveItemRuneword} from './resolve-item-runeword.js';
import {resolveSuffixName} from './resolve-suffix-name.js';

export const resolveItemName = (item) => {
  const {
    quality,
    name,
    personalization,
    prefix,
    sockets,
    suffix,
    tier,
    type,
    basename = name,
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

  const tierSuffix = (x) => Array.from({length: x}).join('+');

  const resolvedName =
    quality &&
    pipe([
      concat(personalization),
      concat(prefix),
      concat(runeword ? runeword.name : name),
      concat(cb((x) => `of ${resolveSuffixName(x)}`)(suffix)),
      join(' '),
    ])([]);

  const resolvedBasename = pipe([
    concat(basename),
    concat(cb(tierSuffix)(tier)),
    join(' '),
  ])([]);

  return pipe([
    concat({color: runeword ? 'runeword' : color, text: resolvedName}),
    concat({color, text: runeword ? name : resolvedBasename}),
    concat({color: 'runeword', text: runes ? `'${runes}'` : null}),
  ])([]);
};
