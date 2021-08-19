import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillSetType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.HelAmnNef,
  name: 'Myth',
  runes: [ids.Hel, ids.Amn, ids.Nef],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 25,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.Howl]: {x: 1, y: 3},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Taunt]: {x: 1, y: 10},
      },
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.BarbarianSkills]: 2,
      },
      [MagicPropertyType.ReplenishLife]: 10,
    },
  },
};
