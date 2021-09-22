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

  let resolvedName = pipe([
    concat(personalization),
    concat(prefix),
    concat(runeword ? runeword.name : name),
    concat(cb((x) => `of ${resolveSuffixName(x)}`)(suffix)),
    join(' '),
  ])([]);

  let resolvedBasename = basename === name ? null : basename;
  resolvedBasename = runeword ? name : resolvedBasename;
  if (tier) {
    if (resolvedBasename) {
      resolvedBasename += getTierLabel(tier);
    } else if (resolvedName) {
      resolvedName += getTierLabel(tier);
    }
  }

  return pipe([
    concat({color: runeword ? 'item.runeword' : color, text: resolvedName}),
    concat({color, text: resolvedBasename}),
    concat({color: 'item.runeword', text: runes ? `'${runes}'` : null}),
  ])([]);
};
