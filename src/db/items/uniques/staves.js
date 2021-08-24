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
    id: ids.BaneAsh,
    name: 'Bane Ash',
    baseId: ids.ShortStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [50, 60],
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.Mana]: 30,
        [MagicPropertyType.FireResist]: 50,
        [MagicPropertyType.FireDamage]: {x: 4, y: 6},
        [MagicPropertyType.Spell]: {
          [SkillType.Warmth]: {x: 2, y: PlayerClassType.Sorceress},
          [SkillType.FireBolt]: {x: 5, y: PlayerClassType.Sorceress},
        },
      },
    },
  },
  {
    id: ids.SerpentLord,
    name: 'Serpent Lord',
    baseId: ids.LongStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [30, 40],
        [MagicPropertyType.PoisonDamage]: {x: 12, y: 12, z: 3},
        [MagicPropertyType.ManaStolenPerHit]: 100,
        [MagicPropertyType.TargetDefense]: -50,
        [MagicPropertyType.Mana]: 10,
        [MagicPropertyType.PoisonResist]: 50,
        [MagicPropertyType.LightRadius]: -1,
      },
    },
  },
  {
    id: ids.SpireOfLazarus,
    name: 'Spire of Lazarus',
    baseId: ids.GnarledStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
      magic: {
        [MagicPropertyType.LightningDamage]: {x: 1, y: 28},
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: 1,
        },
        [MagicPropertyType.Spell]: {
          [SkillType.ChainLightning]: {x: 1, y: PlayerClassType.Sorceress},
          [SkillType.Lightning]: {x: 2, y: PlayerClassType.Sorceress},
          [SkillType.StaticField]: {x: 3, y: PlayerClassType.Sorceress},
        },
        [MagicPropertyType.RegenerateMana]: 43,
        [MagicPropertyType.Mana]: 15,
        [MagicPropertyType.DamageReduced]: 5,
        [MagicPropertyType.LightningResist]: 75,
      },
    },
  },
  {
    id: ids.TheSalamander,
    name: 'The Salamander',
    baseId: ids.BattleStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 21,
      },
      magic: {
        [MagicPropertyType.FireDamage]: {x: 15, y: 32},
        [MagicPropertyType.FireResist]: 30,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.FireSkills]: 2,
        },
        [MagicPropertyType.Spell]: {
          [SkillType.FireWall]: {x: 1, y: PlayerClassType.Sorceress},
          [SkillType.FireBall]: {x: 2, y: PlayerClassType.Sorceress},
          [SkillType.Warmth]: {x: 3, y: PlayerClassType.Sorceress},
        },
      },
    },
  },
  {
    id: ids.TheIronJangBong,
    name: 'The Iron Jang Bong',
    baseId: ids.WarStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 100,
        [MagicPropertyType.BonusToAttackRating]: 50,
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: 2,
        },
        [MagicPropertyType.Spell]: {
          [SkillType.Nova]: {x: 2, y: PlayerClassType.Sorceress},
          [SkillType.Blaze]: {x: 2, y: PlayerClassType.Sorceress},
          [SkillType.FrostNova]: {x: 3, y: PlayerClassType.Sorceress},
        },
      },
    },
  },
  {
    id: ids.Razorswitch,
    name: 'Razorswitch',
    baseId: ids.JoStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterCastRate]: 30,
        [MagicPropertyType.MagicDamageReduced]: 15,
        [MagicPropertyType.AllResistances]: 50,
        [MagicPropertyType.AttackerTakesDamage]: 15,
        [MagicPropertyType.Mana]: 175,
        [MagicPropertyType.Life]: 80,
      },
    },
  },
  {
    id: ids.Ribcracker,
    name: 'Ribcracker',
    baseId: ids.Quaterstaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 31,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 300],
        [MagicPropertyType.AddDamage]: {x: 30, y: 65},
        [MagicPropertyType.CrushingBlow]: 50,
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.FasterHitRecovery]: 50,
        [MagicPropertyType.EnhancedDefense]: 100,
        [MagicPropertyType.Defense]: 100,
        [MagicPropertyType.Dexterity]: 15,
      },
    },
  },
  {
    id: ids.ChromaticIre,
    name: 'Chromatic Ire',
    baseId: ids.CedarStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: 3,
        },
        [MagicPropertyType.IncreaseMaximumLife]: [20, 25],
        [MagicPropertyType.AllResistances]: [20, 40],
        [MagicPropertyType.AttackerTakesLightningDamage]: 20,
        [MagicPropertyType.Spell]: {
          [SkillType.ColdMastery]: {x: 1, y: PlayerClassType.Sorceress},
          [SkillType.LightningMastery]: {x: 1, y: PlayerClassType.Sorceress},
          [SkillType.FireMastery]: {x: 1, y: PlayerClassType.Sorceress},
        },
      },
    },
  },
  {
    id: ids.Warpspear,
    name: 'Warpspear',
    baseId: ids.GothicStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 39,
      },
      magic: {
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.DefenseVsMissle]: 250,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: 3,
        },
        [MagicPropertyType.Spell]: {
          [SkillType.EnergyShield]: {x: 3, y: PlayerClassType.Sorceress},
          [SkillType.Teleport]: {x: 3, y: PlayerClassType.Sorceress},
          [SkillType.Telekinesis]: {x: 3, y: PlayerClassType.Sorceress},
        },
      },
    },
  },
  {
    id: ids.SkullCollector,
    name: 'Skull Collector',
    baseId: ids.RuneStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.ManaAfterKill]: 20,
        [MagicPropertyType.IncreaseMaximumMana]: 20,
        [MagicPropertyType.MagicFindByLevel]: 1,
        [MagicPropertyType.AllSkillLevels]: 2,
      },
    },
  },
  {
    id: ids.OndalsWisdom,
    name: "Ondal's Wisdom",
    baseId: ids.ElderStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 18,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: [2, 4],
        [MagicPropertyType.FasterCastRate]: 45,
        [MagicPropertyType.Defense]: [450, 550],
        [MagicPropertyType.Energy]: [40, 50],
        [MagicPropertyType.MagicDamageReduced]: [5, 8],
        [MagicPropertyType.Experience]: 5,
      },
    },
  },
  {
    id: ids.MangSongsLesson,
    name: "Mang Song's Lesson",
    baseId: ids.ArchonStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 82,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 5,
        [MagicPropertyType.FasterCastRate]: 30,
        [MagicPropertyType.LowerColdResist]: [-7, -15],
        [MagicPropertyType.LowerFireResist]: [-7, -15],
        [MagicPropertyType.LowerLightningResist]: [-7, -15],
        [MagicPropertyType.RegenerateMana]: 10,
      },
    },
  },
]);
