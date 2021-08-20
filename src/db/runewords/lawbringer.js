import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.AmnLemKo,
  name: 'Lawbringer',
  runes: [ids.Amn, ids.Lem, ids.Ko],
  types: [ItemType.Hammer, ItemType.Scepter, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 43,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Decrepify]: {x: 15, y: 20},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.Sanctuary]: {x: [16, 18]},
      },
      [MagicPropertyType.TargetDefense]: -50,
      [MagicPropertyType.FireDamage]: {x: 150, y: 210},
      [MagicPropertyType.ColdDamage]: {x: 130, y: 180},
      [MagicPropertyType.DefenseVsMissle]: [200, 250],
      [MagicPropertyType.SlainMonstersRestInPeace]: true,
    },
  },
};
