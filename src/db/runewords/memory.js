import {
  BasePropertyType,
  ItemType,
  MagicPropertyType,
  PlayerClassType,
  RunewordType,
  SkillSetType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.LumIoSolEth,
  name: 'Memory',
  runes: [ids.Lum, ids.Io, ids.Sol, ids.Eth],
  types: [ItemType.Staff],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 37,
    },
    magic: {
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.SorceressSkills]: 3,
      },
      [MagicPropertyType.Skill]: {
        [SkillType.EnergyShield]: {x: 3, y: PlayerClassType.Sorceress},
        [SkillType.StaticField]: {x: 2, y: PlayerClassType.Sorceress},
      },
      [MagicPropertyType.FasterCastRate]: 33,
      [MagicPropertyType.MagicDamageReduced]: 7,
      [MagicPropertyType.EnhancedDefense]: 50,
      [MagicPropertyType.IncreaseMaximumMana]: 20,
    },
  },
};
