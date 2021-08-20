import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.HelKoThulEthFal,
  name: 'Obedience',
  runes: [ids.Hel, ids.Ko, ids.Thul, ids.Eth, ids.Fal],
  types: [ItemType.Polearm],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 41,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnKill]: {
        [SkillType.Enchant]: {x: 21, y: 30},
      },
      [MagicPropertyType.FasterHitRecovery]: 40,
      [MagicPropertyType.EnhancedDamage]: 370,
      [MagicPropertyType.LowerFireResist]: -25,
      [MagicPropertyType.CrushingBlow]: 40,
      [MagicPropertyType.Defense]: [200, 300],
      [MagicPropertyType.AllResistances]: [20, 30],
    },
  },
};
