import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.JahIthBer,
  name: 'Enigma',
  runes: [ids.Jah, ids.Ith, ids.Ber],
  types: [ItemType.BodyArmor],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.FasterRunWalk]: 45,
      [MagicPropertyType.SkillTeleport]: 1,
      [MagicPropertyType.Defense]: [750, 775],
      [MagicPropertyType.StrengthByLevel]: 0.75,
      [MagicPropertyType.LifeAfterKill]: 14,
      [MagicPropertyType.MagicFind]: 1,
      [MagicPropertyType.Socketed]: 3,
    },
  },
};
