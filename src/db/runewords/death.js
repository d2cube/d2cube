import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.HelElVexOrtGul,
  name: 'Death',
  runes: [ids.Hel, ids.El, ids.Vex, ids.Ort, ids.Gul],
  types: [ItemType.Axe, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 55,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnDeath]: {
        [SkillType.ChainLightning]: {x: 44},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.GlacialSpike]: {x: 18, y: 25},
      },
      [MagicPropertyType.Indestructible]: true,
      [MagicPropertyType.EnhancedDamage]: [300, 385],
      [MagicPropertyType.CrushingBlow]: 50,
      [MagicPropertyType.DeadlyStrikeByLevel]: 0.5,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.BloodGolem]: {x: 22, y: 15},
      },
    },
  },
};
