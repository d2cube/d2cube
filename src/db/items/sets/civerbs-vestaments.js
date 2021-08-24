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
  set: ItemSetType.CiverbsVestments,
  type: ItemType.Set,
})([
  {
    id: ids.CiverbsCudgel,
    name: "Civerb's Cudgel",
    baseId: ids.GrandScepter,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.MaximumDamage]: [17, 23],
        [MagicPropertyType.MaximumDamageByLevel]: 1,
        [MagicPropertyType.AttackRating]: 75,
      },
      set: [null, null, null],
    },
  },
  {
    id: ids.CiverbsWard,
    name: "Civerb's Ward",
    baseId: ids.LargeShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.IncreasedChanceOfBlocking]: 15,
        [MagicPropertyType.Defense]: 15,
      },
      set: [
        null,
        {
          [MagicPropertyType.Mana]: [21, 22],
          [MagicPropertyType.PoisonResist]: [25, 26],
        },
        null,
      ],
    },
  },
  {
    id: ids.CiverbsIcon,
    name: "Civerb's Icon",
    baseId: ids.Amulet,
    imageId: ids.Amulet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 9,
      },
      magic: {
        [MagicPropertyType.ReplenishLife]: 4,
        [MagicPropertyType.RegenerateMana]: 40,
      },
      set: [
        null,
        {
          [MagicPropertyType.ColdResist]: 25,
        },
        {
          [MagicPropertyType.Defense]: 25,
        },
      ],
    },
  },
]);
