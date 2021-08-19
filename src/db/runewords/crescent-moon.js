import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ShaelUmTir,
  name: 'Crescent Moon',
  runes: [ids.Shael, ids.Um, ids.Tir],
  types: [ItemType.Axe, ItemType.Sword, ItemType.Polearm],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 47,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.ChainLightning]: {x: 17, y: 10},
        [SkillType.StaticField]: {x: 13, y: 7},
      },
      [MagicPropertyType.EnhancedDamage]: [180, 220],
      [MagicPropertyType.IgnoreTargetDefense]: true,
      [MagicPropertyType.LowerLightningResist]: -35,
      [MagicPropertyType.MagicAbsorb]: [9, 11],
      [MagicPropertyType.SpellCharges]: {
        [SkillType.SpiritWolf]: {x: 18, y: 30},
      },
    },
  },
};
