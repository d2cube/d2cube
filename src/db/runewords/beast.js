import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.BerTirUmMalLum,
  name: 'Beast',
  runes: [ids.Ber, ids.Tir, ids.Um, ids.Mal, ids.Lum],
  types: [ItemType.Axe, ItemType.Scepter, ItemType.Hammer],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 63,
    },
    magic: {
      [MagicPropertyType.Aura]: {
        [SkillType.Fanaticism]: {x: 9},
      },
      [MagicPropertyType.IncreasedAttackSpeed]: 40,
      [MagicPropertyType.EnhancedDamage]: [240, 270],
      [MagicPropertyType.PreventMonsterHeal]: true,
      [MagicPropertyType.Spell]: {
        [SkillType.Lycanthropy]: {x: 3},
        [SkillType.Werebear]: {x: 3},
      },
      [MagicPropertyType.SpellCharges]: {
        [SkillType.SummonGrizzly]: {x: 13, y: 5},
      },
    },
  },
};
