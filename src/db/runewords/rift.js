import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.HelKoLemGul,
  name: 'Rift',
  runes: [ids.Hel, ids.Ko, ids.Lem, ids.Gul],
  types: [ItemType.Polearm, ItemType.Scepter],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 53,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Tornado]: {x: 16, y: 20},
      },
      [MagicPropertyType.ChanceToCastSpellOnAttack]: {
        [SkillType.FrozenOrb]: {x: 21, y: 16},
      },
      [MagicPropertyType.MagicDamage]: {x: 160, y: 250},
      [MagicPropertyType.FireDamage]: {x: 60, y: 180},
      [MagicPropertyType.AllAttributes]: [5, 10],
      [MagicPropertyType.DamageTakenGoesToMana]: 38,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.IronMaiden]: {x: 15, y: 40},
      },
    },
  },
};
