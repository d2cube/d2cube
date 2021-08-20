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
    id: ids.LidlessWall,
    name: 'Lidless Wall',
    size: [3, 2],
    baseId: ids.GrimShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.EnhancedDefense]: [80, 130],
        [MagicPropertyType.Energy]: 10,
        [MagicPropertyType.IncreaseMaximumMana]: 10,
        [MagicPropertyType.ManaAfterKill]: [3, 5],
        [MagicPropertyType.LightRadius]: 1,
      },
    },
  },
  {
    id: ids.WallOfTheEyeless,
    name: 'Wall of the Eyeless',
    baseId: ids.BoneShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.ManaStolenPerHit]: 3,
        [MagicPropertyType.EnhancedDefense]: [30, 40],
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.PoisonResist]: 20,
        [MagicPropertyType.ManaAfterKill]: 5,
      },
    },
  },
]);
