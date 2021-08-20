import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.RalTirTalSol,
  name: 'Insight',
  runes: [ids.Ral, ids.Tir, ids.Tal, ids.Sol],
  types: [ItemType.Polearm, ItemType.Staff],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 27,
    },
    magic: {
      [MagicPropertyType.Aura]: {
        [SkillType.Meditation]: {x: [12, 17]},
      },
      [MagicPropertyType.FasterCastRate]: 35,
      [MagicPropertyType.EnhancedDamage]: [200, 260],
      [MagicPropertyType.BonusToAttackRating]: [180, 250],
      [MagicPropertyType.AllAttributes]: 5,
      [MagicPropertyType.Spell]: {
        [SkillType.CriticalStrike]: {x: [1, 6]},
      },
      [MagicPropertyType.MagicFind]: 23,
    },
  },
};
