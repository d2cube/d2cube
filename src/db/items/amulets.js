import {ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  size: [1, 1],
  type: ItemType.Amulet,
})([
  {
    id: ids.Amulet,
    name: 'Amulet',
    variants: 3,
  },
]);
