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
  set: ItemSetType.SandersFolly,
  type: ItemType.Set,
})([
  {
    id: ids.SandersParagon,
    name: "Sander's Paragon",
    baseId: ids.Cap,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.DefenseByLevel]: 1,
        [MagicPropertyType.AttackerTakesDamage]: 8,
        [MagicPropertyType.MagicFind]: 35,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.SandersSuperstition,
    name: "Sander's Superstition",
    baseId: ids.BoneWand,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 25,
      },
      magic: {
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.EnhancedDamage]: 75,
        [MagicPropertyType.ColdDamage]: {x: 25, y: 75, z: 2},
        [MagicPropertyType.ManaStolenPerHit]: 8,
        [MagicPropertyType.Mana]: 25,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.SandersTaboo,
    name: "Sander's Taboo",
    baseId: ids.HeavyGloves,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 20,
        [MagicPropertyType.PoisonDamage]: {x: 9, y: 11, z: 3},
        [MagicPropertyType.Defense]: [20, 25],
        [MagicPropertyType.Life]: 40,
      },
      set: [null, null, null, null],
    },
  },
  {
    id: ids.SandersRiprap,
    name: "Sander's Riprap",
    baseId: ids.HeavyBoots,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 20,
      },
      magic: {
        [MagicPropertyType.FasterRunWalk]: 40,
        [MagicPropertyType.AttackRating]: 100,
        [MagicPropertyType.Strength]: 5,
        [MagicPropertyType.Dexterity]: 10,
      },
      set: [null, null, null, null],
    },
  },
]);
