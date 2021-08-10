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
  set: ItemSetType.DeathsDisguise,
  type: ItemType.Set,
})([
  {
    id: ids.DeathsTouch,
    name: "Death's Touch",
    baseId: ids.WarSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 6,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: 25,
        [MagicPropertyType.LifeStolenPerHit]: 4,
      },
      set: [
        null,
        {
          [MagicPropertyType.ColdDamage]: {x: 25, y: 75, z: 3},
        },
        null,
      ],
    },
  },
  {
    id: ids.DeathsHand,
    name: "Death's Hand",
    baseId: ids.LeatherGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 6,
      },
      magic: {
        [MagicPropertyType.PoisonResist]: 50,
        [MagicPropertyType.PoisonLengthReduced]: 75,
      },
      set: [
        null,
        {
          [MagicPropertyType.IncreasedAttackSpeed]: 30,
        },
        null,
      ],
    },
  },
  {
    id: ids.DeathsGuard,
    name: "Death's Guard",
    baseId: ids.Sash,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 6,
      },
      magic: {
        [MagicPropertyType.Defense]: 20,
        [MagicPropertyType.CannotBeFrozen]: true,
      },
      set: [
        null,
        {
          [MagicPropertyType.AllResistances]: 15,
        },
        null,
      ],
    },
  },
]);
