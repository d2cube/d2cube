import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.PulLumBerMal,
  name: 'Wrath',
  runes: [ids.Pul, ids.Lum, ids.Ber, ids.Mal],
  types: resolveRunewordItemTypes('missle'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 63,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Decrepify]: {x: 1, y: 30},
        [SkillType.LifeTap]: {x: 10, y: 5},
      },
      [MagicPropertyType.DamageToDemons]: 300,
      [MagicPropertyType.DamageToUndead]: [250, 300],
      [MagicPropertyType.MagicDamage]: {x: 85, y: 120},
      [MagicPropertyType.LightningDamage]: {x: 41, y: 240},
      [MagicPropertyType.CannotBeFrozen]: true,
    },
  },
};
