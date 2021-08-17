import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  MagicPropertyType,
  SkillSetType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.CathansTraps,
  type: ItemType.Set,
})([
  {
    id: ids.CathansRule,
    name: "Cathan's Rule",
    baseId: ids.BattleStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 11,
      },
      magic: {
        [MagicPropertyType.SkillSetLevels]: {
          [SkillSetType.FireSkills]: 1,
        },
        [MagicPropertyType.MaximumFireDamage]: 10,
        [MagicPropertyType.DamageToUndead]: 50,
      },
      set: [
        null,
        {
          [MagicPropertyType.Mana]: 50,
        },
        {
          [MagicPropertyType.AllResistances]: 10,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.CathansMesh,
    name: "Cathan's Mesh",
    baseId: ids.ChainMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 11,
      },
      magic: {
        [MagicPropertyType.Defense]: 15,
        [MagicPropertyType.Requirements]: -50,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackerTakesDamage]: 5,
        },
        {
          [MagicPropertyType.FireResist]: 30,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.CathansVisage,
    name: "Cathan's Visage",
    baseId: ids.Mask,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 11,
      },
      magic: {
        [MagicPropertyType.Mana]: 20,
        [MagicPropertyType.ColdResist]: 25,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 2,
        },
        null,
        null,
        null,
      ],
    },
  },
  {
    id: ids.CathansSigil,
    name: "Cathan's Sigil",
    baseId: ids.Amulet,
    imageId: ids.Amulet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 11,
      },
      magic: {
        [MagicPropertyType.FasterHitRecovery]: 10,
        [MagicPropertyType.AttackerTakesLightningDamage]: 5,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRating]: 50,
        },
        {
          [MagicPropertyType.MagicFind]: 25,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.CathansSeal,
    name: "Cathan's Seal",
    baseId: ids.Ring,
    imageId: ids.Ring,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 11,
      },
      magic: {
        [MagicPropertyType.LifeStolenPerHit]: 6,
        [MagicPropertyType.DamageReduced]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.Strength]: 10,
        },
        null,
        null,
        null,
      ],
    },
  },
]);
