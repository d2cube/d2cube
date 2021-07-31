import {ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
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
