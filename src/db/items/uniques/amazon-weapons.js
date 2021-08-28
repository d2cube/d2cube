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
    id: ids.LycandersAim,
    name: "Lycander's Aim",
    baseId: ids.CeremonialBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.AddDamage]: {x: 25, y: 50},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonBowAndCrossbowSkills]: 2,
          [SkillSetType.AmazonSkills]: 2,
        },
        [MagicPropertyType.ManaStolenPerHit]: [5, 8],
        [MagicPropertyType.Energy]: 20,
        [MagicPropertyType.Dexterity]: 20,
        [MagicPropertyType.EnhancedDefense]: 20,
      },
    },
  },
  {
    id: ids.LycandersFlank,
    name: "Lycander's Flank",
    baseId: ids.CeremonialPike,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.AddDamage]: {x: 25, y: 50},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.LifeStolenPerHit]: [5, 9],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonJavelinAndSpearSkills]: 2,
          [SkillSetType.AmazonSkills]: 2,
        },
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.Vitality]: 20,
        [MagicPropertyType.EnhancedDefense]: 20,
      },
    },
  },
  {
    id: ids.TitansRevenge,
    name: "Titan's Revenge",
    baseId: ids.CeremonialJavelin,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.AddDamage]: {x: 25, y: 50},
        [MagicPropertyType.FasterRunWalk]: 30,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonJavelinAndSpearSkills]: 2,
          [SkillSetType.AmazonSkills]: 2,
        },
        [MagicPropertyType.LifeStolenPerHit]: [5, 9],
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.Dexterity]: 20,
        [MagicPropertyType.IncreasedStackSize]: 60,
        [MagicPropertyType.ReplenishesQuantity]: 3,
      },
    },
  },
  {
    id: ids.BloodRavensCharge,
    name: "Blood Raven's Charge",
    baseId: ids.MatriarchalBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 71,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 230],
        [MagicPropertyType.BonusToAttackRating]: [200, 300],
        [MagicPropertyType.FiresExplosiveArrowsOrBolts]: 13,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonBowAndCrossbowSkills]: [2, 4],
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Revive]: {x: 5, y: 30},
        },
      },
    },
  },
  {
    id: ids.Stoneraven,
    name: 'Stoneraven',
    baseId: ids.MatriarchalSpear,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 64,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [230, 280],
        [MagicPropertyType.MagicDamage]: {x: 101, y: 187},
        [MagicPropertyType.Defense]: [400, 600],
        [MagicPropertyType.AllResistances]: [30, 50],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonJavelinAndSpearSkills]: [1, 3],
        },
      },
    },
  },
  {
    id: ids.Thunderstroke,
    name: 'Thunderstroke',
    baseId: ids.MatriarchalJavelin,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 69,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.LightningDamage]: {x: 1, y: 511},
        [MagicPropertyType.IncreasedAttackSpeed]: 15,
        [MagicPropertyType.LowerLightningResist]: -15,
        [MagicPropertyType.Spell]: {
          [SkillType.LightningBolt]: {x: 3, y: PlayerClassType.Amazon},
        },
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Lightning]: {x: 14, y: 20},
        },
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonJavelinAndSpearSkills]: [2, 4],
        },
      },
    },
  },
]);
