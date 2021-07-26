import {ItemRarityType, ItemType} from '../enums/index.js';
import {mapItems} from '../utils/map-items.js';
import ids from '../ids/index.js';

const items = {
  [ids.Arrows]: {
    id: ids.Arrows,
    name: 'Arrows',
    rarity: ItemRarityType.Normal,
    max: 350,
  },
  [ids.Bolts]: {
    id: ids.Bolts,
    name: 'Bolts',
    rarity: ItemRarityType.Normal,
    max: 250,
  },
};

export default mapItems({
  size: [3, 1],
  type: ItemType.Ammunition,
  mapDescription: (item) => [
    [{text: item.name}, {text: `Quantity: ${item.max}`}],
  ],
})(items);
