import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Unique,
})([
  {
    id: ids.BladeOfAliBaba,
    name: 'Blade of Ali Baba',
    baseId: ids.Tulwar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 120],
        [MagicPropertyType.Dexterity]: [5, 15],
        [MagicPropertyType.Mana]: 15,
        [MagicPropertyType.ExtraGoldByLevel]: 2.5,
        [MagicPropertyType.MagicFindByLevel]: 1,
        [MagicPropertyType.Socketed]: 2,
      },
    },
  },
  {
    id: ids.BloodCrescent,
    name: 'Blood Crescent',
    baseId: ids.Scimitar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 7,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 15,
        [MagicPropertyType.EnhancedDamage]: [60, 80],
        [MagicPropertyType.LifeStolenPerHit]: 15,
        [MagicPropertyType.OpenWounds]: 33,
        [MagicPropertyType.Life]: 15,
        [MagicPropertyType.AllResistances]: 15,
        [MagicPropertyType.LightRadius]: 4,
      },
    },
  },
]);
