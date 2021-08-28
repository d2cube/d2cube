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
    id: ids.Doomslinger,
    name: 'Doomslinger',
    baseId: ids.RepeatingCrossbow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 100],
        [MagicPropertyType.PiercingAttack]: 35,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.Life]: 15,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonSkills]: 1,
        },
      },
    },
  },
  {
    id: ids.Hellcast,
    name: 'Hellcast',
    baseId: ids.HeavyCrossbow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 27,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 80],
        [MagicPropertyType.FiresExplosiveArrowsOrBolts]: 5,
        [MagicPropertyType.FireDamage]: {x: 15, y: 35},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.AttackRating]: 70,
        [MagicPropertyType.MaximumFireResist]: 15,
        [MagicPropertyType.FireResist]: 15,
      },
    },
  },
  {
    id: ids.Ichorstring,
    name: 'Ichorstring',
    baseId: ids.Crossbow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 50,
        [MagicPropertyType.PoisonDamage]: {x: 30, y: 30, z: 3},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.PiercingAttack]: 50,
        [MagicPropertyType.AttackRating]: 50,
        [MagicPropertyType.Dexterity]: 20,
      },
    },
  },
  {
    id: ids.Leadcrow,
    name: 'Leadcrow',
    baseId: ids.LightCrossbow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 70,
        [MagicPropertyType.DeadlyStrike]: 25,
        [MagicPropertyType.AttackRating]: 40,
        [MagicPropertyType.PoisonResist]: 30,
        [MagicPropertyType.Life]: 10,
        [MagicPropertyType.Dexterity]: 10,
      },
    },
  },
  {
    id: ids.BurizaDoKyanon,
    name: 'Buriza-Do Kyanon',
    baseId: ids.Ballista,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.MaximumDamageByLevel]: 2.5,
        [MagicPropertyType.ColdDamage]: {x: 32, y: 196, z: 8},
        [MagicPropertyType.PiercingAttack]: 100,
        [MagicPropertyType.FreezesTarget]: 3,
        [MagicPropertyType.Defense]: [75, 150],
        [MagicPropertyType.Dexterity]: 35,
        [MagicPropertyType.IncreasedAttackSpeed]: 80,
      },
    },
  },
  {
    id: ids.DemonMachine,
    name: 'Demon Machine',
    baseId: ids.ChuKoNu,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 49,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 123,
        [MagicPropertyType.MaximumDamage]: 66,
        [MagicPropertyType.FiresExplosiveArrowsOrBolts]: 6,
        [MagicPropertyType.AttackRating]: 632,
        [MagicPropertyType.PiercingAttack]: 66,
        [MagicPropertyType.Defense]: 321,
        [MagicPropertyType.Mana]: 36,
      },
    },
  },
  {
    id: ids.LangerBriser,
    name: 'Langer Briser',
    baseId: ids.Arbalest,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 33,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [170, 200],
        [MagicPropertyType.MaximumDamage]: [10, 30],
        [MagicPropertyType.OpenWounds]: 33,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 212},
        [MagicPropertyType.Life]: 30,
        [MagicPropertyType.Knockback]: true,
        [MagicPropertyType.MagicFind]: [30, 60],
      },
    },
  },
  {
    id: ids.PusSpitter,
    name: 'Pus Spitter',
    baseId: ids.SiegeCrossbow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 36,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 220],
        [MagicPropertyType.PoisonDamage]: {x: 150, y: 150, z: 8},
        [MagicPropertyType.Requirements]: -60,
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.PoisonNova]: {x: 6, y: 9},
        },
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.LowerResist]: {x: 1, y: 4},
        },
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.AttackRatingByLevel]: 5,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSkills]: 2,
        },
      },
    },
  },
  {
    id: ids.GutSiphon,
    name: 'Gut Siphon',
    baseId: ids.DemonCrossbow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 71,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [160, 220],
        [MagicPropertyType.PiercingAttack]: 33,
        [MagicPropertyType.LifeStolenPerHit]: [12, 18],
        [MagicPropertyType.OpenWounds]: 33,
        [MagicPropertyType.SlowsTarget]: 25,
      },
    },
  },
  {
    id: ids.Hellrack,
    name: 'Hellrack',
    baseId: ids.ColossusCrossbow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 230],
        [MagicPropertyType.BonusToAttackRating]: [100, 150],
        [MagicPropertyType.FireDamage]: {x: 63, y: 324},
        [MagicPropertyType.LightningDamage]: {x: 63, y: 324},
        [MagicPropertyType.ColdDamage]: {x: 63, y: 324},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.ImmolationArrow]: {x: 18, y: 150},
        },
        [MagicPropertyType.Socketed]: 2,
      },
    },
  },
]);
