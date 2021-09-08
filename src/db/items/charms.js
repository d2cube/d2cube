import {ItemQualityType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Normal,
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
