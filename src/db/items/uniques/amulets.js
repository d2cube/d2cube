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
  baseId: ids.Amulet,
  imageId: ids.Amulet,
  quality: ItemQualityType.Unique,
  size: [1, 1],
  type: ItemType.Unique,
})([
  {
    id: ids.AtmasScarab,
    name: "Atma's Scarab",
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 60,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.AmplifyDamage]: {x: 2, y: 5},
        },
        [MagicPropertyType.BonusToAttackRating]: 20,
        [MagicPropertyType.PoisonDamage]: {x: 40, y: 40, z: 4},
        [MagicPropertyType.PoisonResist]: 75,
        [MagicPropertyType.AttackerTakesDamage]: 5,
        [MagicPropertyType.LightRadius]: 3,
      },
    },
  },
  {
    id: ids.CrescentMoon,
    name: 'Crescent Moon',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 50,
      },
      magic: {
        [MagicPropertyType.DamageTakenGoesToMana]: 10,
        [MagicPropertyType.Mana]: 45,
        [MagicPropertyType.LifeStolenPerHit]: [3, 6],
        [MagicPropertyType.ManaStolenPerHit]: [11, 15],
        [MagicPropertyType.MagicDamageReduced]: 10,
        [MagicPropertyType.LightRadius]: -2,
      },
    },
  },
  {
    id: ids.HighlordsWrath,
    name: "Highlord's Wrath",
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.DeadlyStrikeByLevel]: 0.375,
        [MagicPropertyType.LightningResist]: 35,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 30},
        [MagicPropertyType.AttackerTakesDamage]: 15,
      },
    },
  },
  {
    id: ids.MarasKaleidoscope,
    name: "Mara's Kaleidoscope",
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 67,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 2,
        [MagicPropertyType.AllResistances]: [20, 30],
        [MagicPropertyType.AllAttributes]: 5,
      },
    },
  },
  {
    id: ids.Metalgrid,
    name: 'Metalgrid',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 51,
      },
      magic: {
        [MagicPropertyType.AttackRating]: [400, 450],
        [MagicPropertyType.AllResistances]: [25, 35],
        [MagicPropertyType.Defense]: [300, 350],
        [MagicPropertyType.SpellCharges]: {
          [SkillType.IronGolem]: {x: 22, y: 11},
          [SkillType.IronMaiden]: {x: 12, y: 20},
        },
      },
    },
  },
  {
    id: ids.NokozanRelic,
    name: 'Nokozan Relic',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 10,
      },
      magic: {
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.FireResist]: 50,
        [MagicPropertyType.MaximumFireResist]: 10,
        [MagicPropertyType.FireDamage]: {x: 3, y: 6},
        [MagicPropertyType.LightRadius]: 3,
      },
    },
  },
  {
    id: ids.SaracensChance,
    name: "Saracen's Chance",
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 47,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.IronMaiden]: {x: 2, y: 10},
        },
        [MagicPropertyType.AllResistances]: [15, 25],
        [MagicPropertyType.AllAttributes]: 12,
      },
    },
  },
  {
    id: ids.SeraphsHymn,
    name: "Seraph's Hymn",
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 2,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinDefensiveAuras]: [1, 2],
        },
        [MagicPropertyType.DamageToDemons]: [20, 50],
        [MagicPropertyType.AttackRatingAgainstDemons]: [150, 250],
        [MagicPropertyType.DamageToUndead]: [20, 50],
        [MagicPropertyType.AttackRatingAgainstUndead]: [150, 250],
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.TheCatsEye,
    name: "The Cat's Eye",
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 50,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 30,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.DefenseVsMissle]: 100,
        [MagicPropertyType.Defense]: 100,
        [MagicPropertyType.Dexterity]: 25,
      },
    },
  },
  {
    id: ids.TheEyeOfEtlich,
    name: 'The Eye of Etlich',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.LifeStolenPerHit]: [3, 7],
        [MagicPropertyType.ColdDamage]: {x: [1, 3], y: [2, 5]},
        [MagicPropertyType.DefenseVsMissle]: [10, 40],
        [MagicPropertyType.LightRadius]: [1, 5],
      },
    },
  },
  {
    id: ids.TheMahimOakCurio,
    name: 'The Mahim-Oak Curio',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.EnhancedDefense]: 10,
        [MagicPropertyType.BonusToAttackRating]: 10,
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.AllAttributes]: 10,
      },
    },
  },
  {
    id: ids.TheRisingSun,
    name: 'The Rising Sun',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.FireSkills]: 2,
        },
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.Meteor]: {x: [13, 19], y: 2},
        },
        [MagicPropertyType.FireAbsorbByLevel]: 0.75,
        [MagicPropertyType.FireDamage]: {x: 24, y: 48},
        [MagicPropertyType.ReplenishLife]: 10,
        [MagicPropertyType.LightRadius]: 4,
      },
    },
  },
]);
