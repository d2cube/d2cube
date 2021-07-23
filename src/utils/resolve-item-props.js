import db from '../db/index.js';
import {roll} from './roll.js';

const {ItemType} = db.enums;

export const resolveItemProps = (item) => {
  let description = [];
  let size = [];

  switch (item.type) {
    case ItemType.Ammunition: {
      description = [
        [{text: item.name}, {text: `Quantity: ${roll(0, item.size)}`}],
      ];
      size = [3, 1];
      break;
    }

    case ItemType.Gem: {
      description = [
        [{text: item.name}, {text: 'Can be inserted into socked items'}],
        [
          {text: 'Weapons: {{}}', stats: item.stats.weapons},
          {text: 'Armor: {{}}', stats: item.stats.armor},
          {text: 'Helms: {{}}', stats: item.stats.armor},
          {text: 'Shields: {{}}', stats: item.stats.shields},
        ],
        [{text: `Required Level: ${item.clvl || 'None'}`}],
      ];
      size = [1, 1];
      break;
    }

    case ItemType.Potion: {
      description = [[{text: item.name}]];
      size = [1, 1];
      break;
    }

    case ItemType.Rune: {
      description = [
        [
          {text: item.name, color: 'item.rune'},
          {text: 'Can be inserted into socked items'},
        ],
        [
          {text: 'Weapons: {{}}', stats: item.stats.weapons},
          {text: 'Armor: {{}}', stats: item.stats.armor},
          {text: 'Helms: {{}}', stats: item.stats.armor},
          {text: 'Shields: {{}}', stats: item.stats.shields},
        ],
        [{text: `Required Level: ${item.clvl || 'None'}`}],
      ];
      size = [1, 1];
      break;
    }

    case ItemType.Scroll: {
      description = [[{text: item.name}, {text: 'Right click to use'}]];
      size = [1, 1];
      break;
    }

    case ItemType.Tome: {
      description = [
        [
          {text: item.name},
          {text: 'Insert scrolls'},
          {text: 'Right click to use'},
          {text: `Quantity: ${roll(0, item.size)}`},
        ],
      ];
      size = [2, 1];
      break;
    }

    default:
      break;
  }

  return {description, size};
};
