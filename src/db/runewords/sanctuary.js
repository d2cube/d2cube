import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.KoKoMal,
  name: 'Sanctuary',
  runes: [ids.Ko, ids.Ko, ids.Mal],
  types: resolveRunewordItemTypes('shield'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 49,
    },
    magic: {
      [MagicPropertyType.FasterHitRecovery]: 20,
      [MagicPropertyType.FasterBlockRate]: 20,
      [MagicPropertyType.IncreasedChanceOfBlocking]: 20,
      [MagicPropertyType.EnhancedDefense]: [130, 160],
      [MagicPropertyType.DefenseVsMissle]: 250,
      [MagicPropertyType.AllResistances]: [50, 70],
      [MagicPropertyType.SpellCharges]: {
        [SkillType.SlowMissles]: {x: 12, y: 60},
      },
    },
  },
};
