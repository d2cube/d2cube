import {ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemProps} from '../utils/map-item-props.js';

const items = {
  [ids.TomeOfIdentify]: {
    id: ids.TomeOfIdentify,
    name: 'Tome of Identify',
    size: 20,
  },
  [ids.TomeOfTownPortal]: {
    id: ids.TomeOfTownPortal,
    name: 'Tome of Town Portal',
    size: 20,
  },
};

export default mapItemProps({
  size: [2, 1],
  type: ItemType.Tome,
  mapDescription: (item) => [
    [
      {text: item.name},
      {text: 'Insert scrolls'},
      {text: 'Right click to use'},
      {text: `Quantity: ${item.size}`},
    ],
  ],
})(items);
