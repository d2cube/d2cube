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
    id: ids.BigginsBonnet,
    name: "Biggin's Bonnet",
    baseId: ids.Cap,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 3,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 30,
        [MagicPropertyType.Defense]: 14,
        [MagicPropertyType.AttackRating]: 30,
        [MagicPropertyType.Mana]: 15,
        [MagicPropertyType.Life]: 15,
      },
    },
  },
  {
    id: ids.Tarnhelm,
    name: 'Tarnhelm',
    baseId: ids.SkullCap,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.MagicFind]: [25, 50],
        [MagicPropertyType.ExtraGold]: 75,
      },
    },
  },
  {
    id: ids.CoifOfGlory,
    name: 'Coif of Glory',
    baseId: ids.Helm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.AttackerTakesLightningDamage]: 7,
        [MagicPropertyType.HitBlindsTarget]: true,
        [MagicPropertyType.LightningResist]: 15,
        [MagicPropertyType.DefenseVsMissle]: 100,
      },
    },
  },
  {
    id: ids.Duskdeep,
    name: 'Duskdeep',
    baseId: ids.FullHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [30, 50],
        [MagicPropertyType.Defense]: [10, 20],
        [MagicPropertyType.DamageReduced]: 7,
        [MagicPropertyType.AllResistances]: 15,
        [MagicPropertyType.MaximumDamage]: 8,
        [MagicPropertyType.LightRadius]: -2,
      },
    },
  },
  {
    id: ids.Howltusk,
    name: 'Howltusk',
    baseId: ids.GreatHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 80,
        [MagicPropertyType.DamageTakenGoesToMana]: 35,
        [MagicPropertyType.MagicDamageReduced]: 2,
        [MagicPropertyType.AttackerTakesDamage]: 3,
        [MagicPropertyType.Knockback]: true,
        [MagicPropertyType.HitCausesMonsterToFlee]: 25,
      },
    },
  },
  {
    id: ids.TheFaceOfHorror,
    name: 'The Face of Horror',
    baseId: ids.Mask,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.DamageToUndead]: 50,
        [MagicPropertyType.HitCausesMonsterToFlee]: 50,
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.Strength]: 20,
      },
    },
  },
  {
    id: ids.UndeadCrown,
    name: 'Undead Crown',
    baseId: ids.Crown,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [30, 60],
        [MagicPropertyType.Defense]: 40,
        [MagicPropertyType.DamageToUndead]: 50,
        [MagicPropertyType.AttackRatingAgainstUndead]: [50, 100],
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.LifeStolenPerHit]: 5,
        [MagicPropertyType.PoisonResist]: 50,
        [MagicPropertyType.Spell]: {
          [SkillType.SkeletonMastery]: {x: 3, y: PlayerClassType.Necromancer},
        },
      },
    },
  },
  {
    id: ids.Wormskull,
    name: 'Wormskull',
    baseId: ids.BoneHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 21,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSkills]: 1,
        },
        [MagicPropertyType.PoisonDamage]: {x: 80, y: 80, z: 8},
        [MagicPropertyType.LifeStolenPerHit]: 5,
        [MagicPropertyType.PoisonResist]: 25,
        [MagicPropertyType.Mana]: 10,
      },
    },
  },
  {
    id: ids.PeasantCrown,
    name: 'Peasant Crown',
    baseId: ids.WarHat,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 100,
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterRunWalk]: 15,
        [MagicPropertyType.ReplenishLife]: [6, 12],
        [MagicPropertyType.Energy]: 20,
        [MagicPropertyType.Vitality]: 20,
      },
    },
  },
  {
    id: ids.Rockstopper,
    name: 'Rockstopper',
    baseId: ids.Sallet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 31,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 220],
        [MagicPropertyType.DamageReducedPercentage]: 10,
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.ColdResist]: [20, 40],
        [MagicPropertyType.FireResist]: [20, 50],
        [MagicPropertyType.LightningResist]: [20, 40],
        [MagicPropertyType.Vitality]: 15,
      },
    },
  },
  {
    id: ids.Stealskull,
    name: 'Stealskull',
    baseId: ids.Casque,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [200, 240],
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.FasterHitRecovery]: 10,
        [MagicPropertyType.LifeStolenPerHit]: 5,
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.MagicFind]: [30, 50],
      },
    },
  },
  {
    id: ids.DarksightHelm,
    name: 'Darksight Helm',
    baseId: ids.Basinet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 38,
      },
      magic: {
        [MagicPropertyType.DefenseByLevel]: 2,
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.DimVision]: {x: 3, y: 6},
        },
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.FireResist]: [20, 40],
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.LightRadius]: -4,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.CloakOfShadows]: {x: 5, y: 30},
        },
      },
    },
  },
  {
    id: ids.ValkyrieWing,
    name: 'Valkyrie Wing',
    baseId: ids.WingedHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 44,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 200],
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AmazonSkills]: [1, 2],
        },
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.ManaAfterKill]: [2, 4],
      },
    },
  },
  {
    id: ids.BlackthornsFace,
    name: "Blackthorn's Face",
    baseId: ids.DeathMask,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [180, 220],
        [MagicPropertyType.SlowsTarget]: 20,
        [MagicPropertyType.AttackerTakesLightningDamage]: 25,
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.LightningAbsorb]: 20,
        [MagicPropertyType.LightningResist]: 15,
      },
    },
  },
  {
    id: ids.CrownOfThieves,
    name: 'Crown of Thieves',
    baseId: ids.GrandCrown,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 49,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 200],
        [MagicPropertyType.LifeStolenPerHit]: [9, 12],
        [MagicPropertyType.FireResist]: 33,
        [MagicPropertyType.Mana]: 35,
        [MagicPropertyType.Life]: 50,
        [MagicPropertyType.Dexterity]: 25,
        [MagicPropertyType.ExtraGold]: [80, 100],
      },
    },
  },
  {
    id: ids.VampireGaze,
    name: 'Vampire Gaze',
    baseId: ids.GrimHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 100,
        [MagicPropertyType.ColdDamage]: {x: 6, y: 22, z: 4},
        [MagicPropertyType.SlowerStaminaDrain]: 15,
        [MagicPropertyType.LifeStolenPerHit]: [6, 8],
        [MagicPropertyType.ManaStolenPerHit]: [6, 8],
        [MagicPropertyType.DamageReducedPercentage]: [15, 20],
        [MagicPropertyType.MagicDamageReduced]: [10, 15],
      },
    },
  },
  {
    id: ids.HarlequinCrest,
    name: 'Harlequin Crest',
    baseId: ids.Shako,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 62,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 2,
        [MagicPropertyType.LifeByLevel]: 1.5,
        [MagicPropertyType.ManaByLevel]: 1.5,
        [MagicPropertyType.DamageReducedPercentage]: 10,
        [MagicPropertyType.MagicFind]: 50,
        [MagicPropertyType.AllAttributes]: 2,
      },
    },
  },
  {
    id: ids.SteelShade,
    name: 'Steel Shade',
    baseId: ids.Armet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 62,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [100, 130],
        [MagicPropertyType.ReplenishLife]: [10, 18],
        [MagicPropertyType.ManaStolenPerHit]: [4, 8],
        [MagicPropertyType.FireAbsorb]: [5, 11],
      },
    },
  },
  {
    id: ids.VeilOfSteel,
    name: 'Veil of Steel',
    baseId: ids.SpiredHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 73,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 60,
        [MagicPropertyType.Defense]: 140,
        [MagicPropertyType.AllResistances]: 50,
        [MagicPropertyType.Strength]: 15,
        [MagicPropertyType.Vitality]: 15,
        [MagicPropertyType.LightRadius]: -4,
      },
    },
  },
  {
    id: ids.NightwingsVeil,
    name: "Nightwing's Veil",
    baseId: ids.SpiredHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 67,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [90, 120],
        [MagicPropertyType.AllSkillLevels]: 2,
        [MagicPropertyType.ColdSkillDamage]: [8, 15],
        [MagicPropertyType.Dexterity]: [10, 20],
        [MagicPropertyType.ColdAbsorb]: [5, 9],
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.Requirements]: -50,
      },
    },
  },
  {
    id: ids.AndarielsVisage,
    name: "Andariel's Visage",
    baseId: ids.Demonhead,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 83,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [100, 150],
        [MagicPropertyType.AllSkillLevels]: 2,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.LifeStolenPerHit]: [8, 10],
        [MagicPropertyType.Strength]: [25, 30],
        [MagicPropertyType.MaximumPoisonResist]: 10,
        [MagicPropertyType.FireResist]: -30,
        [MagicPropertyType.PoisonResist]: 70,
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.PoisonNova]: {x: 15, y: 15},
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Venom]: {x: 3, y: 20},
        },
      },
    },
  },
  {
    id: ids.CrownOfAges,
    name: 'Crown of Ages',
    baseId: ids.Corona,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 82,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 50,
        [MagicPropertyType.Defense]: [100, 150],
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.DamageReducedPercentage]: [10, 15],
        [MagicPropertyType.AllResistances]: [20, 30],
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.Socketed]: [1, 2],
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
  {
    id: ids.GiantSkull,
    name: 'Giant Skull',
    baseId: ids.BoneVisage,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.Defense]: [250, 320],
        [MagicPropertyType.CrushingBlow]: 10,
        [MagicPropertyType.Knockback]: true,
        [MagicPropertyType.Strength]: [25, 35],
        [MagicPropertyType.Socketed]: [1, 2],
      },
    },
  },
]);
