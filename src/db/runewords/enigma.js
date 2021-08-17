import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.JahIthBer,
  name: 'Enigma',
  runes: [ids.Jah, ids.Ith, ids.Ber],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.FasterRunWalk]: 45,
      [MagicPropertyType.Skill]: {
        [SkillType.Teleport]: {x: 1},
      },
      [MagicPropertyType.Defense]: [750, 775],
      [MagicPropertyType.StrengthByLevel]: 0.75,
      [MagicPropertyType.LifeAfterKill]: 14,
      [MagicPropertyType.MagicFindByLevel]: 1,
      [MagicPropertyType.Socketed]: 3,
    },
  },
};
