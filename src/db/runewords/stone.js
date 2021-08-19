import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ShaelUmPulLum,
  name: 'Stone',
  runes: [ids.Shael, ids.Um, ids.Pul, ids.Lum],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 47,
    },
    magic: {
      [MagicPropertyType.FasterHitRecovery]: 40,
      [MagicPropertyType.EnhancedDefense]: [220, 260],
      [MagicPropertyType.DefenseVsMissle]: 300,
      [MagicPropertyType.Strength]: 16,
      [MagicPropertyType.Vitality]: 16,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.MoltenBoulder]: {x: 16, y: 80},
        [SkillType.ClayGolem]: {x: 16, y: 16},
      },
    },
  },
};
