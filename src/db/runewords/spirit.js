import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.TalThulOrtAmn,
  name: 'Spirit',
  runes: [ids.Tal, ids.Thul, ids.Ort, ids.Amn],
  types: [...resolveRunewordItemTypes('shield'), ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 25,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.FasterCastRate]: [25, 35],
      [MagicPropertyType.FasterHitRecovery]: 55,
      [MagicPropertyType.DefenseVsMissle]: 250,
      [MagicPropertyType.Vitality]: 22,
      [MagicPropertyType.Mana]: [89, 112],
      [MagicPropertyType.MagicAbsorb]: [3, 8],
    },
  },
};
