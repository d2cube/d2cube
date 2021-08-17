import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.TalDolMal,
  name: 'Venom',
  runes: [ids.Tal, ids.Dol, ids.Mal],
  types: resolveRunewordItemTypes('weapon'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 49,
    },
    magic: {
      [MagicPropertyType.IgnoreTargetDefense]: true,
      [MagicPropertyType.ManaStolenPerHit]: 7,
      [MagicPropertyType.PoisonDamage]: {x: 198, y: 198, z: 1},
      [MagicPropertyType.SpellCharges]: {
        [SkillType.PoisonNova]: {x: 13, y: 11},
        [SkillType.PoisonExplosion]: {x: 15, y: 27},
      },
    },
  },
};
