import {ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [1, 1],
  type: ItemType.Jewel,
})([
  {
    id: ids.Jewel,
    name: 'Jewel',
    variants: 6,
  },
]);
