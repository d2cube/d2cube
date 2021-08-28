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
    id: ids.Bloodthief,
    name: 'Bloodthief',
    baseId: ids.Brandistock,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 17,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [50, 70],
        [MagicPropertyType.OpenWounds]: 35,
        [MagicPropertyType.LifeStolenPerHit]: [8, 12],
        [MagicPropertyType.Life]: 26,
        [MagicPropertyType.Strength]: 10,
      },
    },
  },
  {
    id: ids.LanceOfYaggai,
    name: 'Lance Of Yaggai',
    baseId: ids.Spetum,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 22,
      },
      magic: {
        [MagicPropertyType.LightningDamage]: {x: 1, y: 60},
        [MagicPropertyType.AllResistances]: 15,
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.AttackerTakesDamage]: 8,
      },
    },
  },
  {
    id: ids.Razortine,
    name: 'Razortine',
    baseId: ids.Trident,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [30, 50],
        [MagicPropertyType.SlowsTarget]: 25,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.TargetDefense]: -50,
        [MagicPropertyType.Dexterity]: 8,
        [MagicPropertyType.Strength]: 15,
      },
    },
  },
  {
    id: ids.TheDragonChang,
    name: 'The Dragon Chang',
    baseId: ids.Spear,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 8,
      },
      magic: {
        [MagicPropertyType.DamageToUndead]: 100,
        [MagicPropertyType.MinimumDamage]: 10,
        [MagicPropertyType.FireDamage]: {x: 3, y: 6},
        [MagicPropertyType.AttackRating]: 35,
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.TheTannrGorerod,
    name: 'The Tannr Gorerod',
    baseId: ids.Pike,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 27,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [80, 100],
        [MagicPropertyType.FireDamage]: {x: 23, y: 54},
        [MagicPropertyType.AttackRating]: 60,
        [MagicPropertyType.FireResist]: 15,
        [MagicPropertyType.MaximumFireResist]: 15,
        [MagicPropertyType.Life]: 30,
        [MagicPropertyType.LightRadius]: 3,
      },
    },
  },
  {
    id: ids.HoneSundan,
    name: 'Hone Sundan',
    baseId: ids.Yari,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 37,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [160, 200],
        [MagicPropertyType.AddDamage]: {x: 20, y: 40},
        [MagicPropertyType.CrushingBlow]: 45,
        [MagicPropertyType.RepairsDurability]: 10,
        [MagicPropertyType.Socketed]: 3,
      },
    },
  },
  {
    id: ids.KelpieSnare,
    name: 'Kelpie Snare',
    baseId: ids.Fuscina,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 33,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [140, 180],
        [MagicPropertyType.AddDamage]: {x: 30, y: 50},
        [MagicPropertyType.SlowsTarget]: 75,
        [MagicPropertyType.LifeByLevel]: 1.25,
        [MagicPropertyType.FireResist]: 50,
        [MagicPropertyType.Strength]: 10,
      },
    },
  },
  {
    id: ids.SoulfeastTine,
    name: 'Soulfeast Tine',
    baseId: ids.WarFork,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 190],
        [MagicPropertyType.AttackRating]: [150, 250],
        [MagicPropertyType.Requirements]: -20,
        [MagicPropertyType.LifeStolenPerHit]: 7,
        [MagicPropertyType.ManaStolenPerHit]: 7,
        [MagicPropertyType.SlowerStaminaDrain]: 20,
      },
    },
  },
  {
    id: ids.SpireOfHonor,
    name: 'Spire of Honor',
    baseId: ids.Lance,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 39,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 200],
        [MagicPropertyType.AddDamage]: {x: 20, y: 40},
        [MagicPropertyType.DamageToDemonsByLevel]: 1.5,
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.ReplenishLife]: 20,
        [MagicPropertyType.BonusToAttackRating]: 25,
        [MagicPropertyType.EnhancedDefense]: 25,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.PaladinCombatSkills]: 3,
        },
        [MagicPropertyType.LightRadius]: 3,
      },
    },
  },
  {
    id: ids.TheImpaler,
    name: 'The Impaler',
    baseId: ids.WarSpear,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 31,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [140, 170],
        [MagicPropertyType.OpenWounds]: 40,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.AttackRating]: 150,
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.Spell]: {
          [SkillType.Impale]: {x: 5, y: PlayerClassType.Amazon},
          [SkillType.PowerStrike]: {x: 3, y: PlayerClassType.Amazon},
        },
      },
    },
  },
  {
    id: ids.AriocsNeedle,
    name: "Arioc's Needle",
    baseId: ids.HyperionSpear,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 81,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 230],
        [MagicPropertyType.DeadlyStrike]: 50,
        [MagicPropertyType.PoisonDamage]: {x: 394, y: 394, z: 10},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.IgnoreTargetDefense]: true,
        [MagicPropertyType.AllSkillLevels]: [2, 4],
      },
    },
  },
  {
    id: ids.SteelPillar,
    name: 'Steel Pillar',
    baseId: ids.WarPike,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 69,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [210, 260],
        [MagicPropertyType.CrushingBlow]: 25,
        [MagicPropertyType.TargetDefense]: -20,
        [MagicPropertyType.IncreasedAttackSpeed]: 25,
        [MagicPropertyType.EnhancedDefense]: [50, 80],
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
  {
    id: ids.Viperfork,
    name: 'Viperfork',
    baseId: ids.Mancatcher,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 71,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [190, 240],
        [MagicPropertyType.AttackRating]: [200, 250],
        [MagicPropertyType.PoisonDamage]: {x: 325, y: 325, z: 10},
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.PoisonResist]: [30, 50],
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.PoisonExplosion]: {x: 9, y: 15},
        },
      },
    },
  },
]);
