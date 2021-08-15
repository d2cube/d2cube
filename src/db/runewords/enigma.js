import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SocketCategoryType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.JahIthBer,
  name: 'Enigma',
  runes: [ids.Jah, ids.Ith, ids.Ber],
  properties: {
    [SocketCategoryType.Armor]: {
      base: {
        [BasePropertyType.RequiredLevel]: 65,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 2,
        [MagicPropertyType.FasterRunWalk]: 45,
        [MagicPropertyType.SkillTeleport]: 1,
        [MagicPropertyType.Defense]: [750, 775],
        [MagicPropertyType.StrengthByLevel]: 0.75,
        [MagicPropertyType.IncreaseMaximumLife]: 5,
        [MagicPropertyType.DamageReduced]: 8,
        [MagicPropertyType.LifeAfterKill]: 14,
        [MagicPropertyType.DamageTakenGoesToMana]: 15,
        [MagicPropertyType.MagicFind]: 1,
        [MagicPropertyType.Socketed]: 3,
      },
    },
  },
};
