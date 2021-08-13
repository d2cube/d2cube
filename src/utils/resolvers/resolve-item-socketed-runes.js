import {prop} from 'uinix-fp';

import {getItemById} from '../../api/index.js';
import {ItemType} from '../../enums/item-type.js';

export const resolveItemSocketedRunes = (item) => {
  let runeword;
  let runes;

  if (item.sockets) {
    const socketedRunes = item.sockets
      .map(getItemById)
      .filter((item) => item && item.type === ItemType.Rune);

    if (socketedRunes.length > 0) {
      runes = `'${socketedRunes.map(prop('id')).join('')}'`;
    }
  }

  return {runeword, runes};
};
