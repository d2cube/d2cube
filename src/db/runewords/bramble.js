import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.RalOhmSurEth,
  name: 'Bramble',
  runes: [ids.Ral, ids.Ohm, ids.Sur, ids.Eth],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 61,
    },
    magic: {
      [MagicPropertyType.Aura]: {
        [SkillType.Thorns]: {x: [15, 21]},
      },
      [MagicPropertyType.FasterHitRecovery]: 50,
      [MagicPropertyType.PoisonSkillDamage]: [25, 50],
      [MagicPropertyType.Defense]: 300,
      [MagicPropertyType.MaximumColdResist]: 5,
      [MagicPropertyType.PoisonResist]: 100,
      [MagicPropertyType.LifeAfterKill]: 13,
      [MagicPropertyType.SpellCharges]: {
        [SkillType.SpiritOfBarbs]: {x: 13, y: 33},
      },
    },
  },
};
