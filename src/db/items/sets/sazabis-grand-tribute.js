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
  set: ItemSetType.SazabisGrandTribute,
  type: ItemType.Set,
})([
  {
    id: ids.SazabisCobaltRedeemer,
    name: "Sazabi's Cobalt Redeemer",
    baseId: ids.CrypticSword,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 78,
      },
      magic: {
        [MagicPropertyType.Indestructible]: true,
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.EnhancedDamage]: 150,
        [MagicPropertyType.DamageToDemons]: 318,
        [MagicPropertyType.ColdDamage]: {x: 25, y: 35, z: 2},
        [MagicPropertyType.Strength]: 5,
        [MagicPropertyType.Dexterity]: 15,
      },
      set: [null, null, null],
    },
  },
  {
    id: ids.SazabisGhostLiberator,
    name: "Sazabi's Ghost Liberator",
    baseId: ids.BalrogSkin,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 67,
      },
      magic: {
        [MagicPropertyType.FasterHitRecovery]: 30,
        [MagicPropertyType.AttackRatingAgainstDemons]: 300,
        [MagicPropertyType.Defense]: 400,
        [MagicPropertyType.Strength]: 25,
        [MagicPropertyType.Life]: [50, 75],
      },
      set: [null, null, null],
    },
  },
  {
    id: ids.SazabisMentalSheath,
    name: "Sazabi's Mental Sheath",
    baseId: ids.Basinet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 43,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.Defense]: 100,
        [MagicPropertyType.LightningResist]: [15, 20],
        [MagicPropertyType.FireResist]: [15, 20],
      },
      set: [null, null, null],
    },
  },
]);
