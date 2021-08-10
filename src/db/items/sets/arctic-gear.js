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
  set: ItemSetType.ArcticGear,
  type: ItemType.Set,
})([
  {
    id: ids.ArcticHorn,
    name: 'Arctic Horn',
    baseId: ids.ShortWarBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 2,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 50,
        [MagicPropertyType.BonusToAttackRating]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRatingByLevel]: 8,
        },
        {
          [MagicPropertyType.ColdDamage]: {x: 20, y: 30, z: 3},
        },
        null,
      ],
    },
  },
  {
    id: ids.ArcticFurs,
    name: 'Arctic Furs',
    baseId: ids.QuiltedArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 2,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: [275, 325],
        [MagicPropertyType.AllResistances]: 10,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 3,
        },
        {
          [MagicPropertyType.ColdResist]: 15,
        },
        null,
      ],
    },
  },
  {
    id: ids.ArcticMitts,
    name: 'Arctic Mitts',
    baseId: ids.LightGauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 2,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 10,
        [MagicPropertyType.Life]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRating]: 50,
        },
        {
          [MagicPropertyType.Dexterity]: 10,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.ArcticBinding,
    name: 'Arctic Binding',
    baseId: ids.LightBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 2,
      },
      magic: {
        [MagicPropertyType.Defense]: 30,
        [MagicPropertyType.ColdResist]: 40,
      },
      set: [
        null,
        {
          [MagicPropertyType.MagicFind]: 40,
        },
        {
          [MagicPropertyType.ColdResist]: 10,
        },
        null,
      ],
    },
  },
]);
