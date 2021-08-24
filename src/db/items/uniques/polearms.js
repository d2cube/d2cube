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
    id: ids.DimoaksHew,
    name: "Dimoak's Hew",
    baseId: ids.Bardiche,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 8,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 100,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.Dexterity]: 15,
        [MagicPropertyType.Defense]: -8,
      },
    },
  },
  {
    id: ids.SoulHarvest,
    name: 'Soul Harvest',
    baseId: ids.Scythe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 19,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [50, 90],
        [MagicPropertyType.OpenWounds]: 30,
        [MagicPropertyType.ManaStolenPerHit]: 10,
        [MagicPropertyType.AttackRating]: 45,
        [MagicPropertyType.Energy]: 5,
        [MagicPropertyType.AllResistances]: 20,
      },
    },
  },
  {
    id: ids.Steelgoad,
    name: 'Steelgoad',
    baseId: ids.Voulge,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 80],
        [MagicPropertyType.DeadlyStrike]: 30,
        [MagicPropertyType.AttackRating]: 30,
        [MagicPropertyType.AllResistances]: 5,
        [MagicPropertyType.HitCausesMonsterToFlee]: 75,
      },
    },
  },
  {
    id: ids.TheBattlebranch,
    name: 'The Battlebranch',
    baseId: ids.Poleaxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [50, 70],
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.AttackRating]: [50, 100],
        [MagicPropertyType.LifeStolenPerHit]: 7,
        [MagicPropertyType.Dexterity]: 10,
      },
    },
  },
  {
    id: ids.TheGrimReaper,
    name: 'The Grim Reaper',
    baseId: ids.WarScythe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 20,
        [MagicPropertyType.MinimumDamage]: 15,
        [MagicPropertyType.DeadlyStrike]: 100,
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.PreventMonsterHeal]: true,
      },
    },
  },
  {
    id: ids.Woestave,
    name: 'Woestave',
    baseId: ids.Halberd,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [20, 40],
        [MagicPropertyType.OpenWounds]: 50,
        [MagicPropertyType.SlowsTarget]: 50,
        [MagicPropertyType.HitBlindsTarget]: 3,
        [MagicPropertyType.MonsterDefensePerHit]: -50,
        [MagicPropertyType.FreezesTarget]: 0,
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.LightRadius]: -3,
      },
    },
  },
  {
    id: ids.AthenasWrath,
    name: "Athena's Wrath",
    baseId: ids.BattleScythe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 180],
        [MagicPropertyType.MaximumDamageByLevel]: 1,
        [MagicPropertyType.LifeByLevel]: 1,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidSkills]: [1, 3],
        },
        [MagicPropertyType.Dexterity]: 15,
      },
    },
  },
  {
    id: ids.BlackleachBlade,
    name: 'Blackleach Blade',
    baseId: ids.Bill,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [100, 140],
        [MagicPropertyType.MaximumDamageByLevel]: 1.25,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Weaken]: {x: 5, y: 5},
        },
        [MagicPropertyType.Requirements]: -25,
        [MagicPropertyType.LightRadius]: -2,
        [MagicPropertyType.LifeStolenPerHit]: 8,
      },
    },
  },
  {
    id: ids.GrimsBurningDead,
    name: "Grim's Burning Dead",
    baseId: ids.GrimScythe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [140, 180],
        [MagicPropertyType.FireDamage]: {x: 131, y: 232},
        [MagicPropertyType.TargetDefense]: -50,
        [MagicPropertyType.EnhancedDefense]: 20,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSkills]: 3,
        },
        [MagicPropertyType.AttackRating]: [200, 250],
        [MagicPropertyType.FireResist]: 45,
        [MagicPropertyType.Requirements]: -50,
        [MagicPropertyType.AttackerTakesDamage]: 8,
      },
    },
  },
  {
    id: ids.HusoldalEvo,
    name: 'Husoldal Evo',
    baseId: ids.BecDeCorbin,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 44,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [160, 200],
        [MagicPropertyType.AddDamage]: {x: 20, y: 32},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.AttackRating]: [200, 250],
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.ReplenishLife]: 20,
      },
    },
  },
  {
    id: ids.PierreTombaleCouant,
    name: 'Pierre Tombale Couant',
    baseId: ids.Partizan,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 43,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [160, 220],
        [MagicPropertyType.AddDamage]: {x: 12, y: 20},
        [MagicPropertyType.DeadlyStrike]: 55,
        [MagicPropertyType.AttackRating]: [100, 200],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.BarbarianSkills]: 3,
        },
        [MagicPropertyType.ManaStolenPerHit]: 6,
        [MagicPropertyType.FasterHitRecovery]: 30,
      },
    },
  },
  {
    id: ids.TheMeatScraper,
    name: 'The Meat Scraper',
    baseId: ids.LochaberAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.OpenWounds]: 50,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.LifeStolenPerHit]: 10,
        [MagicPropertyType.MagicFind]: 25,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.BarbarianMasteries]: 3,
        },
      },
    },
  },
  {
    id: ids.Bonehew,
    name: 'Bonehew',
    baseId: ids.OgreAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 64,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [270, 320],
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.CorpseExplosion]: {x: 14, y: 30},
        },
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.BoneSpear]: {x: 16, y: 50},
        },
        [MagicPropertyType.Socketed]: 2,
      },
    },
  },
  {
    id: ids.Stormspire,
    name: 'Stormspire',
    baseId: ids.GiantThresher,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 250],
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 237},
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.ChainLightning]: {x: 5, y: 5},
          [SkillType.ChargedBolt]: {x: 20, y: 2},
        },
        [MagicPropertyType.LightningResist]: 50,
        [MagicPropertyType.Strength]: 10,
        [MagicPropertyType.AttackerTakesLightningDamage]: 27,
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
  {
    id: ids.TheReapersToll,
    name: "The Reaper's Toll",
    baseId: ids.Thresher,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 75,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [190, 240],
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.ColdDamage]: {x: 4, y: 44, z: [0, 2]},
        [MagicPropertyType.LifeStolenPerHit]: [11, 15],
        [MagicPropertyType.DeadlyStrike]: 33,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Decrepify]: {x: 1, y: 33},
        },
        [MagicPropertyType.Requirements]: -25,
      },
    },
  },
  {
    id: ids.TombReaver,
    name: 'Tomb Reaver',
    baseId: ids.CrypticAxe,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 84,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 280],
        [MagicPropertyType.DamageToUndead]: [150, 230],
        [MagicPropertyType.IncreasedAttackSpeed]: 60,
        [MagicPropertyType.AttackRatingAgainstUndead]: [250, 350],
        [MagicPropertyType.AllResistances]: [30, 50],
        [MagicPropertyType.ReanimateAs]: {x: 10},
        [MagicPropertyType.LifeAfterKill]: [10, 14],
        [MagicPropertyType.MagicFind]: [50, 80],
        [MagicPropertyType.LightRadius]: 4,
        [MagicPropertyType.Socketed]: [1, 3],
      },
    },
  },
]);
