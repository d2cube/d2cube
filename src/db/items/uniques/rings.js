import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Unique,
})([
  {
    id: ids.StoneOfJordan,
    name: 'Stone of Jordan',
    size: [1, 1],
    baseId: ids.Ring,
    imageId: ids.Ring,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 12},
        [MagicPropertyType.Mana]: 20,
        [MagicPropertyType.IncreaseMaximumMana]: 25,
      },
    },
  },
]);
