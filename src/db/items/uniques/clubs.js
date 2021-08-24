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
    id: ids.Felloak,
    name: 'Felloak',
    baseId: ids.Club,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 3,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [70, 80],
        [MagicPropertyType.FireDamage]: {x: 6, y: 8},
        [MagicPropertyType.Knockback]: true,
        [MagicPropertyType.LightningResist]: 60,
        [MagicPropertyType.FireResist]: 20,
      },
    },
  },
  {
    id: ids.Stoutnail,
    name: 'Stoutnail',
    baseId: ids.SpikedClub,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 5,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 100,
        [MagicPropertyType.Vitality]: 7,
        [MagicPropertyType.AttackerTakesDamage]: [3, 10],
        [MagicPropertyType.MagicDamageReduced]: 2,
      },
    },
  },
  {
    id: ids.DarkClanCrusher,
    name: 'Dark Clan Crusher',
    baseId: ids.Cudgel,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 34,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 195,
        [MagicPropertyType.DamageToDemons]: 200,
        [MagicPropertyType.AttackRatingAgainstDemons]: 200,
        [MagicPropertyType.BonusToAttackRating]: [20, 25],
        [MagicPropertyType.LifeAfterDemonKill]: 15,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidSkills]: 2,
        },
      },
    },
  },
  {
    id: ids.Fleshrender,
    name: 'Fleshrender',
    baseId: ids.BarbedClub,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 38,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [130, 200],
        [MagicPropertyType.AddDamage]: {x: 35, y: 50},
        [MagicPropertyType.DeadlyStrike]: 20,
        [MagicPropertyType.CrushingBlow]: 20,
        [MagicPropertyType.OpenWounds]: 25,
        [MagicPropertyType.PreventMonsterHeal]: true,
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.DruidShapeShiftingSkills]: 2,
          [SkillSetType.DruidSkills]: 1,
        },
      },
    },
  },
  {
    id: ids.NordsTenderizer,
    name: "Nord's Tenderizer",
    baseId: ids.Truncheon,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 68,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [270, 330],
        [MagicPropertyType.ColdDamage]: {x: 205, y: 455, z: 5},
        [MagicPropertyType.FreezesTarget]: [2, 4],
        [MagicPropertyType.ColdAbsorbPercentage]: [5, 15],
        [MagicPropertyType.IncreasedAttackSpeed]: 25,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Blizzard]: {x: 16, y: 12},
        },
        [MagicPropertyType.BonusToAttackRating]: [150, 180],
      },
    },
  },
  {
    id: ids.DemonLimb,
    name: 'Demon Limb',
    baseId: ids.TyrantClub,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 63,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 230],
        [MagicPropertyType.DamageToDemons]: 123,
        [MagicPropertyType.FireDamage]: {x: 222, y: 333},
        [MagicPropertyType.LifeStolenPerHit]: [7, 13],
        [MagicPropertyType.FireResist]: [15, 20],
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Enchant]: {x: 23, y: 20},
        },
        [MagicPropertyType.RepairsDurability]: 20,
      },
    },
  },
]);
