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
  id: RunewordType.TirRal,
  name: 'Leaf',
  runes: [ids.Tir, ids.Ral],
  types: [ItemType.Staff],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 19,
    },
    magic: {
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.FireSkills]: 3,
      },
      [MagicPropertyType.Skill]: {
        [SkillType.FireBolt]: {x: 3, y: PlayerClassType.Sorceress},
        [SkillType.Inferno]: {x: 3, y: PlayerClassType.Sorceress},
        [SkillType.Warmth]: {x: 3, y: PlayerClassType.Sorceress},
      },
      [MagicPropertyType.DefenseByLevel]: 2,
      [MagicPropertyType.ColdResist]: 33,
    },
  },
};
