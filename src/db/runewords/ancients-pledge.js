import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SocketCategoryType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.RalOrtTal,
  name: "Ancient's Pledge",
  runes: [ids.Ral, ids.Ort, ids.Tal],
  properties: {
    [SocketCategoryType.Shield]: {
      base: {
        [BasePropertyType.RequiredLevel]: 21,
      },
      magic: {
        [MagicPropertyType.EnhancedDefense]: 50,
        [MagicPropertyType.ColdResist]: 43,
        [MagicPropertyType.LightningResist]: 48,
        [MagicPropertyType.FireResist]: 48,
        [MagicPropertyType.PoisonResist]: 48,
        [MagicPropertyType.DamageTakenGoesToMana]: 10,
      },
    },
  },
};
