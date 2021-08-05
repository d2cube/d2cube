import {ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [1, 1],
  type: ItemType.Ring,
})([
  {
    id: ids.Ring,
    name: 'Ring',
    variants: 5,
  },
]);
