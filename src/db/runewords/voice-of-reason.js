import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.LemKoElEld,
  name: 'Voice of Reason',
  runes: [ids.Lem, ids.Ko, ids.El, ids.Eld],
  types: [ItemType.Mace, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 43,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.FrozenOrb]: {x: 13, y: 15},
        [SkillType.IceBlast]: {x: 20, y: 18},
      },
      [MagicPropertyType.DamageToDemons]: [220, 350],
      [MagicPropertyType.DamageToUndead]: [280, 300],
      [MagicPropertyType.ColdDamage]: {x: 100, y: 220},
      [MagicPropertyType.LowerColdResist]: -24,
      [MagicPropertyType.CannotBeFrozen]: true,
    },
  },
};
