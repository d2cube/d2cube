import {ItemType} from '../../enums/index.js';

export const resolveItemColor = (item) => {
  const {quality, sockets, type} = item;

  switch (type) {
    case ItemType.Key:
    case ItemType.Essence:
    case ItemType.Token:
      return 'item.crafted';
    case ItemType.Rune:
      return 'item.rune';
    default:
      if (quality) {
        return `item.${quality}`;
      }

      if (sockets) {
        return 'item.socketed';
      }

      return null;
  }
};
