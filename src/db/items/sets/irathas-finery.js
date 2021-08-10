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
  set: ItemSetType.IrathasFinery,
  type: ItemType.Set,
})([
  {
    id: ids.IrathasCoil,
    name: "Iratha's Coil",
    baseId: ids.Crown,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.LightningResist]: 30,
        [MagicPropertyType.FireResist]: 30,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 2,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.IrathasCuff,
    name: "Iratha's Cuff",
    baseId: ids.LightGauntlets,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.ColdResist]: 30,
        [MagicPropertyType.HalfFreezeDuration]: true,
      },
      set: [
        null,
        {
          [MagicPropertyType.IncreasedAttackSpeed]: 20,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.IrathasCord,
    name: "Iratha's Cord",
    baseId: ids.HeavyBelt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.MinimumDamage]: 5,
        [MagicPropertyType.Defense]: 25,
      },
      set: [
        null,
        {
          [MagicPropertyType.Dexterity]: 10,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.IrathasCollar,
    name: "Iratha's Collar",
    baseId: ids.Amulet,
    imageId: ids.Amulet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 15,
      },
      magic: {
        [MagicPropertyType.PoisonResist]: 30,
        [MagicPropertyType.PoisonLengthReduced]: 75,
      },
      set: [
        null,
        {
          [MagicPropertyType.AllResistances]: 15,
        },
        null,
        null,
      ],
    },
  },
]);
