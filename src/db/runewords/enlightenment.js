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
  id: RunewordType.PulRalSol,
  name: 'Enlightenment',
  runes: [ids.Pul, ids.Ral, ids.Sol],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 45,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.Blaze]: {x: 15, y: 5},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.FireBall]: {x: 15, y: 5},
      },
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.SorceressSkills]: 2,
      },
      [MagicPropertyType.Spell]: {
        [SkillType.Warmth]: {x: 1},
      },
    },
  },
};
