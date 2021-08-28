import {
  BasePropertyType,
  ItemQualityType,
  MagicPropertyType,
  PlayerClassType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.Bloodrise,
    name: 'Bloodrise',
    baseId: ids.MorningStar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 120,
        [MagicPropertyType.OpenWounds]: 25,
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.LifeStolenPerHit]: 5,
        [MagicPropertyType.BonusToAttackRating]: 50,
        [MagicPropertyType.Spell]: {
          [SkillType.Sacrifice]: {x: 3, y: PlayerClassType.Paladin},
        },
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.Crushflange,
    name: 'Crushflange',
    baseId: ids.Mace,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [50, 60],
        [MagicPropertyType.CrushingBlow]: 33,
        [MagicPropertyType.Knockback]: true,
        [MagicPropertyType.FireResist]: 50,
        [MagicPropertyType.Strength]: 15,
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.TheGeneralsTanDoLiGa,
    name: "The General's Tan Do Li Ga",
    baseId: ids.Flail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 21,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [50, 60],
        [MagicPropertyType.AddDamage]: {x: 1, y: 20},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.ManaStolenPerHit]: 5,
        [MagicPropertyType.SlowsTarget]: 50,
        [MagicPropertyType.Defense]: 25,
      },
    },
  },
  {
    id: ids.BaezilsVortex,
    name: "Baezil's Vortex",
    baseId: ids.Knout,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [160, 200],
        [MagicPropertyType.LightningDamage]: {x: 1, y: 150},
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Nova]: {x: 8, y: 5},
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Nova]: {x: 15, y: 80},
        },
        [MagicPropertyType.LightningResist]: 25,
        [MagicPropertyType.Mana]: 100,
      },
    },
  },
  {
    id: ids.Moonfall,
    name: 'Moonfall',
    baseId: ids.JaggedStar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [120, 150],
        [MagicPropertyType.AddDamage]: {x: 10, y: 15},
        [MagicPropertyType.FireDamage]: {x: 55, y: 115},
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Meteor]: {x: 6, y: 5},
        },
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Meteor]: {x: 11, y: 60},
        },
        [MagicPropertyType.MagicDamageReduced]: [9, 12],
        [MagicPropertyType.LightRadius]: 2,
      },
    },
  },
  {
    id: ids.SureshrillFrost,
    name: 'Sureshrill Frost',
    baseId: ids.FlangedMace,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 39,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 180],
        [MagicPropertyType.AddDamage]: {x: 5, y: 10},
        [MagicPropertyType.ColdDamage]: {x: 63, y: 112, z: 5},
        [MagicPropertyType.FreezesTarget]: 3,
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.FrozenOrb]: {x: 9, y: 50},
        },
      },
    },
  },
  {
    id: ids.BaranarsStar,
    name: "Baranar's Star",
    baseId: ids.DevilStar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 200,
        [MagicPropertyType.FireDamage]: {x: 1, y: 200},
        [MagicPropertyType.LightningDamage]: {x: 1, y: 200},
        [MagicPropertyType.ColdDamage]: {x: 1, y: 200, z: [0, 7]},
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.BonusToAttackRating]: 200,
        [MagicPropertyType.Dexterity]: 15,
        [MagicPropertyType.Strength]: 15,
      },
    },
  },
  {
    id: ids.HorizonsTornado,
    name: "Horizon's Tornado",
    baseId: ids.Scourge,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 64,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [230, 280],
        [MagicPropertyType.IncreasedAttackSpeed]: 50,
        [MagicPropertyType.SlowsTarget]: 20,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Tornado]: {x: 15, y: 20},
        },
        [MagicPropertyType.Requirements]: -20,
      },
    },
  },
  {
    id: ids.Stormlash,
    name: 'Stormlash',
    baseId: ids.Scourge,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 82,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [240, 300],
        [MagicPropertyType.LightningDamage]: {x: 1, y: 473},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.CrushingBlow]: 33,
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Tornado]: {x: 18, y: 20},
          [SkillType.StaticField]: {x: 10, y: 15},
        },
        [MagicPropertyType.LightningAbsorb]: [3, 9],
        [MagicPropertyType.AttackerTakesLightningDamage]: 30,
      },
    },
  },
]);
