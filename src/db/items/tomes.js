import {BasePropertyType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
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
