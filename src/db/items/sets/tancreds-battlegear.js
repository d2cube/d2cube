import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  MagicPropertyType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.TancredsBattlegear,
})([
  {
    id: ids.TancredsCrowbill,
    name: "Tancred's Crowbill",
    baseId: ids.MilitaryPick,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 80,
        [MagicPropertyType.AttackRating]: 75,
      },
      set: [
        null,
        {
          [MagicPropertyType.Mana]: 20,
        },
        {
          [MagicPropertyType.IncreasedAttackSpeed]: 20,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.TancredsSpine,
    name: "Tancred's Spine",
    baseId: ids.FullPlateMail,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.Strength]: 15,
        [MagicPropertyType.Life]: 40,
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
    id: ids.TancredsSkull,
    name: "Tancred's Skull",
    baseId: ids.BoneHelm,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 10,
        [MagicPropertyType.AttackRating]: 40,
      },
      set: [
        null,
        {
          [MagicPropertyType.AllResistances]: 10,
        },
        null,
        null,
        null,
      ],
    },
  },
  {
    id: ids.TancredsHobnails,
    name: "Tancred's Hobnails",
    baseId: ids.Boots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.Dexterity]: 10,
        [MagicPropertyType.HealStamina]: 25,
      },
      set: [
        null,
        {
          [MagicPropertyType.FasterRunWalk]: 30,
        },
        {
          [MagicPropertyType.Strength]: 10,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.TancredsWeird,
    name: "Tancred's Weird",
    baseId: ids.Amulet,
    imageId: ids.Amulet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.DamageReduced]: 2,
        [MagicPropertyType.MagicDamageReduced]: 1,
      },
      set: [
        null,
        {
          [MagicPropertyType.MagicFind]: 78,
        },
        {
          [MagicPropertyType.AttackRating]: 60,
        },
        null,
        null,
      ],
    },
  },
]);
