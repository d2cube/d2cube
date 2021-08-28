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
    id: ids.PeltaLunata,
    name: 'Pelta Lunata',
    baseId: ids.Buckler,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 2,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [30, 40],
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
        [MagicPropertyType.FasterBlockRate]: 40,
        [MagicPropertyType.Energy]: 10,
        [MagicPropertyType.Vitality]: 10,
        [MagicPropertyType.Strength]: 2,
      },
    },
  },
  {
    id: ids.UmbralDisk,
    name: 'Umbral Disk',
    baseId: ids.SmallShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [40, 50],
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 30,
        [MagicPropertyType.HitBlindsTarget]: 0,
        [MagicPropertyType.Life]: 20,
        [MagicPropertyType.Dexterity]: 10,
        [MagicPropertyType.LightRadius]: -2,
        [MagicPropertyType.AddDurability]: [10, 15],
      },
    },
  },
  {
    id: ids.Stormguild,
    name: 'Stormguild',
    baseId: ids.LargeShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 13,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [50, 60],
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 30,
        [MagicPropertyType.LightningResist]: 25,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 6},
        [MagicPropertyType.AttackerTakesLightningDamage]: 3,
        [MagicPropertyType.MagicDamageReduced]: 1,
      },
    },
  },
  {
    id: ids.Steelclash,
    name: 'Steelclash',
    baseId: ids.KiteShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [60, 100],
        [MagicPropertyType.Defense]: 20,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 25,
        [MagicPropertyType.FasterBlockRate]: 20,
        [MagicPropertyType.AllResistances]: 15,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinSkills]: 1,
        },
        [MagicPropertyType.LightRadius]: 3,
        [MagicPropertyType.DamageReduced]: 3,
      },
    },
  },
  {
    id: ids.SwordbackHold,
    name: 'Swordback Hold',
    baseId: ids.SpikedShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [30, 60],
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
        [MagicPropertyType.OpenWounds]: 50,
        [MagicPropertyType.AttackerTakesDamage]: 10,
      },
    },
  },
  {
    id: ids.BverritKeep,
    name: 'Bverrit Keep',
    baseId: ids.TowerShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 19,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [80, 120],
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 10,
        [MagicPropertyType.FireResist]: 75,
        [MagicPropertyType.Strength]: 5,
        [MagicPropertyType.MagicDamageReduced]: 5,
      },
    },
  },
  {
    id: ids.WallOfTheEyeless,
    name: 'Wall of the Eyeless',
    baseId: ids.BoneShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.ManaStolenPerHit]: 3,
        [MagicPropertyType.EnhancedDefense]: [30, 40],
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.PoisonResist]: 20,
        [MagicPropertyType.ManaAfterKill]: 5,
      },
    },
  },
  {
    id: ids.TheWard,
    name: 'The Ward',
    baseId: ids.GothicShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 26,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 100,
        [MagicPropertyType.Defense]: 40,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 10,
        [MagicPropertyType.AllResistances]: [30, 50],
        [MagicPropertyType.MagicDamageReduced]: 2,
        [MagicPropertyType.Strength]: 10,
      },
    },
  },
  {
    id: ids.Visceratuant,
    name: 'Visceratuant',
    baseId: ids.Defender,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [100, 150],
        [MagicPropertyType.IncreasedChanceOfBlocking]: 30,
        [MagicPropertyType.FasterBlockRate]: 30,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.SorceressSkills]: 1,
        },
        [MagicPropertyType.AttackerTakesLightningDamage]: 10,
      },
    },
  },
  {
    id: ids.MosersBlessedCircle,
    name: "Moser's Blessed Circle",
    baseId: ids.RoundShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 31,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [180, 220],
        [MagicPropertyType.IncreasedChanceOfBlocking]: 25,
        [MagicPropertyType.FasterBlockRate]: 30,
        [MagicPropertyType.AllResistances]: 25,
        [MagicPropertyType.Socketed]: 2,
      },
    },
  },
  {
    id: ids.Stormchaser,
    name: 'Stormchaser',
    baseId: ids.Scutum,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 220],
        [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.Tornado]: {x: 5, y: 4},
          [SkillType.Blizzard]: {x: 6, y: 4},
        },
        [MagicPropertyType.FasterBlockRate]: 10,
        [MagicPropertyType.AttackRating]: 150,
        [MagicPropertyType.LightningResist]: 50,
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 60},
      },
    },
  },
  {
    id: ids.TiamatsRebuke,
    name: "Tiamat's Rebuke",
    baseId: ids.DragonShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 38,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [140, 200],
        [MagicPropertyType.ColdDamage]: {x: 27, y: 53, z: 6},
        [MagicPropertyType.FireDamage]: {x: 35, y: 95},
        [MagicPropertyType.LightningDamage]: {x: 1, y: 120},
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.Hydra]: {x: 6, y: 3},
          [SkillType.Nova]: {x: 7, y: 5},
          [SkillType.FrostNova]: {x: 9, y: 5},
        },
        [MagicPropertyType.AllResistances]: [25, 35],
      },
    },
  },
  {
    id: ids.LanceGuard,
    name: 'Lance Guard',
    baseId: ids.BarbedShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [70, 120],
        [MagicPropertyType.DamageTakenGoesToMana]: 15,
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.DeadlyStrike]: 20,
        [MagicPropertyType.Life]: 50,
        [MagicPropertyType.AttackerTakesDamage]: 47,
      },
    },
  },
  {
    id: ids.GerkesSanctuary,
    name: "Gerke's Sanctuary",
    baseId: ids.Pavise,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 44,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [180, 240],
        [MagicPropertyType.IncreasedChanceOfBlocking]: 30,
        [MagicPropertyType.AllResistances]: [20, 30],
        [MagicPropertyType.ReplenishLife]: 15,
        [MagicPropertyType.DamageReduced]: [11, 16],
        [MagicPropertyType.MagicDamageReduced]: [14, 18],
      },
    },
  },
  {
    id: ids.LidlessWall,
    name: 'Lidless Wall',
    baseId: ids.GrimShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.EnhancedDefense]: [80, 130],
        [MagicPropertyType.Energy]: 10,
        [MagicPropertyType.IncreaseMaximumMana]: 10,
        [MagicPropertyType.ManaAfterKill]: [3, 5],
        [MagicPropertyType.LightRadius]: 1,
      },
    },
  },
  {
    id: ids.RadamentsSphere,
    name: "Radament's Sphere",
    baseId: ids.AncientShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 50,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 200],
        [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
        [MagicPropertyType.FasterBlockRate]: 20,
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.PoisonNova]: {x: 5, y: 5},
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.PoisonExplosion]: {x: 6, y: 40},
        },
        [MagicPropertyType.PoisonResist]: 75,
        [MagicPropertyType.PoisonDamage]: {x: 80, y: 80, z: 4},
      },
    },
  },
  {
    id: ids.BlackoakShield,
    name: 'Blackoak Shield',
    baseId: ids.Luna,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 61,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 200],
        [MagicPropertyType.ColdAbsorbByLevel]: 0.625,
        [MagicPropertyType.LifeByLevel]: 1.25,
        [MagicPropertyType.DexterityByLevel]: 0.5,
        [MagicPropertyType.FasterBlockRate]: 50,
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.Weaken]: {x: 5, y: 4},
        },
        [MagicPropertyType.HalfFreezeDuration]: true,
      },
    },
  },
  {
    id: ids.Stormshield,
    name: 'Stormshield',
    baseId: ids.Monarch,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 73,
      },
      magic: {
        [MagicPropertyType.DefenseByLevel]: 3.75,
        [MagicPropertyType.IncreasedChanceOfBlocking]: 25,
        [MagicPropertyType.FasterBlockRate]: 35,
        [MagicPropertyType.DamageReducedPercentage]: 35,
        [MagicPropertyType.ColdResist]: 60,
        [MagicPropertyType.LightningResist]: 25,
        [MagicPropertyType.Strength]: 30,
        [MagicPropertyType.AttackerTakesLightningDamage]: 10,
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
  {
    id: ids.SpikeThorn,
    name: 'Spike Thorn',
    baseId: ids.BladeBarrier,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 150],
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.DamageReducedPercentage]: [15, 20],
        [MagicPropertyType.AttackRatingByLevel]: 1.375,
        [MagicPropertyType.Socketed]: 1,
      },
    },
  },
  {
    id: ids.MedusasGaze,
    name: "Medusa's Gaze",
    baseId: ids.Aegis,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 180],
        [MagicPropertyType.LifeStolenPerHit]: [5, 9],
        [MagicPropertyType.SlowsTarget]: 20,
        [MagicPropertyType.ColdResist]: [40, 80],
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.LowerResist]: {x: 7, y: 10},
        },
        [MagicPropertyType.ChanceToCastSpellOnDeath]: {
          [SkillType.Nova]: {x: 44},
        },
      },
    },
  },
  {
    id: ids.HeadHuntersGlory,
    name: "Head Hunter's Glory",
    baseId: ids.TrollNest,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 75,
      },
      magic: {
        [MagicPropertyType.Defense]: [320, 420],
        [MagicPropertyType.DefenseVsMissle]: [300, 350],
        [MagicPropertyType.FireResist]: [20, 30],
        [MagicPropertyType.PoisonResist]: [30, 40],
        [MagicPropertyType.LifeAfterKill]: [5, 7],
        [MagicPropertyType.Socketed]: [1, 3],
      },
    },
  },
  {
    id: ids.SpiritWard,
    name: 'Spirit Ward',
    baseId: ids.Ward,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 68,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [130, 180],
        [MagicPropertyType.FasterBlockRate]: 25,
        [MagicPropertyType.IncreasedChanceOfBlocking]: [20, 30],
        [MagicPropertyType.AllResistances]: [30, 40],
        [MagicPropertyType.ColdAbsorb]: [6, 11],
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.Fade]: {x: 8, y: 5},
        },
      },
    },
  },
]);
