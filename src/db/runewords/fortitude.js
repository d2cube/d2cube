import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ElSolDolLo,
  name: 'Fortitude',
  runes: [ids.El, ids.Sol, ids.Dol, ids.Lo],
  types: [
    ...resolveRunewordItemTypes('armor'),
    ...resolveRunewordItemTypes('weapon'),
  ],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 59,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.ChillingArmor]: {x: 15, y: 20},
      },
      [MagicPropertyType.FasterCastRate]: 25,
      [MagicPropertyType.EnhancedDamage]: 300,
      [MagicPropertyType.EnhancedDefense]: 200,
      [MagicPropertyType.LifeByLevel]: 1.5,
      [MagicPropertyType.AllResistances]: [25, 30],
      [MagicPropertyType.DamageTakenGoesToMana]: 12,
    },
  },
};
