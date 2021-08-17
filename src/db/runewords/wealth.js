import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.LemKoTir,
  name: 'Wealth',
  runes: [ids.Lem, ids.Ko, ids.Tir],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 43,
    },
    magic: {
      [MagicPropertyType.ExtraGold]: 250,
      [MagicPropertyType.MagicFind]: 100,
    },
  },
};
