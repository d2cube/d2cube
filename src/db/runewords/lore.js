import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.OrtSol,
  name: 'Lore',
  runes: [ids.Ort, ids.Sol],
  types: resolveRunewordItemTypes('helm'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 27,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 1,
      [MagicPropertyType.Energy]: 10,
      [MagicPropertyType.ManaAfterKill]: 2,
      [MagicPropertyType.LightRadius]: 2,
    },
  },
};
