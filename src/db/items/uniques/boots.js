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
    id: ids.Hotspur,
    name: 'Hotspur',
    baseId: ids.Boots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [10, 20],
        [MagicPropertyType.Defense]: 6,
        [MagicPropertyType.FireResist]: 45,
        [MagicPropertyType.MaximumFireResist]: 15,
        [MagicPropertyType.FireDamage]: {x: 3, y: 6},
        [MagicPropertyType.Life]: 15,
      },
    },
  },
  {
    id: ids.Gorefoot,
    name: 'Gorefoot',
    baseId: ids.HeavyBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [20, 30],
        [MagicPropertyType.Defense]: 12,
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.ManaStolenPerHit]: 2,
        [MagicPropertyType.AttackerTakesDamage]: 2,
        [MagicPropertyType.Spell]: {
          [SkillType.Leap]: {x: 2, y: PlayerClassType.Barbarian},
        },
      },
    },
  },
  {
    id: ids.TreadsOfCthon,
    name: 'Treads of Cthon',
    baseId: ids.ChainBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [30, 40],
        [MagicPropertyType.Defense]: 12,
        [MagicPropertyType.SlowerStaminaDrain]: 50,
        [MagicPropertyType.FasterRunWalk]: 30,
        [MagicPropertyType.DefenseVsMissle]: 50,
        [MagicPropertyType.Life]: 10,
      },
    },
  },
  {
    id: ids.GoblinToe,
    name: 'Goblin Toe',
    baseId: ids.LightPlatedBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 22,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [50, 60],
        [MagicPropertyType.Defense]: 15,
        [MagicPropertyType.CrushingBlow]: 25,
        [MagicPropertyType.LightRadius]: -1,
        [MagicPropertyType.DamageReduced]: 1,
        [MagicPropertyType.MagicDamageReduced]: 1,
      },
    },
  },
  {
    id: ids.Tearhaunch,
    name: 'Tearhaunch',
    baseId: ids.Greaves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [60, 80],
        [MagicPropertyType.Defense]: 35,
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.Strength]: 5,
        [MagicPropertyType.Dexterity]: 5,
        [MagicPropertyType.Spell]: {
          [SkillType.Vigor]: {x: 2, y: PlayerClassType.Paladin},
        },
      },
    },
  },
  {
    id: ids.Infernostride,
    name: 'Infernostride',
    baseId: ids.DemonhideBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.Blaze]: {x: 8, y: 5},
        },
        [MagicPropertyType.EnhancedDefense]: [120, 150],
        [MagicPropertyType.Defense]: 15,
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.FireResist]: 30,
        [MagicPropertyType.MaximumFireResist]: 10,
        [MagicPropertyType.FireDamage]: {x: 12, y: 33},
        [MagicPropertyType.ExtraGold]: [40, 70],
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.Waterwalk,
    name: 'Waterwalk',
    baseId: ids.SharkskinBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 32,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [180, 210],
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.DefenseVsMissle]: 100,
        [MagicPropertyType.Dexterity]: 15,
        [MagicPropertyType.MaximumFireResist]: 5,
        [MagicPropertyType.HealStamina]: 50,
        [MagicPropertyType.MaximumStamina]: 40,
        [MagicPropertyType.Life]: [45, 65],
      },
    },
  },
  {
    id: ids.Silkweave,
    name: 'Silkweave',
    baseId: ids.MeshBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 36,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 190],
        [MagicPropertyType.FasterRunWalk]: 30,
        [MagicPropertyType.ManaAfterKill]: 5,
        [MagicPropertyType.IncreaseMaximumMana]: 10,
        [MagicPropertyType.DefenseVsMissle]: 200,
      },
    },
  },
  {
    id: ids.WarTraveler,
    name: 'War Traveler',
    baseId: ids.BattleBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 190],
        [MagicPropertyType.FasterRunWalk]: 25,
        [MagicPropertyType.Vitality]: 10,
        [MagicPropertyType.Strength]: 10,
        [MagicPropertyType.AddDamage]: {x: 15, y: 25},
        [MagicPropertyType.SlowerStaminaDrain]: 40,
        [MagicPropertyType.AttackerTakesDamage]: [5, 10],
        [MagicPropertyType.MagicFind]: [30, 50],
      },
    },
  },
  {
    id: ids.GoreRider,
    name: 'Gore Rider',
    baseId: ids.WarBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 47,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 200],
        [MagicPropertyType.FasterRunWalk]: 30,
        [MagicPropertyType.OpenWounds]: 10,
        [MagicPropertyType.CrushingBlow]: 15,
        [MagicPropertyType.DeadlyStrike]: 15,
        [MagicPropertyType.Requirements]: -25,
        [MagicPropertyType.MaximumStamina]: 20,
      },
    },
  },
  {
    id: ids.SandstormTrek,
    name: 'Sandstorm Trek',
    baseId: ids.ScarabshellBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 64,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [140, 170],
        [MagicPropertyType.FasterHitRecovery]: 20,
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.MaximumStaminaByLevel]: 1,
        [MagicPropertyType.Strength]: [10, 15],
        [MagicPropertyType.Vitality]: [10, 15],
        [MagicPropertyType.SlowerStaminaDrain]: 50,
        [MagicPropertyType.PoisonResist]: [40, 70],
        [MagicPropertyType.RepairsDurability]: 20,
      },
    },
  },
  {
    id: ids.Marrowwalk,
    name: 'Marrowwalk',
    baseId: ids.BoneweaveBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 64,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [170, 200],
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.Spell]: {
          [SkillType.SkeletonMastery]: {
            x: [1, 2],
            y: PlayerClassType.Necromancer,
          },
        },
        [MagicPropertyType.Strength]: [10, 20],
        [MagicPropertyType.Dexterity]: 17,
        [MagicPropertyType.RegenerateMana]: 10,
        [MagicPropertyType.HealStamina]: 10,
        [MagicPropertyType.HalfFreezeDuration]: true,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.BonePrison]: {x: 33, y: 13},
          [SkillType.LifeTap]: {x: 12, y: 10},
        },
      },
    },
  },
  {
    id: ids.ShadowDancer,
    name: 'Shadow Dancer',
    baseId: ids.MyrmidonGreaves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 71,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [70, 100],
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.FasterRunWalk]: 30,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.AssassinShadowDisciplines]: [1, 2],
        },
        [MagicPropertyType.Dexterity]: [15, 25],
        [MagicPropertyType.Requirements]: -20,
      },
    },
  },
]);
