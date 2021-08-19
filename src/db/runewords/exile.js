import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  PlayerClassType,
  RunewordType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.VexOhmIstDol,
  name: 'Exile',
  runes: [ids.Vex, ids.Ohm, ids.Ist, ids.Dol],
  types: [ItemType.PaladinShield],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 57,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.LifeTap]: {x: 5, y: 15},
      },
      [MagicPropertyType.Aura]: {
        [SkillType.DefianceAura]: {x: [13, 16]},
      },
      [MagicPropertyType.Spell]: {
        [SkillType.OffensiveAura]: {x: 2, y: PlayerClassType.Paladin},
      },
      [MagicPropertyType.FasterBlockRate]: 30,
      [MagicPropertyType.FreezesTarget]: 0,
      [MagicPropertyType.EnhancedDefense]: [170, 210],
      [MagicPropertyType.RepairsDurability]: 4,
    },
  },
};
