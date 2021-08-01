import {ItemQualityType, ItemType} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({})([
  {
    id: ids.WirtsLeg,
    title: "Wirt's Leg",
    type: ItemType.Mace,
    quality: ItemQualityType.Unique,
    baseId: ids.Mace,
  },
]);
