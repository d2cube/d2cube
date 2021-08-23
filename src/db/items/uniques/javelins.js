import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Unique,
})([
  {
    id: ids.DemonsArch,
    name: "Demon's Arch",
    baseId: ids.BalrogSpear,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 68,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [160, 210],
        [MagicPropertyType.FireDamage]: {x: 232, y: 323},
        [MagicPropertyType.LightningDamage]: {x: 23, y: 333},
        [MagicPropertyType.IncreasedAttackSpeed]: 30,
        [MagicPropertyType.LifeStolenPerHit]: [6, 12],
        [MagicPropertyType.ReplenishesQuantity]: 3,
      },
    },
  },
  {
    id: ids.WraithFlight,
    name: 'Wraith Flight',
    baseId: ids.GhostGlaive,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [150, 190],
        [MagicPropertyType.LifeStolenPerHit]: [9, 13],
        [MagicPropertyType.ManaAfterKill]: 15,
        [MagicPropertyType.ReplenishesQuantity]: 2,
        [MagicPropertyType.Ethereal]: true,
      },
    },
  },
  {
    id: ids.GargoylesBite,
    name: "Gargoyle's Bite",
    baseId: ids.WingedHarpoon,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 70,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [180, 230],
        [MagicPropertyType.PoisonDamage]: {x: 293, y: 293, z: 10},
        [MagicPropertyType.SpellCharges]: {
          [SkillType.PlagueJavelin]: {x: 11, y: 60},
        },
        [MagicPropertyType.LifeStolenPerHit]: [9, 15],
        [MagicPropertyType.ReplenishesQuantity]: 3,
      },
    },
  },
]);
