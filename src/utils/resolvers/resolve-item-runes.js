import {prop} from 'uinix-fp';

import {getItemById} from '../../api/index.js';
import {ItemType} from '../../enums/index.js';

export const resolveItemRunes = (item) => {
  if (item.sockets) {
    const socketedRunes = item.sockets
      .map(getItemById)
      .filter((item) => item && item.type === ItemType.Rune);

    if (socketedRunes.length > 0) {
      return socketedRunes.map(prop('id')).join('');
    }
  }
};
