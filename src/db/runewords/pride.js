import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.ChamSurIoLo,
  name: 'Pride',
  runes: [ids.Cham, ids.Sur, ids.Io, ids.Lo],
  types: [ItemType.Polearm],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 67,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.FireWall]: {x: 17, y: 25},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.Concentration]: {x: [16, 20]},
      },
      [MagicPropertyType.BonusToAttackRating]: [260, 300],
      [MagicPropertyType.DamageToDemonsByLevel]: 1,
      [MagicPropertyType.LightningDamage]: {x: 50, y: 280},
      [MagicPropertyType.ReplenishLife]: 8,
      [MagicPropertyType.ExtraGoldByLevel]: 1.875,
    },
  },
};
