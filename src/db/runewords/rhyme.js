import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ShaelEth,
  name: 'Rhyme',
  runes: [ids.Shael, ids.Eth],
  types: resolveRunewordItemTypes('shield'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 29,
    },
    magic: {
      [MagicPropertyType.FasterBlockRate]: 20,
      [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
      [MagicPropertyType.AllResistances]: 25,
      [MagicPropertyType.CannotBeFrozen]: true,
      [MagicPropertyType.ExtraGold]: 50,
      [MagicPropertyType.MagicFind]: 25,
    },
  },
};
