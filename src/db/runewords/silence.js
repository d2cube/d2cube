import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.DolEldHelIstTirVex,
  name: 'Silence',
  runes: [ids.Dol, ids.Eld, ids.Hel, ids.Ist, ids.Tir, ids.Vex],
  types: resolveRunewordItemTypes('weapon'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 55,
    },
    magic: {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.EnhancedDamage]: 200,
      [MagicPropertyType.IncreasedAttackSpeed]: 20,
      [MagicPropertyType.AllResistances]: 75,
      [MagicPropertyType.HitCausesMonsterToFlee]: 25,
      [MagicPropertyType.FasterHitRecovery]: 20,
    },
  },
};
