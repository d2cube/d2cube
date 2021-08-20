import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.OhmJahLemEld,
  name: 'Faith',
  runes: [ids.Ohm, ids.Jah, ids.Lem, ids.Eld],
  types: resolveRunewordItemTypes('missle'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.Aura]: {
        [SkillType.Fanaticism]: {x: [12, 15]},
      },
      [MagicPropertyType.AllSkillLevels]: [1, 2],
      [MagicPropertyType.EnhancedDamage]: 280,
      [MagicPropertyType.BonusToAttackRating]: 300,
      [MagicPropertyType.FireDamage]: {x: 120, y: 120},
      [MagicPropertyType.AllResistances]: 15,
      [MagicPropertyType.ReanimateAs]: {x: 10},
    },
  },
};
