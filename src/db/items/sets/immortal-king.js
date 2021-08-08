import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  ItemType,
  MagicPropertyType,
  SkillClassType,
  SkillType,
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
          [MagicPropertyType.FireDamage]: {x: 211, y: 397},
        },
        {
          [MagicPropertyType.LightningDamage]: {x: 7, y: 477},
        },
        {
          [MagicPropertyType.ColdDamage]: {x: 127, y: 364, z: 6},
        },
        {
          [MagicPropertyType.PoisonDamage]: {x: 204, z: 6},
        },
        {
          [MagicPropertyType.MagicDamage]: {x: 250, y: 361},
        },
      ],
    },
  },
  {
    id: ids.ImmortalKingsSoulCage,
    name: "Immortal King's Soul Cage",
    baseId: ids.SacredArmor,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 76,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          x: SkillType.Enchant,
          y: 5,
          z: 5,
        },
        [MagicPropertyType.SkillClassLevels]: {
          type: SkillClassType.BarbarianCombatSkills,
          value: 2,
        },
        [MagicPropertyType.AddDefense]: 400,
        [MagicPropertyType.PoisonResist]: 50,
      },
      set: [
        null,
        {
          [MagicPropertyType.FasterHitRecovery]: 25,
        },
        {
          [MagicPropertyType.ColdResist]: 40,
        },
        {
          [MagicPropertyType.FireResist]: 40,
        },
        {
          [MagicPropertyType.LightningResist]: 40,
        },
        {
          [MagicPropertyType.EnhancedDefense]: 50,
        },
      ],
    },
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
