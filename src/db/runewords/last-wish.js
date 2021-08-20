import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.JahMalJahSurJahBer,
  name: 'Last Wish',
  runes: [ids.Jah, ids.Mal, ids.Jah, ids.Sur, ids.Jah, ids.Ber],
  types: [ItemType.Axe, ItemType.Hammer, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.Fade]: {x: 11, y: 6},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.LifeTap]: {x: 18, y: 10},
      },
      [MagicPropertyType.ChanceToCastSpellOnAttack]: {
        [SkillType.LifeTap]: {x: 20, y: 20},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.Might]: {x: 17},
      },
      [MagicPropertyType.EnhancedDamage]: [330, 375],
      [MagicPropertyType.CrushingBlow]: [40, 50],
      [MagicPropertyType.MagicFindByLevel]: 0.5,
    },
  },
};
