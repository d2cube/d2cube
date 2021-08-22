import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Unique,
})([
  {
    id: ids.TheOculus,
    name: 'The Oculus',
    baseId: ids.SwirlingCrystal,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.ManaAfterKill]: 5,
        [MagicPropertyType.AllResistances]: 20,
        [MagicPropertyType.FasterCastRate]: 30,
        [MagicPropertyType.Vitality]: 20,
        [MagicPropertyType.Energy]: 20,
        [MagicPropertyType.EnhancedDefense]: 20,
        [MagicPropertyType.MagicFind]: 50,
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.Teleport]: {x: 1, y: 25},
        },
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: 3,
        },
      },
    },
  },
  {
    id: ids.EschutasTemper,
    name: "Eschuta's Temper",
    baseId: ids.EldritchOrb,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 72,
      },
      magic: {
        [MagicPropertyType.FasterCastRate]: 40,
        [MagicPropertyType.FireSkillDamage]: [10, 20],
        [MagicPropertyType.LightningSkillDamage]: [10, 20],
        [MagicPropertyType.Energy]: [20, 30],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: [1, 3],
        },
      },
    },
  },
  {
    id: ids.DeathsFathom,
    name: "Death's Fathom",
    baseId: ids.DimensionalShard,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 73,
      },
      magic: {
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.ColdSkillDamage]: [15, 30],
        [MagicPropertyType.LightningResist]: [25, 40],
        [MagicPropertyType.FireResist]: [25, 40],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: 3,
        },
      },
    },
  },
]);
