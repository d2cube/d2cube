import {ItemType} from '../../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.Amulet]: {
    id: ids.Amulet,
    name: 'Amulet',
    variants: 3,
  },
};

export default mapItems({
  size: [1, 1],
  type: ItemType.Amulet,
  mapDescription: (item) => [[mapItemName(item)]],
})(items);
