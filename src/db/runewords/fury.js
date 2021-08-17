import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.JahGulEth,
  name: 'Fury',
  runes: [ids.Jah, ids.Gul, ids.Eth],
  types: resolveRunewordItemTypes('melee'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.EnhancedDamage]: 209,
      [MagicPropertyType.IncreasedAttackSpeed]: 40,
      [MagicPropertyType.PreventMonsterHeal]: true,
      [MagicPropertyType.OpenWounds]: 66,
      [MagicPropertyType.DeadlyStrike]: 33,
      [MagicPropertyType.LifeStolenPerHit]: 6,
      [MagicPropertyType.Skill]: {
        [SkillType.Frenzy]: 5,
      },
    },
  },
};
