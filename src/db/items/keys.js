import {ItemType} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [2, 1],
  type: ItemType.Key,
})([
  {
    id: ids.KeyOfDestruction,
    name: 'Key of Destruction',
  },
  {
    id: ids.KeyOfHate,
    name: 'Key of Hate',
  },
  {
    id: ids.KeyOfTerror,
    name: 'Key of Terror',
  },
]);
