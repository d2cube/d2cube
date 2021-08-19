import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.KoVexPulThul,
  name: 'Heart of the Oak',
  runes: [ids.Ko, ids.Vex, ids.Pul, ids.Thul],
  types: [ItemType.Mace, ItemType.Staff],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 55,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 3,
      [MagicPropertyType.FasterCastRate]: 40,
      [MagicPropertyType.ReplenishLife]: 20,
      [MagicPropertyType.IncreaseMaximumMana]: 15,
      [MagicPropertyType.AllResistances]: [30, 40],
      [MagicPropertyType.SpellCharges]: {
        [SkillType.OakSage]: {x: 4, y: 25},
        [SkillType.Raven]: {x: 14, y: 60},
      },
    },
  },
};
