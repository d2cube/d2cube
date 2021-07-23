import {ItemQualityType} from '../enums/index.js';
import ids from '../ids/index.js';

export default {
  [ids.Arrows]: {
    id: ids.Arrows,
    name: 'Arrows',
    quality: ItemQualityType.Normal,
    size: 350,
  },
  [ids.Bolts]: {
    id: ids.Bolts,
    name: 'Bolts',
    quality: ItemQualityType.Normal,
    size: 250,
  },
};
