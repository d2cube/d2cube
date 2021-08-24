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
    id: ids.Ironstone,
    name: 'Ironstone',
    baseId: ids.WarHammer,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 27,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [100, 150],
        [MagicPropertyType.LightningDamage]: {x: 1, y: 10},
        [MagicPropertyType.AttackRating]: [100, 150],
        [MagicPropertyType.Strength]: 10,
      },
    },
  },
  {
    id: ids.Bonesnap,
    name: 'Bonesnap',
    baseId: ids.Maul,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 24,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 300],
        [MagicPropertyType.DamageToUndead]: 50,
        [MagicPropertyType.CrushingBlow]: 40,
        [MagicPropertyType.ColdResist]: 30,
        [MagicPropertyType.FireResist]: 30,
      },
    },
  },
  {
    id: ids.Steeldriver,
    name: 'Steeldriver',
    baseId: ids.GreatMaul,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 250],
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.Requirements]: -50,
        [MagicPropertyType.HealStamina]: 25,
      },
    },
  },
  {
    id: ids.Earthshaker,
    name: 'Earthshaker',
    baseId: ids.BattleHammer,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 43,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 180,
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.HitBlindsTarget]: 0,
        [MagicPropertyType.Knockback]: true,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Fissure]: {x: 7, y: 5},
        },
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidElementalSkills]: 3,
        },
      },
    },
  },
  {
    id: ids.BloodtreeStump,
    name: 'Bloodtree Stump',
    baseId: ids.WarClub,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 48,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 220],
        [MagicPropertyType.CrushingBlow]: 50,
        [MagicPropertyType.AllResistances]: 20,
        [MagicPropertyType.Strength]: 25,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.BarbarianMasteries]: 2,
        },
        [MagicPropertyType.Spell]: {
          [SkillType.MaceMastery]: {x: 3, y: PlayerClassType.Barbarian},
        },
      },
    },
  },
  {
    id: ids.TheGavelOfPain,
    name: 'The Gavel of Pain',
    baseId: ids.MartelDeFer,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [130, 160],
        [MagicPropertyType.AddDamage]: {x: 12, y: 30},
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.IronMaiden]: {x: 1, y: 5},
        },
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.AmplifyDamage]: {x: 1, y: 5},
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.AmplifyDamage]: {x: 8, y: 3},
        },
        [MagicPropertyType.AttackerTakesDamage]: 26,
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
  {
    id: ids.SchaefersHammer,
    name: "Schaefer's Hammer",
    baseId: ids.LegendaryMallet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 79,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [100, 130],
        [MagicPropertyType.MaximumDamageByLevel]: 2,
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.LightningDamage]: {x: 50, y: 200},
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.StaticField]: {x: 10, y: 20},
        },
        [MagicPropertyType.AttackRatingByLevel]: 8,
        [MagicPropertyType.LightningResist]: 75,
        [MagicPropertyType.Life]: 50,
        [MagicPropertyType.LightRadius]: 1,
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
  {
    id: ids.StoneCrusher,
    name: 'Stone Crusher',
    baseId: ids.LegendaryMallet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 68,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [280, 320],
        [MagicPropertyType.TargetDefense]: -25,
        [MagicPropertyType.CrushingBlow]: 40,
        [MagicPropertyType.MonsterDefensePerHit]: -100,
        [MagicPropertyType.Strength]: [20, 30],
      },
    },
  },
  {
    id: ids.Windhammer,
    name: 'Windhammer',
    baseId: ids.OgreMaul,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 68,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 230],
        [MagicPropertyType.CrushingBlow]: 50,
        [MagicPropertyType.IncreasedAttackSpeed]: 60,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Twister]: {x: 22, y: 33},
        },
      },
    },
  },
  {
    id: ids.EarthShifter,
    name: 'Earth Shifter',
    baseId: ids.ThunderMaul,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 69,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [250, 300],
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Fissure]: {x: 14, y: 25},
        },
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.CrushingBlow]: 33,
        [MagicPropertyType.FasterCastRate]: 10,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidElementalSkills]: 7,
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Volcano]: {x: 14, y: 30},
        },
      },
    },
  },
  {
    id: ids.TheCraniumBasher,
    name: 'The Cranium Basher',
    baseId: ids.ThunderMaul,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 87,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [200, 240],
        [MagicPropertyType.MinimumDamage]: 20,
        [MagicPropertyType.CrushingBlow]: 75,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.AmplifyDamage]: {x: 1, y: 4},
        },
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.AllResistances]: 25,
        [MagicPropertyType.Strength]: 25,
        [MagicPropertyType.MaximumDamage]: 20,
        [MagicPropertyType.Indestructible]: true,
      },
    },
  },
]);
