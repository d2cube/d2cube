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
  set: ItemSetType.HsarusDefense,
  type: ItemType.Set,
})([
  {
    id: ids.HsarusIronFist,
    name: "Hsarus' Iron Fist",
    baseId: ids.Buckler,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 3,
      },
      magic: {
        [MagicPropertyType.Strength]: 10,
        [MagicPropertyType.DamageReduced]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 2.5,
        },
        null,
      ],
    },
  },
  {
    id: ids.HsarusIronStay,
    name: "Hsarus' Iron Stay",
    baseId: ids.Belt,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 3,
      },
      magic: {
        [MagicPropertyType.Life]: 20,
        [MagicPropertyType.ColdResist]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.DefenseByLevel]: 2.5,
        },
        null,
      ],
    },
  },
  {
    id: ids.HsarusIronHeel,
    name: "Hsarus' Iron Heel",
    baseId: ids.ChainBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 3,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 20,
        [MagicPropertyType.FireResist]: 25,
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRatingByLevel]: 10,
        },
        null,
      ],
    },
  },
]);
