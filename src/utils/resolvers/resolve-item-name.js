import {pipe} from 'uinix-fp';

import {cb, concat, join} from '../fp.js';
import {getTierLabel} from '../get-tier-label.js';
import {resolveItemColor} from './resolve-item-color.js';
import {resolveItemRunes} from './resolve-item-runes.js';
import {resolveItemRuneword} from './resolve-item-runeword.js';
import {resolveSuffixName} from './resolve-suffix-name.js';

export const resolveItemName = (item) => {
  const {name, personalization, prefix, suffix, tier, basename = name} = item;

  const color = resolveItemColor(item);
  const runes = resolveItemRunes(item);
  const runeword = resolveItemRuneword(runes)(item);

  const resolvedName = pipe([
    concat(personalization),
    concat(prefix),
    concat(runeword ? runeword.name : name),
    concat(cb(getTierLabel)(tier)),
    concat(cb((x) => `of ${resolveSuffixName(x)}`)(suffix)),
    join(' '),
  ])([]);

  const resolvedBasename = basename === name ? null : basename;

  return pipe([
    concat({color: runeword ? 'item.runeword' : color, text: resolvedName}),
    concat({color, text: runeword ? name : resolvedBasename}),
    concat({color: 'item.runeword', text: runes ? `'${runes}'` : null}),
  ])([]);
};
