import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.TirIthSolKo,
  name: 'Harmony',
  runes: [ids.Tir, ids.Ith, ids.Sol, ids.Ko],
  types: resolveRunewordItemTypes('missle'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 39,
    },
    magic: {
      [MagicPropertyType.Aura]: {
        [SkillType.Vigor]: {x: 10},
      },
      [MagicPropertyType.Spell]: {
        [SkillType.Valkyrie]: {x: [2, 6]},
      },
      [MagicPropertyType.EnhancedDamage]: [200, 275],
      [MagicPropertyType.LightningDamage]: {x: 55, y: 160},
      [MagicPropertyType.FireDamage]: {x: 55, y: 160},
      [MagicPropertyType.ColdDamage]: {x: 55, y: 160},
      [MagicPropertyType.RegenerateMana]: 20,
      [MagicPropertyType.LightRadius]: 2,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.Revive]: {x: 20, y: 25},
      },
    },
  },
};
