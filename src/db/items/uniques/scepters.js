import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
  PlayerClassType,
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
    id: ids.KnellStriker,
    name: 'Knell Striker',
    baseId: ids.Scepter,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 80],
        [MagicPropertyType.CrushingBlow]: 25,
        [MagicPropertyType.AttackRating]: 35,
        [MagicPropertyType.PoisonResist]: 20,
        [MagicPropertyType.FireResist]: 20,
        [MagicPropertyType.Mana]: 15,
      },
    },
  },
  {
    id: ids.Rusthandle,
    name: 'Rusthandle',
    baseId: ids.GrandScepter,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [50, 60],
        [MagicPropertyType.DamageToUndead]: [50, 60],
        [MagicPropertyType.AddDamage]: {x: 3, y: 7},
        [MagicPropertyType.LifeStolenPerHit]: 8,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinSkills]: 1,
        },
        [MagicPropertyType.MagicDamageReduced]: 1,
        [MagicPropertyType.Spell]: {
          [SkillType.Vengeance]: {x: [1, 3], y: PlayerClassType.Paladin},
          [SkillType.Thorns]: {x: 3, y: PlayerClassType.Paladin},
        },
      },
    },
  },
  {
    id: ids.Stormeye,
    name: 'Stormeye',
    baseId: ids.WarScepter,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 30,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [80, 120],
        [MagicPropertyType.ColdDamage]: {x: 3, y: 5, z: 3},
        [MagicPropertyType.LightningDamage]: {x: 1, y: 6},
        [MagicPropertyType.ReplenishLife]: 10,
        [MagicPropertyType.Spell]: {
          [SkillType.FistOfTheHeavens]: {x: 1, y: PlayerClassType.Paladin},
          [SkillType.HolyShock]: {x: 3, y: PlayerClassType.Paladin},
          [SkillType.ResistLightning]: {x: [3, 5], y: PlayerClassType.Paladin},
        },
      },
    },
  },
  {
    id: ids.ZakarumsHand,
    name: "Zakarum's Hand",
    baseId: ids.RuneScepter,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 37,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 220],
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Blizzard]: {x: 5, y: 6},
        },
        [MagicPropertyType.ManaStolenPerHit]: 8,
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.RegenerateMana]: 10,
        [MagicPropertyType.HealStamina]: 15,
        [MagicPropertyType.Spell]: {
          [SkillType.HolyShock]: {x: 2, y: PlayerClassType.Paladin},
          [SkillType.HolyFreeze]: {x: 2, y: PlayerClassType.Paladin},
        },
      },
    },
  },
  {
    id: ids.TheFetidSprinkler,
    name: 'The Fetid Sprinkler',
    baseId: ids.HolyWaterSprinkler,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 38,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [160, 190],
        [MagicPropertyType.AddDamage]: {x: 15, y: 25},
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinSkills]: 2,
        },
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Decrepify]: {x: 1, y: 5},
          [SkillType.Confuse]: {x: 1, y: 10},
        },
        [MagicPropertyType.PoisonDamage]: {x: 160, y: 160, z: 4},
        [MagicPropertyType.AttackRating]: [150, 200],
      },
    },
  },
  {
    id: ids.HandOfBlessedLight,
    name: 'Hand of Blessed Light',
    baseId: ids.DivineScepter,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [130, 160],
        [MagicPropertyType.AddDamage]: {x: 20, y: 45},
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinSkills]: 2,
        },
        [MagicPropertyType.BonusToAttackRating]: 100,
        [MagicPropertyType.RegenerateMana]: 15,
        [MagicPropertyType.Defense]: 50,
        [MagicPropertyType.LightRadius]: 4,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.FistOfTheHeavens]: {x: 4, y: 5},
        },
        [MagicPropertyType.Spell]: {
          [SkillType.FistOfTheHeavens]: {x: 2, y: PlayerClassType.Paladin},
          [SkillType.HolyBolt]: {x: 4, y: PlayerClassType.Paladin},
        },
      },
    },
  },
  {
    id: ids.HeavensLight,
    name: "Heaven's Light",
    baseId: ids.MightyScepter,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 61,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [250, 300],
        [MagicPropertyType.TargetDefense]: -33,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.CrushingBlow]: 33,
        [MagicPropertyType.LifeAfterDemonKill]: [15, 20],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinSkills]: [2, 3],
        },
        [MagicPropertyType.LightRadius]: 3,
        [MagicPropertyType.Socketed]: [1, 2],
      },
    },
  },
  {
    id: ids.TheRedeemer,
    name: 'The Redeemer',
    baseId: ids.MightyScepter,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 72,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [250, 300],
        [MagicPropertyType.DamageToDemons]: [200, 250],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinSkills]: 2,
        },
        [MagicPropertyType.TargetDefense]: -33,
        [MagicPropertyType.Damage]: [60, 120],
        [MagicPropertyType.LightRadius]: 3,
        [MagicPropertyType.Requirements]: -60,
        [MagicPropertyType.Spell]: {
          [SkillType.Redemption]: {x: [2, 4], y: PlayerClassType.Paladin},
          [SkillType.HolyBolt]: {x: [2, 4], y: PlayerClassType.Paladin},
        },
      },
    },
  },
  {
    id: ids.AstreonsIronWard,
    name: "Astreon's Iron Ward",
    baseId: ids.Caduceus,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 66,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [240, 290],
        [MagicPropertyType.Damage]: [40, 85],
        [MagicPropertyType.MagicDamage]: {x: 80, y: 240},
        [MagicPropertyType.CrushingBlow]: 33,
        [MagicPropertyType.SlowsTarget]: 25,
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.BonusToAttackRating]: [150, 200],
        [MagicPropertyType.DamageReduced]: [4, 7],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinCombatSkills]: [2, 4],
        },
      },
    },
  },
]);
