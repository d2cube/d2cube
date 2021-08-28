import {
  BasePropertyType,
  ItemQualityType,
  MagicPropertyType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  baseId: ids.Ring,
  imageId: ids.Ring,
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.BulKathosWeddingBand,
    name: "Bul-Kathos' Wedding Band",
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 58,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.LifeByLevel]: 0.5,
        [MagicPropertyType.LifeStolenPerHit]: [3, 5],
        [MagicPropertyType.MaximumStamina]: 50,
      },
    },
  },
  {
    id: ids.CarrionWind,
    name: 'Carrion Wind',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 60,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.PoisonNova]: {x: 10, y: 10},
        },
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Twister]: {x: 13, y: 8},
        },
        [MagicPropertyType.DefenseVsMissle]: [100, 160],
        [MagicPropertyType.LifeStolenPerHit]: [6, 9],
        [MagicPropertyType.PoisonResist]: 55,
        [MagicPropertyType.DamageTakenGoesToMana]: 10,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.PoisonCreeper]: {x: 21, y: 15},
        },
      },
    },
  },
  {
    id: ids.DwarfStar,
    name: 'Dwarf Star',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.FireAbsorbPercentage]: 15,
        [MagicPropertyType.HealStamina]: 15,
        [MagicPropertyType.MaximumStamina]: 40,
        [MagicPropertyType.Life]: 40,
        [MagicPropertyType.ExtraGold]: 100,
        [MagicPropertyType.MagicDamageReduced]: [12, 15],
      },
    },
  },
  {
    id: ids.ManaldHeal,
    name: 'Manald Heal',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.ManaStolenPerHit]: [4, 7],
        [MagicPropertyType.ReplenishLife]: [5, 8],
        [MagicPropertyType.RegenerateMana]: 20,
        [MagicPropertyType.Life]: 20,
      },
    },
  },
  {
    id: ids.Nagelring,
    name: 'Nagelring',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 7,
      },
      magic: {
        [MagicPropertyType.MagicDamageReduced]: 3,
        [MagicPropertyType.AttackRating]: [50, 75],
        [MagicPropertyType.AttackerTakesDamage]: 3,
        [MagicPropertyType.MagicFind]: [15, 30],
      },
    },
  },
  {
    id: ids.NaturesPeace,
    name: "Nature's Peace",
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 69,
      },
      magic: {
        [MagicPropertyType.SlainMonstersRestInPeace]: true,
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.PoisonResist]: [20, 30],
        [MagicPropertyType.DamageReduced]: [7, 11],
        [MagicPropertyType.SpellCharges]: {
          [SkillType.OakSage]: {x: 5, y: 27},
        },
      },
    },
  },
  {
    id: ids.RavenFrost,
    name: 'Raven Frost',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 45,
      },
      magic: {
        [MagicPropertyType.AttackRating]: [150, 250],
        [MagicPropertyType.ColdDamage]: {x: 15, y: 45, z: 4},
        [MagicPropertyType.CannotBeFrozen]: true,
        [MagicPropertyType.Dexterity]: [15, 20],
        [MagicPropertyType.Mana]: 40,
        [MagicPropertyType.ColdAbsorbPercentage]: 20,
      },
    },
  },
  {
    id: ids.StoneOfJordan,
    name: 'Stone of Jordan',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.LightningDamage]: {x: 1, y: 12},
        [MagicPropertyType.Mana]: 20,
        [MagicPropertyType.IncreaseMaximumMana]: 25,
      },
    },
  },
  {
    id: ids.WhispProjector,
    name: 'Whisp Projector',
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellOnStriking]: {
          [SkillType.Lightning]: {x: 16, y: 10},
        },
        [MagicPropertyType.LightningAbsorbPercentage]: [10, 20],
        [MagicPropertyType.MagicFind]: [10, 20],
        [MagicPropertyType.SpellCharges]: {
          [SkillType.SpiritOfBarbs]: {x: 7, y: 11},
          [SkillType.HeartOfWolverine]: {x: 5, y: 13},
          [SkillType.OakSage]: {x: 2, y: 15},
        },
      },
    },
  },
]);
