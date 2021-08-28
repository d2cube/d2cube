import {
  BasePropertyType,
  ItemQualityType,
  ItemSetType,
  MagicPropertyType,
  SkillType,
} from '../../../enums/index.js';
import {normalizeItems} from '../../utils/normalize-items.js';
import ids from '../../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Set,
  set: ItemSetType.NajsAncientVestige,
})([
  {
    id: ids.NajsPuzzler,
    name: "Naj's Puzzler",
    baseId: ids.ElderStaff,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 78,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterCastRate]: 30,
        [MagicPropertyType.EnhancedDamage]: 150,
        [MagicPropertyType.LightningDamage]: {x: 6, y: 45},
        [MagicPropertyType.Energy]: 35,
        [MagicPropertyType.Mana]: 70,
        [MagicPropertyType.SpellCharges]: {
          [SkillType.Teleport]: {x: 11, y: 69},
        },
      },
      set: [null, null, null],
    },
  },
  {
    id: ids.NajsLightPlate,
    name: "Naj's Light Plate",
    baseId: ids.HellforgePlate,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 71,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.Defense]: 300,
        [MagicPropertyType.Life]: 65,
        [MagicPropertyType.DamageTakenGoesToMana]: 45,
        [MagicPropertyType.AllResistances]: 25,
        [MagicPropertyType.Requirements]: -60,
      },
      set: [null, null, null],
    },
  },
  {
    id: ids.NajsCirclet,
    name: "Naj's Circlet",
    baseId: ids.Circlet,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 28,
      },
      magic: {
        [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
          [SkillType.ChainLightning]: {x: 5, y: 12},
        },
        [MagicPropertyType.FireDamage]: {x: 25, y: 35},
        [MagicPropertyType.Defense]: 75,
        [MagicPropertyType.Strength]: 15,
        [MagicPropertyType.LightRadius]: 5,
      },
      set: [null, null, null],
    },
  },
]);
