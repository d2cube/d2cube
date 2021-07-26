import {ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemProps} from '../utils/map-item-props.js';

const items = {
  [ids.Amulet]: {
    id: ids.Amulet,
    name: 'Amulet',
    variants: 3,
  },
};

export default mapItemProps({
  size: [1, 1],
  type: ItemType.Amulet,
  mapDescription: (item) => [
    [{text: item.name, color: `item.${item.quality}`}],
  ],
})(items);
