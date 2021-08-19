import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.LemIstIo,
  name: 'LemIstIo',
  runes: [ids.Lem, ids.Ist, ids.Io],
  types: resolveRunewordItemTypes('helm'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 51,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.Defense]: 261,
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.Delirium]: {x: 50, y: 1},
        [SkillType.MindBlast]: {x: 14, y: 6},
        [SkillType.Terror]: {x: 13, y: 14},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Confuse]: {x: 18, y: 11},
      },
      [MagicPropertyType.SpellCharges]: {
        [SkillType.Attract]: {x: 17, y: 60},
      },
    },
  },
};
