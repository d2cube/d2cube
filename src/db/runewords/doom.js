import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.HelOhmUmLoCham,
  name: 'Doom',
  runes: [ids.Hel, ids.Ohm, ids.Um, ids.Lo, ids.Cham],
  types: [ItemType.Axe, ItemType.Polearm, ItemType.Hammer],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 67,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Volcano]: {x: 18, y: 5},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.HolyFreeze]: {x: 12},
      },
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.IncreasedAttackSpeed]: 45,
      [MagicPropertyType.EnhancedDamage]: [330, 370],
      [MagicPropertyType.LowerColdResist]: [-40, -60],
      [MagicPropertyType.PreventMonsterHeal]: true,
    },
  },
};
