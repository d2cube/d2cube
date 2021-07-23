import {ItemType, ItemQualityType} from '../enums/index.js';
import ids from '../ids/index.js';

export default {
  [ids.Arrows]: {
    id: ids.Arrows,
    type: ItemType.Ammunition,
    name: 'Arrows',
    quality: ItemQualityType.Normal,
    size: 350,
  },
  [ids.Bolts]: {
    id: ids.Bolts,
    type: ItemType.Ammunition,
    name: 'Bolts',
    quality: ItemQualityType.Normal,
    size: 250,
  },
};
