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
  id: RunewordType.DolIo,
  name: 'White',
  runes: [ids.Dol, ids.Io],
  types: [ItemType.Wand],
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 35,
    },
    magic: {
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.NecromancerPoisonAndBoneSkills]: 3,
      },
      [MagicPropertyType.Spell]: {
        [SkillType.BoneArmor]: {x: 3, y: PlayerClassType.Necromancer},
        [SkillType.BoneSpear]: {x: 2, y: PlayerClassType.Necromancer},
        [SkillType.SkeletonMastery]: {x: 4, y: PlayerClassType.Necromancer},
      },
      [MagicPropertyType.MagicDamageReduced]: 4,
      [MagicPropertyType.FasterCastRate]: 20,
      [MagicPropertyType.Mana]: 13,
    },
  },
};
