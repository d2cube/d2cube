import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.FalUmPul,
  name: 'Gloom',
  runes: [ids.Fal, ids.Um, ids.Pul],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 47,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.DimVision]: {x: 3, y: 15},
      },
      [MagicPropertyType.EnhancedDefense]: [170, 230],
      [MagicPropertyType.FasterHitRecovery]: 10,
      [MagicPropertyType.AllResistances]: 30,
      [MagicPropertyType.HalfFreezeDuration]: true,
      [MagicPropertyType.DamageTakenGoesToMana]: 5,
      [MagicPropertyType.LightRadius]: -3,
    },
  },
};
