import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.MalUmGulFal,
  name: 'Kingslayer',
  runes: [ids.Mal, ids.Um, ids.Gul, ids.Fal],
  types: [ItemType.Axe, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 53,
    },
    magic: {
      [MagicPropertyType.IncreasedAttackSpeed]: 30,
      [MagicPropertyType.EnhancedDamage]: [230, 270],
      [MagicPropertyType.TargetDefense]: -25,
      [MagicPropertyType.CrushingBlow]: 33,
      [MagicPropertyType.OpenWounds]: 25,
      [MagicPropertyType.ExtraGold]: 40,
      [MagicPropertyType.Spell]: {
        [SkillType.Vengeance]: {x: 1},
      },
    },
  },
};
