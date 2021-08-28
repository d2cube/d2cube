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
    id: ids.TheHandOfBroc,
    name: 'The Hand of Broc',
    baseId: ids.LeatherGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [10, 20],
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.LifeStolenPerHit]: 3,
        [MagicPropertyType.ManaStolenPerHit]: 3,
        [MagicPropertyType.PoisonResist]: 10,
        [MagicPropertyType.Mana]: 20,
      },
    },
  },
  {
    id: ids.Bloodfist,
    name: 'Bloodfist',
    baseId: ids.HeavyGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [10, 20],
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.Life]: 40,
        [MagicPropertyType.MinimumDamage]: 5,
      },
    },
  },
  {
    id: ids.ChanceGuards,
    name: 'Chance Guards',
    baseId: ids.ChainGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [20, 30],
        [MagicPropertyType.Defense]: 15,
        [MagicPropertyType.AttackRating]: 25,
        [MagicPropertyType.MagicFind]: [25, 40],
        [MagicPropertyType.ExtraGold]: 200,
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.Magefist,
    name: 'Magefist',
    baseId: ids.LightGauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 23,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [20, 30],
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.FireSkills]: 1,
        },
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.RegenerateMana]: 25,
        [MagicPropertyType.FireDamage]: {x: 1, y: 6},
      },
    },
  },
  {
    id: ids.Frostburn,
    name: 'Frostburn',
    baseId: ids.Gauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [10, 20],
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.EnhancedDamage]: 5,
        [MagicPropertyType.IncreaseMaximumMana]: 40,
        [MagicPropertyType.ColdDamage]: {x: 1, y: 6, z: 2},
      },
    },
  },
  {
    id: ids.VenomGrip,
    name: 'Venom Grip',
    baseId: ids.DemonhideGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [130, 160],
        [MagicPropertyType.Defense]: [15, 25],
        [MagicPropertyType.LifeStolenPerHit]: 5,
        [MagicPropertyType.CrushingBlow]: 5,
        [MagicPropertyType.PoisonDamage]: {x: 60, y: 60, z: 4},
        [MagicPropertyType.MaximumPoisonResist]: 5,
        [MagicPropertyType.PoisonResist]: 30,
      },
    },
  },
  {
    id: ids.Gravepalm,
    name: 'Gravepalm',
    baseId: ids.SharkskinGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 32,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [140, 180],
        [MagicPropertyType.DamageToUndead]: [100, 200],
        [MagicPropertyType.AttackRatingAgainstUndead]: [100, 200],
        [MagicPropertyType.Energy]: 10,
        [MagicPropertyType.Strength]: 10,
      },
    },
  },
  {
    id: ids.Ghoulhide,
    name: 'Ghoulhide',
    baseId: ids.HeavyBracers,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 36,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 190],
        [MagicPropertyType.AttackRatingAgainstUndeadByLevel]: 8,
        [MagicPropertyType.DamageToUndeadByLevel]: 2,
        [MagicPropertyType.ManaStolenPerHit]: [4, 5],
        [MagicPropertyType.Life]: 20,
      },
    },
  },
  {
    id: ids.LavaGout,
    name: 'Lava Gout',
    baseId: ids.BattleGauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 200],
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Enchant]: {x: 10, y: 2},
        },
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.FireDamage]: {x: 13, y: 46},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.FireResist]: 24,
      },
    },
  },
  {
    id: ids.Hellmouth,
    name: 'Hellmouth',
    baseId: ids.WarGauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 47,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 200],
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Firestorm]: {x: 12, y: 4},
          [SkillType.Meteor]: {x: 4, y: 2},
        },
        [MagicPropertyType.FireAbsorb]: 15,
        [MagicPropertyType.FireDamage]: {x: 15, y: 72},
      },
    },
  },
  {
    id: ids.DraculsGrasp,
    name: "Dracul's Grasp",
    baseId: ids.VampireboneGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.LifeTap]: {x: 10, y: 5},
        },
        [MagicPropertyType.EnhancedDefense]: [90, 120],
        [MagicPropertyType.Strength]: [10, 15],
        [MagicPropertyType.LifeAfterKill]: [5, 10],
        [MagicPropertyType.OpenWounds]: 25,
        [MagicPropertyType.LifeStolenPerHit]: [7, 10],
      },
    },
  },
  {
    id: ids.SoulDrainer,
    name: 'Soul Drainer',
    baseId: ids.Vambraces,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 74,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [90, 120],
        [MagicPropertyType.ManaStolenPerHit]: [4, 7],
        [MagicPropertyType.LifeStolenPerHit]: [4, 7],
        [MagicPropertyType.MonsterDefensePerHit]: -50,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Weaken]: {x: 3, y: 8},
        },
      },
    },
  },
  {
    id: ids.Steelrend,
    name: 'Steelrend',
    baseId: ids.OgreGauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.Defense]: [170, 210],
        [MagicPropertyType.EnhancedDamage]: [30, 60],
        [MagicPropertyType.CrushingBlow]: 10,
        [MagicPropertyType.Strength]: [15, 20],
      },
    },
  },
]);
