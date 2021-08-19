import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.VexLoBerJahKo,
  name: 'Death',
  runes: [ids.Vex, ids.Lo, ids.Ber, ids.Jah, ids.Ko],
  types: [ItemType.Polearm, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnDeath]: {
        [SkillType.Meteor]: {x: 45},
      },
      [MagicPropertyType.ChanceToCastSpellOnAttack]: {
        [SkillType.Nova]: {x: 22, y: 15},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Volcano]: {x: 12, y: 23},
        [SkillType.MoltenBoulder]: {x: 23, y: 5},
      },
      [MagicPropertyType.EnhancedDamage]: 350,
      [MagicPropertyType.MagicDamage]: {x: 100, y: 180},
      [MagicPropertyType.PreventMonsterHeal]: true,
    },
  },
};
