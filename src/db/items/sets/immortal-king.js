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
  set: ItemSetType.ImmortalKing,
  type: ItemType.Set,
})([
  {
    id: ids.ImmortalKingsStoneCrusher,
    name: "Immortal King's Stone Crusher",
    baseId: ids.OgreMaul,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.Indestructible]: true,
        [MagicPropertyType.IncreasedAttackSpeed]: 40,
        [MagicPropertyType.EnhancedDamage]: 200,
        [MagicPropertyType.DamageToDemons]: 200,
        [MagicPropertyType.DamageToUndead]: 250,
        [MagicPropertyType.CrushingBlow]: [35, 50],
        [MagicPropertyType.AddSockets]: 2,
      },
      set: [
        null,
        {
          [MagicPropertyType.FireDamage]: {min: 211, max: 397},
        },
        {
          [MagicPropertyType.LightningDamage]: {min: 7, max: 477},
        },
        {
          [MagicPropertyType.ColdDamage]: {min: 127, max: 364, duration: 6},
        },
        {
          [MagicPropertyType.PoisonDamage]: {value: 204, duration: 6},
        },
        {
          [MagicPropertyType.MagicDamage]: {min: 250, max: 361},
        },
      ],
    },
  },
  {
    id: ids.ImmortalKingsSoulCage,
    name: "Immortal King's Soul Cage",
    baseId: ids.SacredArmor,
  },
  {
    id: ids.ImmortalKingsWill,
    name: "Immortal King's Will",
    baseId: ids.AvengerGuard,
  },
  {
    id: ids.ImmortalKingsForge,
    name: "Immortal King's Forge",
    baseId: ids.WarGauntlets,
  },
  {
    id: ids.ImmortalKingsDetail,
    name: "Immortal King's Detail",
    baseId: ids.WarBelt,
  },
  {
    id: ids.ImmortalKingsPillar,
    name: "Immortal King's Pillar",
    baseId: ids.WarBoots,
  },
]);
