import {BasePropertyType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  type: ItemType.Key,
})([
  {
    id: ids.Key,
    name: 'Key',
    size: [1, 1],
    properties: {
      base: {
        [BasePropertyType.Quantity]: 12,
      },
    },
  },
  {
    id: ids.KeyOfDestruction,
    name: 'Key of Destruction',
    size: [2, 1],
  },
  {
    id: ids.KeyOfHate,
    name: 'Key of Hate',
    size: [2, 1],
  },
  {
    id: ids.KeyOfTerror,
    name: 'Key of Terror',
    size: [2, 1],
  },
]);
