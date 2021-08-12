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
  set: ItemSetType.VidalasRig,
  type: ItemType.Set,
})([
  {
    id: ids.VidalasBarb,
    name: "Vidala's Barb",
    baseId: ids.LongBattleBow,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.LightningDamage]: {x: 1, y: 20},
      },
      set: [
        null,
        {
          [MagicPropertyType.AttackRatingByLevel]: 8,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.VidalasAmbush,
    name: "Vidala's Ambush",
    baseId: ids.LeatherArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.Defense]: 50,
        [MagicPropertyType.Dexterity]: 11,
      },
      set: [
        null,
        {
          [MagicPropertyType.FireResist]: 24,
        },
        {
          [MagicPropertyType.DefenseByLevel]: 2.5,
        },
        null,
      ],
    },
  },
  {
    id: ids.VidalasFetlock,
    name: "Vidala's Fetlock",
    baseId: ids.LightPlatedBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 30,
        [MagicPropertyType.MaximumStamina]: 150,
      },
      set: [
        null,
        {
          [MagicPropertyType.AllResistances]: 8,
        },
        null,
        null,
      ],
    },
  },
  {
    id: ids.VidalasSnare,
    name: "Vidala's Snare",
    baseId: ids.Amulet,
    imageId: ids.Amulet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 14,
      },
      magic: {
        [MagicPropertyType.Life]: 15,
        [MagicPropertyType.ColdResist]: 20,
      },
      set: [
        null,
        {
          [MagicPropertyType.MagicFind]: 50,
        },
        null,
        null,
      ],
    },
  },
]);
