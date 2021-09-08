import {ItemQualityType, ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Normal,
  size: [1, 1],
  type: ItemType.Amulet,
})([
  {
    id: ids.Amulet,
    name: 'Amulet',
    variants: 3,
  },
]);
