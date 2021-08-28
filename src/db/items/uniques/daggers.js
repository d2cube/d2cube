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
    id: ids.Gull,
    name: 'Gull',
    baseId: ids.Dagger,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 4,
      },
      magic: {
        [MagicPropertyType.AddDamage]: {x: 1, y: 15},
        [MagicPropertyType.MagicFind]: 100,
        [MagicPropertyType.Mana]: -5,
      },
    },
  },
  {
    id: ids.SpectralShard,
    name: 'Spectral Shard',
    baseId: ids.Blade,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.FasterCastRate]: 50,
        [MagicPropertyType.AttackRating]: 55,
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.Mana]: 50,
      },
    },
  },
  {
    id: ids.TheDiggler,
    name: 'The Diggler',
    baseId: ids.Dirk,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 11,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 50,
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.ColdResist]: 25,
        [MagicPropertyType.FireResist]: 25,
        [MagicPropertyType.Dexterity]: 10,
      },
    },
  },
  {
    id: ids.TheJadeTanDo,
    name: 'The Jade Tan Do',
    baseId: ids.Kris,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 19,
      },
      magic: {
        [MagicPropertyType.AttackRating]: [100, 150],
        [MagicPropertyType.PoisonDamage]: {x: 180, y: 180, z: 4},
        [MagicPropertyType.PoisonResist]: 95,
        [MagicPropertyType.MaximumPoisonResist]: 20,
        [MagicPropertyType.CannotBeFrozen]: true,
      },
    },
  },
  {
    id: ids.BlackbogsSharp,
    name: "Blackbog's Sharp",
    baseId: ids.Cinquedeas,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 38,
      },
      magic: {
        [MagicPropertyType.PoisonDamage]: {x: 488, y: 488, z: 10},
        [MagicPropertyType.AddDamage]: {x: 15, y: 45},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.SlowsTarget]: 50,
        [MagicPropertyType.Defense]: 50,
        [MagicPropertyType.Spell]: {
          [SkillType.PoisonNova]: {x: 4, y: PlayerClassType.Necromancer},
          [SkillType.PoisonExplosion]: {x: 4, y: PlayerClassType.Necromancer},
          [SkillType.PoisonDagger]: {x: 5, y: PlayerClassType.Necromancer},
        },
      },
    },
  },
  {
    id: ids.HeartCarver,
    name: 'Heart Carver',
    baseId: ids.Rondel,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 36,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [190, 240],
        [MagicPropertyType.AddDamage]: {x: 15, y: 35},
        [MagicPropertyType.DeadlyStrike]: 35,
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.Spell]: {
          [SkillType.GrimWard]: {x: 4, y: PlayerClassType.Barbarian},
          [SkillType.FindItem]: {x: 4, y: PlayerClassType.Barbarian},
          [SkillType.FindPotion]: {x: 4, y: PlayerClassType.Barbarian},
        },
      },
    },
  },
  {
    id: ids.Spineripper,
    name: 'Spineripper',
    baseId: ids.Poignard,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 32,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 240],
        [MagicPropertyType.AddDamage]: {x: 15, y: 27},
        [MagicPropertyType.IncreasedAttackSpeed]: 15,
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.LifeStolenPerHit]: 8,
        [MagicPropertyType.Dexterity]: 10,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSkills]: 1,
        },
      },
    },
  },
  {
    id: ids.Stormspike,
    name: 'Stormspike',
    baseId: ids.Stiletto,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 150,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 120},
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.ChargedBolt]: {x: 3, y: 25},
        },
        [MagicPropertyType.LightningResistByLevel]: 1,
        [MagicPropertyType.AttackerTakesLightningDamage]: 20,
      },
    },
  },
  {
    id: ids.Fleshripper,
    name: 'Fleshripper',
    baseId: ids.FangedKnife,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 68,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 300],
        [MagicPropertyType.TargetDefense]: -50,
        [MagicPropertyType.CrushingBlow]: 25,
        [MagicPropertyType.DeadlyStrike]: 33,
        [MagicPropertyType.OpenWounds]: 50,
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.SlowsTarget]: 20,
      },
    },
  },
  {
    id: ids.Ghostflame,
    name: 'Ghostflame',
    baseId: ids.LegendSpike,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 66,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [190, 240],
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.MagicDamage]: {x: 108, y: 108},
        [MagicPropertyType.ManaStolenPerHit]: [10, 15],
        [MagicPropertyType.LightRadius]: 2,
        [MagicPropertyType.Indestructible]: true,
        [MagicPropertyType.Ethereal]: true,
      },
    },
  },
  {
    id: ids.Wizardspike,
    name: 'Wizardspike',
    baseId: ids.BoneKnife,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 61,
      },
      magic: {
        [MagicPropertyType.ManaByLevel]: 2,
        [MagicPropertyType.FasterCastRate]: 50,
        [MagicPropertyType.RegenerateMana]: 15,
        [MagicPropertyType.IncreaseMaximumMana]: 15,
        [MagicPropertyType.AllResistances]: 75,
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
]);
