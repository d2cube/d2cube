import {ItemType} from '../../enums/index.js';

export const resolveItemColor = (item) => {
  const {quality, sockets, type} = item;

  let color = sockets ? 'socketed' : null;
  switch (type) {
    case ItemType.Key:
    case ItemType.Essence:
    case ItemType.Token:
      color = 'crafted';
      break;
    case ItemType.Rune:
      color = 'rune';
      break;
    default:
      if (quality) {
        color = quality;
      }

      break;
  }

  return `item.${color}`;
};
