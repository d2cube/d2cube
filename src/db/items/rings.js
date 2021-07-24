import {ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemProps} from '../utils/map-item-props.js';

const items = {
  [ids.Ring]: {
    id: ids.Ring,
    name: 'Ring',
    variants: 5,
  },
};

export default mapItemProps({
  size: [1, 1],
  type: ItemType.Ring,
  mapDescription: (item) => [[{text: item.name, color: 'item.magic'}]],
})(items);
