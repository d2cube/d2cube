import {ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  type: ItemType.Charm,
})([
  {
    id: ids.SmallCharm,
    name: 'Small Charm',
    size: [1, 1],
    variants: 3,
  },
  {
    id: ids.LargeCharm,
    name: 'Large Charm',
    size: [2, 1],
    variants: 3,
  },
  {
    id: ids.GrandCharm,
    name: 'Grand Charm',
    size: [3, 1],
    variants: 3,
  },
]);
