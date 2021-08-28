import {
  BasePropertyType,
  ItemQualityType,
  MagicPropertyType,
  SkillSetType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.HeraldOfZakarum,
    name: 'Herald of Zakarum',
    baseId: ids.GildedShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 200],
        [MagicPropertyType.IncreasedChanceOfBlocking]: 30,
        [MagicPropertyType.FasterBlockRate]: 30,
        [MagicPropertyType.BonusToAttackRating]: 20,
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.Vitality]: 20,
        [MagicPropertyType.AllResistances]: 50,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinCombatSkills]: 2,
          [SkillSetType.PaladinSkills]: 2,
        },
      },
    },
  },
  {
    id: ids.AlmaNegra,
    name: 'Alma Negra',
    baseId: ids.SacredRondache,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 77,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [180, 210],
        [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
        [MagicPropertyType.FasterBlockRate]: 30,
        [MagicPropertyType.EnhancedDamage]: [40, 75],
        [MagicPropertyType.BonusToAttackRating]: [40, 75],
        [MagicPropertyType.MagicDamageReduced]: [5, 9],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinSkills]: [1, 2],
        },
      },
    },
  },
  {
    id: ids.Dragonscale,
    name: 'Dragonscale',
    baseId: ids.ZakarumShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 80,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [170, 200],
        [MagicPropertyType.FireDamage]: {x: 211, y: 371},
        [MagicPropertyType.FireSkillDamage]: 15,
        [MagicPropertyType.Spell]: {
          [SkillType.Hydra]: {x: 10},
        },
        [MagicPropertyType.MaximumFireResist]: 5,
        [MagicPropertyType.Strength]: [15, 25],
        [MagicPropertyType.FireAbsorbPercentage]: [10, 20],
      },
    },
  },
]);
