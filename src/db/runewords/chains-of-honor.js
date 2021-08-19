import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.DolUmBerIst,
  name: 'Chains of Honor',
  runes: [ids.Dol, ids.Um, ids.Ber, ids.Ist],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 63,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.DamageToDemons]: 200,
      [MagicPropertyType.DamageToUndead]: 100,
      [MagicPropertyType.EnhancedDefense]: 70,
      [MagicPropertyType.Strength]: 20,
      [MagicPropertyType.LifeStolenPerHit]: 8,
      [MagicPropertyType.AllResistances]: 50,
    },
  },
};
