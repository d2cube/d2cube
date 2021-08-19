import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.AmnRalMalIstOhm,
  name: 'Call to Arms',
  runes: [ids.Amn, ids.Ral, ids.Mal, ids.Ist, ids.Ohm],
  types: resolveRunewordItemTypes('weapon'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 57,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 1,
      [MagicPropertyType.Spell]: {
        [SkillType.BattleCommand]: {x: [2, 6]},
        [SkillType.BattleOrders]: {x: [1, 6]},
        [SkillType.BattleCry]: {x: [1, 4]},
      },
      [MagicPropertyType.IncreasedAttackSpeed]: 40,
      [MagicPropertyType.EnhancedDamage]: [250, 290],
      [MagicPropertyType.ReplenishLife]: 12,
    },
  },
};
