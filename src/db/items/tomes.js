import {BasePropertyType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [2, 1],
  type: ItemType.Tome,
  properties: {
    base: {
      [BasePropertyType.Quantity]: 20,
    },
  },
})([
  {
    id: ids.TomeOfIdentify,
    name: 'Tome of Identify',
  },
  {
    id: ids.TomeOfTownPortal,
    name: 'Tome of Town Portal',
  },
]);
