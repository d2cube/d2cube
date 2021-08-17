import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.NefTir,
  name: 'Nadir',
  runes: [ids.Nef, ids.Tir],
  types: resolveRunewordItemTypes('helm'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 13,
    },
    magic: {
      [MagicPropertyType.EnhancedDefense]: 50,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.CloakOfShadows]: {x: 13, y: 9},
      },
      [MagicPropertyType.Defense]: 10,
      [MagicPropertyType.Strength]: 5,
      [MagicPropertyType.ExtraGold]: -33,
      [MagicPropertyType.LightRadius]: -3,
    },
  },
};
