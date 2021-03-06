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
  set: ItemSetType.BulKathosChildren,
})([
  {
    id: ids.BulKathosSacredCharge,
    name: "Bul-Kathos' Sacred Charge",
    baseId: ids.ColossusBlade,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 63,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.EnhancedDamage]: 200,
        [MagicPropertyType.CrushingBlow]: 30,
        [MagicPropertyType.Knockback]: true,
        [MagicPropertyType.AllResistances]: 20,
      },
      set: [null, null],
    },
  },
  {
    id: ids.BulKathosTribalGuardian,
    name: "Bul-Kathos' Tribal Guardian",
    baseId: ids.MythicalSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 66,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.EnhancedDamage]: 200,
        [MagicPropertyType.PoisonDamage]: {x: 50, y: 50, z: 2},
        [MagicPropertyType.Strength]: 20,
        [MagicPropertyType.FireResist]: 50,
      },
      set: [null, null],
    },
  },
]);
