import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
  PlayerClassType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Unique,
})([
  {
    id: ids.Lenymo,
    name: 'Lenymo',
    baseId: ids.Sash,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 7,
      },
      magic: {
        [MagicPropertyType.RegenerateMana]: 30,
        [MagicPropertyType.AllResistances]: 5,
        [MagicPropertyType.Mana]: 15,
        [MagicPropertyType.LightRadius]: 1,
      },
    },
  },
  {
    id: ids.Snakecord,
    name: 'Snakecord',
    baseId: ids.LightBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 12,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [20, 30],
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.ReplenishLife]: 5,
        [MagicPropertyType.PoisonResist]: 25,
        [MagicPropertyType.PoisonLengthReduced]: 50,
        [MagicPropertyType.PoisonDamage]: {x: 12, y: 12, z: 3},
      },
    },
  },
  {
    id: ids.Nightsmoke,
    name: 'Nightsmoke',
    baseId: ids.Belt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [30, 50],
        [MagicPropertyType.Defense]: 15,
        [MagicPropertyType.DamageTakenGoesToMana]: 50,
        [MagicPropertyType.DamageReduced]: 2,
        [MagicPropertyType.AllResistances]: 10,
        [MagicPropertyType.Mana]: 20,
      },
    },
  },
  {
    id: ids.Goldwrap,
    name: 'Goldwrap',
    baseId: ids.HeavyBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 27,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [40, 60],
        [MagicPropertyType.Defense]: 25,
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.MagicFind]: 30,
        [MagicPropertyType.ExtraGold]: [50, 80],
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.Bladebuckle,
    name: 'Bladebuckle',
    baseId: ids.PlatedBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [80, 100],
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.Dexterity]: 10,
        [MagicPropertyType.Strength]: 5,
        [MagicPropertyType.DamageReduced]: 3,
        [MagicPropertyType.AttackerTakesDamage]: 8,
      },
    },
  },
  {
    id: ids.StringOfEars,
    name: 'String of Ears',
    baseId: ids.DemonhideSash,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [150, 180],
        [MagicPropertyType.Defense]: 15,
        [MagicPropertyType.LifeStolenPerHit]: [6, 8],
        [MagicPropertyType.DamageReducedPercentage]: [10, 15],
        [MagicPropertyType.MagicDamageReduced]: [10, 15],
      },
    },
  },
  {
    id: ids.Razortail,
    name: 'Razortail',
    baseId: ids.SharkskinBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 32,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 150],
        [MagicPropertyType.Defense]: 15,
        [MagicPropertyType.MaximumDamage]: 10,
        [MagicPropertyType.PiercingAttack]: 33,
        [MagicPropertyType.Dexterity]: 15,
        [MagicPropertyType.AttackerTakesDamageByLevel]: 1,
      },
    },
  },
  {
    id: ids.GloomsTrap,
    name: "Gloom's Trap",
    baseId: ids.MeshBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 36,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [120, 150],
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.IncreaseMaximumMana]: 15,
        [MagicPropertyType.RegenerateMana]: 15,
        [MagicPropertyType.Vitality]: 15,
        [MagicPropertyType.LightRadius]: -3,
      },
    },
  },
  {
    id: ids.Snowclash,
    name: 'Snowclash',
    baseId: ids.BattleBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 42,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [130, 170],
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.Blizzard]: {x: [7, 20], y: 5},
        },
        [MagicPropertyType.ColdAbsorb]: 15,
        [MagicPropertyType.MaximumColdResist]: 15,
        [MagicPropertyType.ColdDamage]: {x: 13, y: 21, z: 3},
        [MagicPropertyType.Spell]: {
          [SkillType.ChillingArmor]: {x: 2, y: PlayerClassType.Sorceress},
          [SkillType.Blizzard]: {x: 2, y: PlayerClassType.Sorceress},
          [SkillType.GlacialSpike]: {x: 3, y: PlayerClassType.Sorceress},
        },
      },
    },
  },
  {
    id: ids.ThundergodsVigor,
    name: "Thundergod's Vigor",
    baseId: ids.WarBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 47,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [160, 200],
        [MagicPropertyType.LightningDamage]: {x: 1, y: 50},
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.FistOfTheHeavens]: {x: 7, y: 5},
        },
        [MagicPropertyType.LightningAbsorb]: 20,
        [MagicPropertyType.MaximumLightningResist]: 10,
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.Vitality]: 20,
        [MagicPropertyType.Spell]: {
          [SkillType.LightningFury]: {x: 3, y: PlayerClassType.Amazon},
          [SkillType.LightningStrike]: {x: 3, y: PlayerClassType.Amazon},
        },
      },
    },
  },
  {
    id: ids.ArachnidMesh,
    name: 'Arachnid Mesh',
    baseId: ids.SpiderwebSash,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 80,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [90, 120],
        [MagicPropertyType.SlowsTarget]: 10,
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.IncreaseMaximumMana]: 5,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Venom]: {x: 3, y: 11},
        },
      },
    },
  },
  {
    id: ids.NosferatusCoil,
    name: "Nosferatu's Coil",
    baseId: ids.VampirefangBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 51,
      },
      magic: {
        [MagicPropertyType.SlowsTarget]: 10,
        [MagicPropertyType.ManaAfterKill]: 2,
        [MagicPropertyType.LifeStolenPerHit]: [5, 7],
        [MagicPropertyType.Strength]: 15,
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.LightRadius]: -3,
      },
    },
  },
  {
    id: ids.VerdungosHeartyCord,
    name: "Verdungo's Hearty Cord",
    baseId: ids.MithrilCoil,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 63,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [90, 140],
        [MagicPropertyType.FasterHitRecovery]: 10,
        [MagicPropertyType.Vitality]: [30, 40],
        [MagicPropertyType.ReplenishLife]: [10, 13],
        [MagicPropertyType.MaximumStamina]: [100, 120],
        [MagicPropertyType.DamageReducedPercentage]: [10, 15],
      },
    },
  },
]);
