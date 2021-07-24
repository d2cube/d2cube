import {ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemProps} from '../utils/map-item-props.js';

const items = {
  [ids.ScrollOfIdentify]: {
    id: ids.ScrollOfIdentify,
    name: 'Scroll of Identify',
  },
  [ids.ScrollOfTownPortal]: {
    id: ids.ScrollOfTownPortal,
    name: 'Scroll of Town Portal',
  },
};

export default mapItemProps({
  size: [1, 1],
  type: ItemType.Scroll,
  mapDescription: (item) => [[{text: item.name}, {text: 'Right click to use'}]],
})(items);
