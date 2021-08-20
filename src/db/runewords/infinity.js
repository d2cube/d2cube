import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.BerMalBerIst,
  name: 'Infinity',
  runes: [ids.Ber, ids.Mal, ids.Ber, ids.Ist],
  types: [ItemType.Polearm],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 63,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnKill]: {
        [SkillType.ChainLightning]: {x: 20, y: 50},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.Conviction]: {x: 12},
      },
      [MagicPropertyType.FasterRunWalk]: 35,
      [MagicPropertyType.EnhancedDamage]: [255, 325],
      [MagicPropertyType.LowerLightningResist]: [-45, -55],
      [MagicPropertyType.VitalityByLevel]: 0.5,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.CycloneArmor]: {x: 21, y: 30},
      },
    },
  },
};
