import {ItemQualityType, ItemType} from '../enums/index.js';
import {mapItemProps} from '../utils/map-item-props.js';
import ids from '../ids/index.js';

const items = {
  [ids.Arrows]: {
    id: ids.Arrows,
    name: 'Arrows',
    quality: ItemQualityType.Normal,
    max: 350,
  },
  [ids.Bolts]: {
    id: ids.Bolts,
    name: 'Bolts',
    quality: ItemQualityType.Normal,
    max: 250,
  },
};

export default mapItemProps({
  size: [3, 1],
  type: ItemType.Ammunition,
  mapDescription: (item) => [
    [{text: item.name}, {text: `Quantity: ${item.max}`}],
  ],
})(items);
