import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.FalOhmUm,
  name: 'Chaos',
  runes: [ids.Fal, ids.Ohm, ids.Um],
  types: [ItemType.AssassinKatar],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 57,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.FrozenOrb]: {x: 11, y: 9},
        [SkillType.ChargedBolt]: {x: 9, y: 11},
      },
      [MagicPropertyType.IncreasedAttackSpeed]: 35,
      [MagicPropertyType.LifeAfterDemonKill]: 15,
      [MagicPropertyType.EnhancedDamage]: [240, 290],
      [MagicPropertyType.MagicDamage]: {x: 216, y: 471},
      [MagicPropertyType.Spell]: {
        [SkillType.Whirlwind]: {x: 1},
      },
    },
  },
};
