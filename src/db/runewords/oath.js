import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ShaelPulMalLum,
  name: 'Oath',
  runes: [ids.Shael, ids.Pul, ids.Mal, ids.Lum],
  types: [ItemType.Axe, ItemType.Mace, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 49,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.BoneSpirit]: {x: 20, y: 30},
      },
      [MagicPropertyType.Indestructible]: true,
      [MagicPropertyType.IncreasedAttackSpeed]: 30,
      [MagicPropertyType.EnhancedDamage]: [210, 340],
      [MagicPropertyType.MagicAbsorb]: [10, 15],
      [MagicPropertyType.SpellCharges]: {
        [SkillType.HeartOfWolverine]: {x: 16, y: 20},
        [SkillType.IronGolem]: {x: 17, y: 14},
      },
    },
  },
};
