import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  MagicPropertyType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.ImmortalKing,
  type: ItemType.Set,
})([
  {
    id: ids.ImmortalKingsStoneCrusher,
    name: "Immortal King's Stone Crusher",
    baseId: ids.OgreMaul,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.Indestructible]: true,
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.EnhancedDamage]: 200,
        [MagicPropertyType.DamageToDemons]: 200,
        [MagicPropertyType.DamageToUndead]: 250,
        [MagicPropertyType.CrushingBlow]: [35, 50],
        [MagicPropertyType.Socketed]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.FireDamage]: {x: 211, y: 397},
        },
        {
          [MagicPropertyType.LightningDamage]: {x: 7, y: 477},
        },
        {
          [MagicPropertyType.ColdDamage]: {x: 127, y: 364, z: 6},
        },
        {
          [MagicPropertyType.PoisonDamage]: {x: 204, z: 6},
        },
        {
          [MagicPropertyType.MagicDamage]: {x: 250, y: 361},
        },
      ],
    },
  },
  {
    id: ids.ImmortalKingsSoulCage,
    name: "Immortal King's Soul Cage",
    baseId: ids.SacredArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.ChanceToCastEnchantWhenStruck]: {
          x: 5,
          y: 5,
        },
        [MagicPropertyType.BarbarianCombatSkills]: 2,
        [MagicPropertyType.Defense]: 400,
        [MagicPropertyType.PoisonResist]: 50,
      },
      set: [
        null,
        {
          [MagicPropertyType.FasterHitRecovery]: 25,
        },
        {
          [MagicPropertyType.ColdResist]: 40,
        },
        {
          [MagicPropertyType.FireResist]: 40,
        },
        {
          [MagicPropertyType.LightningResist]: 40,
        },
        {
          [MagicPropertyType.EnhancedDefense]: 50,
        },
      ],
    },
  },
  {
    id: ids.ImmortalKingsWill,
    name: "Immortal King's Will",
    baseId: ids.AvengerGuard,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 47,
      },
      magic: {
        [MagicPropertyType.BarbarianWarcries]: 2,
        [MagicPropertyType.Defense]: 125,
        [MagicPropertyType.ExtraGold]: 37,
        [MagicPropertyType.MagicFind]: [25, 40],
        [MagicPropertyType.LightRadius]: 4,
        [MagicPropertyType.Socketed]: 2,
      },
    },
  },
  {
    id: ids.ImmortalKingsForge,
    name: "Immortal King's Forge",
    baseId: ids.WarGauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 30,
      },
      magic: {
        [MagicPropertyType.ChanceToCastChargedBoltWhenStruck]: {
          x: 4,
          y: 12,
        },
        [MagicPropertyType.Defense]: 65,
        [MagicPropertyType.Dexterity]: 20,
        [MagicPropertyType.Strength]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.IncreasedAttackSpeed]: 25,
        },
        {
          [MagicPropertyType.Defense]: 120,
        },
        {
          [MagicPropertyType.LifeStolenPerHit]: 10,
        },
        {
          [MagicPropertyType.ManaStolenPerHit]: 10,
        },
        {
          [MagicPropertyType.FreezesTarget]: 2,
        },
      ],
    },
  },
  {
    id: ids.ImmortalKingsDetail,
    name: "Immortal King's Detail",
    baseId: ids.WarBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.Defense]: 36,
        [MagicPropertyType.Strength]: 25,
        [MagicPropertyType.LightningResist]: 31,
        [MagicPropertyType.FireResist]: 28,
      },
      set: [
        null,
        {
          [MagicPropertyType.Defense]: 105,
        },
        {
          [MagicPropertyType.FasterHitRecovery]: 25,
        },
        {
          [MagicPropertyType.EnhancedDefense]: 100,
        },
        {
          [MagicPropertyType.DamageReducedPercentage]: 20,
        },
        {
          [MagicPropertyType.BarbarianMasteries]: 2,
        },
      ],
    },
  },
  {
    id: ids.ImmortalKingsPillar,
    name: "Immortal King's Pillar",
    baseId: ids.WarBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 31,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 40,
        [MagicPropertyType.AttackRating]: 110,
        [MagicPropertyType.Defense]: 75,
        [MagicPropertyType.Life]: 44,
      },
      set: [
        null,
        {
          [MagicPropertyType.MagicFind]: 25,
        },
        {
          [MagicPropertyType.BarbarianCombatSkills]: 2,
        },
        {
          [MagicPropertyType.Defense]: 160,
        },
        {
          [MagicPropertyType.HalfFreezeDuration]: true,
        },
      ],
    },
  },
]);
