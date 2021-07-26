import {ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.Ring]: {
    id: ids.Ring,
    name: 'Ring',
    variants: 5,
  },
};

export default mapItems({
  size: [1, 1],
  type: ItemType.Ring,
  mapDescription: (item) => [[mapItemName(item)]],
})(items);
