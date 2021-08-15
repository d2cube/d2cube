import {props} from 'uinix-fp';
import {getItemById} from '../api/index.js';

import {add, sum} from './fp.js';
import {resolveItemRunes} from './resolvers/resolve-item-runes.js';
import {resolveItemRuneword} from './resolvers/resolve-item-runeword.js';

// Track all magic properties from magic/set/socket bonuses
export const calcItemStats = (item) => {
  const stats = {};

  // Calc magic properties
  const magicProperties = props('properties.magic')(item) || {};
  Object.entries(magicProperties).forEach(pushEntry(stats));

  // Calc socket properties
  const {sockets, socketCategory} = item;
  if (sockets) {
    const runes = resolveItemRunes(item);
    const runeword = resolveItemRuneword(runes)(item);
    if (runeword) {
      const runewordProperties = props(`properties.${socketCategory}`)(
        runeword,
      );
      Object.entries(runewordProperties.magic).forEach(pushEntry(stats));
    } else {
      item.sockets.forEach((socket) => {
        const socketItem = getItemById(socket);
        const socketProperties =
          props(`properties.socket.${socketCategory}`)(socketItem) || {};
        Object.entries(socketProperties).forEach(pushEntry(stats));
      });
    }
  }

  // Reduce effective value
  return Object.entries(stats).reduce((acc, [property, values]) => {
    // TODO: figure out general logic
    let effective = [];
    if (values.length === 1) {
      effective = values[0];
    } else if (values.every(Number.isFinite)) {
      effective = sum(values);
    } else {
      effective = values.reduce((acc2, value) => {
        if (Array.isArray(value)) {
          return value;
        }

        return acc2.map(add(value));
      }, []);
    }

    acc[property] = effective;

    return acc;
  }, {});
};

const pushEntry = (x) => (entry) => {
  const [key, value] = entry;
  if (!(key in x)) {
    x[key] = [];
  }

  x[key].push(value);
};
