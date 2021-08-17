import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ThulIoNef,
  name: 'Black',
  runes: [ids.Thul, ids.Io, ids.Nef],
  types: [ItemType.Mace],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 35,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 120,
      [MagicPropertyType.CrushingBlow]: 40,
      [MagicPropertyType.AttackRating]: 200,
      [MagicPropertyType.IncreasedAttackSpeed]: 15,
      [MagicPropertyType.MagicDamageReduced]: 2,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.CorpseExplosion]: {x: 4, y: 12},
      },
    },
  },
};
