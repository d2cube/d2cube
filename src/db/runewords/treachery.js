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
  id: RunewordType.ShaelThulLem,
  name: 'Treachery',
  runes: [ids.Shael, ids.Thul, ids.Lem],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 43,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.Fade]: {x: 15, y: 5},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Venom]: {x: 15, y: 25},
      },
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.AssassinSkills]: 2,
      },
      [MagicPropertyType.IncreasedAttackSpeed]: 45,
    },
  },
};
