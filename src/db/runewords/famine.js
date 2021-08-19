import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.FalOhmOrtJah,
  name: 'Famine',
  runes: [ids.Fal, ids.Ohm, ids.Ort, ids.Jah],
  types: [ItemType.Axe, ItemType.Hammer],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 65,
    },
    magic: {
      [MagicPropertyType.IncreasedAttackSpeed]: 30,
      [MagicPropertyType.EnhancedDamage]: [270, 320],
      [MagicPropertyType.MagicDamage]: {x: 180, y: 200},
      [MagicPropertyType.FireDamage]: {x: 50, y: 200},
      [MagicPropertyType.LightningDamage]: {x: 50, y: 200},
      [MagicPropertyType.ColdDamage]: {x: 50, y: 200},
      [MagicPropertyType.LifeStolenPerHit]: 12,
      [MagicPropertyType.PreventMonsterHeal]: true,
    },
  },
};
