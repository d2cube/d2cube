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
    id: ids.TorchOfIro,
    name: 'Torch of Iro',
    baseId: ids.Wand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.FireDamage]: {x: 5, y: 9},
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSkills]: 1,
        },
        [MagicPropertyType.Energy]: 10,
        [MagicPropertyType.RegenerateMana]: 5,
        [MagicPropertyType.LifeStolenPerHit]: 6,
        [MagicPropertyType.LightRadius]: 3,
      },
    },
  },
  {
    id: ids.Maelstrom,
    name: 'Maelstrom',
    baseId: ids.YewWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.LightningDamage]: {x: 1, y: 9},
        [MagicPropertyType.Mana]: 13,
        [MagicPropertyType.FasterCastRate]: 30,
        [MagicPropertyType.LightningResist]: 40,
        [MagicPropertyType.Spell]: {
          [SkillType.IronMaiden]: {x: [1, 3], y: PlayerClassType.Necromancer},
          [SkillType.AmplifyDamage]: {
            x: [1, 3],
            y: PlayerClassType.Necromancer,
          },
          [SkillType.Terror]: {x: [1, 3], y: PlayerClassType.Necromancer},
          [SkillType.CorpseExplosion]: {
            x: [1, 3],
            y: PlayerClassType.Necromancer,
          },
        },
      },
    },
  },
  {
    id: ids.Gravenspine,
    name: 'Gravenspine',
    baseId: ids.BoneWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSkills]: 2,
        },
        [MagicPropertyType.ColdDamage]: {x: 4, y: 8, z: 3},
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.Mana]: [25, 50],
        [MagicPropertyType.Dexterity]: 10,
        [MagicPropertyType.Strength]: 10,
      },
    },
  },
  {
    id: ids.UmesLament,
    name: "Ume's Lament",
    baseId: ids.GrimWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSkills]: 2,
        },
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.Mana]: 40,
        [MagicPropertyType.HitCausesMonsterToFlee]: 50,
        [MagicPropertyType.Spell]: {
          [SkillType.Decrepify]: {x: 2, y: PlayerClassType.Necromancer},
          [SkillType.Terror]: {x: 3, y: PlayerClassType.Necromancer},
        },
      },
    },
  },
  {
    id: ids.SuicideBranch,
    name: 'Suicide Branch',
    baseId: ids.GrimWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 33,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterCastRate]: 50,
        [MagicPropertyType.IncreaseMaximumMana]: 10,
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.Life]: 40,
        [MagicPropertyType.AttackerTakesDamage]: 25,
      },
    },
  },
  {
    id: ids.CarinShard,
    name: 'Carin Shard',
    baseId: ids.PetrifiedWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.ManaByLevel]: 1.25,
        [MagicPropertyType.LifeByLevel]: 1.25,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSummoningSkills]: 2,
          [SkillSetType.NecromancerSkills]: 1,
        },
        [MagicPropertyType.FasterCastRate]: 10,
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.ReplenishLife]: 5,
      },
    },
  },
  {
    id: ids.ArmOfKingLeoric,
    name: 'Arm of King Leoric',
    baseId: ids.TombWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 36,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.BonePrison]: {x: 2, y: 10},
          [SkillType.BoneSpirit]: {x: 10, y: 5},
        },
        [MagicPropertyType.ManaByLevel]: 1.25,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerPoisonAndBoneSkills]: 2,
          [SkillSetType.NecromancerSummoningSkills]: 2,
        },
        [MagicPropertyType.FasterCastRate]: 10,
        [MagicPropertyType.Spell]: {
          [SkillType.Terror]: {x: 2, y: PlayerClassType.Necromancer},
          [SkillType.RaiseSkeletalMage]: {x: 2, y: PlayerClassType.Necromancer},
          [SkillType.RaiseSkeleton]: {x: 3, y: PlayerClassType.Necromancer},
          [SkillType.SkeletonMastery]: {x: 3, y: PlayerClassType.Necromancer},
        },
      },
    },
  },
  {
    id: ids.BlackhandKey,
    name: 'Blackhand Key',
    baseId: ids.GraveWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerCurses]: 1,
          [SkillSetType.NecromancerSkills]: 2,
        },
        [MagicPropertyType.DamageTakenGoesToMana]: 20,
        [MagicPropertyType.FasterCastRate]: 30,
        [MagicPropertyType.FireResist]: 37,
        [MagicPropertyType.Life]: 50,
        [MagicPropertyType.LightRadius]: -2,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.GrimWard]: {x: 13, y: 30},
        },
      },
    },
  },
  {
    id: ids.Boneshade,
    name: 'Boneshade',
    baseId: ids.LichWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 79,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerSkills]: 2,
        },
        [MagicPropertyType.FasterCastRate]: 25,
        [MagicPropertyType.Spell]: {
          [SkillType.BoneSpirit]: {x: [1, 2], y: PlayerClassType.Necromancer},
          [SkillType.BoneSpear]: {x: [2, 3], y: PlayerClassType.Necromancer},
          [SkillType.BoneWall]: {x: [2, 3], y: PlayerClassType.Necromancer},
          [SkillType.BoneArmor]: {x: [4, 5], y: PlayerClassType.Necromancer},
          [SkillType.Teeth]: {x: [4, 5], y: PlayerClassType.Necromancer},
        },
      },
    },
  },
  {
    id: ids.DeathsWeb,
    name: "Death's Web",
    baseId: ids.UnearthedWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 66,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 2,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.NecromancerPoisonAndBoneSkills]: [1, 2],
        },
        [MagicPropertyType.LowerPoisonResist]: [-40, -50],
        [MagicPropertyType.ManaAfterKill]: [7, 12],
        [MagicPropertyType.LifeAfterKill]: [7, 12],
      },
    },
  },
]);
