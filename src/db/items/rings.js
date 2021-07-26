import {filter} from 'uinix-fp';

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

export const mapDescription = (item) => {
  const {name, quality, prefix, suffix} = item;
  const color = `item.${quality}`;

  const itemName = filter()([prefix || quality, name, suffix]).join(' ');

  return [[{text: itemName, color}]];
};

export default mapItemProps({
  size: [1, 1],
  type: ItemType.Ring,
  mapDescription,
})(items);
