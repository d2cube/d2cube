import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.EthTirLoMalRal,
  name: 'Grief',
  runes: [ids.Eth, ids.Tir, ids.Lo, ids.Mal, ids.Ral],
  types: [ItemType.Axe, ItemType.Sword],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 59,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.Venom]: {x: 15, y: 35},
      },
      [MagicPropertyType.IncreasedAttackSpeed]: [30, 40],
      [MagicPropertyType.DamageToDemonsByLevel]: 1.875,
      [MagicPropertyType.Damage]: [340, 400],
      [MagicPropertyType.LowerPoisonResist]: [-20, -25],
      [MagicPropertyType.IgnoreTargetDefense]: true,
      [MagicPropertyType.LifeAfterKill]: [10, 15],
    },
  },
};
