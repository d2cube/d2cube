import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.EthLum,
  name: 'Splendor',
  runes: [ids.Eth, ids.Lum],
  types: resolveRunewordItemTypes('shield'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 37,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 1,
      [MagicPropertyType.FasterCastRate]: 10,
      [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
      [MagicPropertyType.EnhancedDefense]: [60, 100],
      [MagicPropertyType.ExtraGold]: 50,
      [MagicPropertyType.MagicFind]: 20,
      [MagicPropertyType.LightRadius]: 3,
    },
  },
};
