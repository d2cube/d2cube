import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.NefLum,
  name: 'Smoke',
  runes: [ids.Nef, ids.Lum],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 37,
    },
    magic: {
      [MagicPropertyType.EnhancedDefense]: 75,
      [MagicPropertyType.DefenseVsMissle]: 250,
      [MagicPropertyType.AllResistances]: 50,
      [MagicPropertyType.FasterHitRecovery]: 20,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.Weaken]: {x: 6, y: 18},
      },
      [MagicPropertyType.LightRadius]: -1,
    },
  },
};
