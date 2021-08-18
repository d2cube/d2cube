import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import { resolveRunewordItemTypes } from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.VexHelElEldZodEth,
  name: 'Breath of the Dying',
  runes: [ids.Vex, ids.Hel, ids.El, ids.Eld, ids.Zod, ids.Eth],
  types: resolveRunewordItemTypes('weapon'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 69,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnKill]: {
        [SkillType.PoisonNova]: {x: 20, y: 50},
      },
      [MagicPropertyType.IncreasedAttackSpeed]: 60,
      [MagicPropertyType.LifeStolenPerHit]: [12, 15],
      [MagicPropertyType.EnhancedDamage]: [350, 400],
      [MagicPropertyType.DamageToUndead]: 125,
      [MagicPropertyType.PreventMonsterHeal]: true,
      [MagicPropertyType.AllAttributes]: 30,
    },
  },
};
