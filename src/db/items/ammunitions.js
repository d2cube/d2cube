import {BasePropertyType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [3, 1],
  type: ItemType.Ammunition,
})([
  {
    id: ids.Arrows,
    name: 'Arrows',
    properties: {
      base: {
        [BasePropertyType.Quantity]: 350,
      },
    },
  },
  {
    id: ids.Bolts,
    name: 'Bolts',
    properties: {
      base: {
        [BasePropertyType.Quantity]: 250,
      },
    },
  },
]);
