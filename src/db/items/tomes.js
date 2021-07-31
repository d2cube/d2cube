import {ItemType} from '../../enums/index.js';
import ids from '../ids/index.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.TomeOfIdentify]: {
    id: ids.TomeOfIdentify,
    name: 'Tome of Identify',
    max: 20,
  },
  [ids.TomeOfTownPortal]: {
    id: ids.TomeOfTownPortal,
    name: 'Tome of Town Portal',
    max: 20,
  },
};

export default mapItems({
  size: [2, 1],
  type: ItemType.Tome,
  mapDescription: (item) => [
    [
      {text: item.name},
      {text: 'Insert scrolls'},
      {text: 'Right click to use'},
      {text: `Quantity: ${item.max}`},
    ],
  ],
})(items);
