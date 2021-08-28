import {
  BasePropertyType,
  ItemQualityType,
  MagicPropertyType,
  PlayerClassType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.JalalsMane,
    name: "Jalal's Mane",
    baseId: ids.TotemicMask,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 200],
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.BonusToAttackRating]: 20,
        [MagicPropertyType.AllResistances]: 30,
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.Energy]: 20,
        [MagicPropertyType.ManaAfterKill]: 5,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidShapeShiftingSkills]: 2,
          [SkillSetType.DruidSkills]: 2,
        },
      },
    },
  },
  {
    id: ids.CerebusBite,
    name: "Cerebus' Bite",
    baseId: ids.BloodSpirit,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 63,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [130, 140],
        [MagicPropertyType.BonusToAttackRating]: [60, 120],
        [MagicPropertyType.LifeStolenPerHit]: [7, 10],
        [MagicPropertyType.OpenWounds]: 33,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidShapeShiftingSkills]: [2, 4],
        },
        [MagicPropertyType.Spell]: {
          [SkillType.FeralRage]: {x: [1, 2], y: PlayerClassType.Druid},
        },
      },
    },
  },
  {
    id: ids.SpiritKeeper,
    name: 'Spirit Keeper',
    baseId: ids.EarthSpirit,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 67,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [170, 190],
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.MaximumPoisonResist]: 10,
        [MagicPropertyType.FireResist]: [30, 40],
        [MagicPropertyType.LightningAbsorb]: [9, 14],
        [MagicPropertyType.ColdAbsorbPercentage]: [15, 25],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidSkills]: [1, 2],
        },
      },
    },
  },
  {
    id: ids.Ravenlore,
    name: 'Ravenlore',
    baseId: ids.SkySpirit,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 74,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 150],
        [MagicPropertyType.Energy]: [20, 30],
        [MagicPropertyType.LowerFireResist]: [-10, -20],
        [MagicPropertyType.AllResistances]: [15, 25],
        [MagicPropertyType.Spell]: {
          [SkillType.Raven]: {x: 7, y: PlayerClassType.Druid},
        },
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidElementalSkills]: 3,
        },
      },
    },
  },
]);
