import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  PlayerClassType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.EthRalOrtTal,
  name: 'Holy Thunder',
  runes: [ids.Eth, ids.Ral, ids.Ort, ids.Tal],
  types: [ItemType.Scepter],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 21,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 60,
      [MagicPropertyType.MaximumDamage]: 10,
      [MagicPropertyType.LightningDamage]: {x: 20, y: 60},
      [MagicPropertyType.LightningResist]: 60,
      [MagicPropertyType.MaximumLightningResist]: 5,
      [MagicPropertyType.Spell]: {
        [SkillType.HolyShock]: {
          x: 3,
          y: PlayerClassType.Paladin,
        },
      },
      [MagicPropertyType.SpellCharges]: {
        [SkillType.ChainLightning]: {x: 7, y: 60},
      },
    },
  },
};
