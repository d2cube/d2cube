import {
  BasePropertyType,
  MagicPropertyType,
  RunewordType,
  SkillSetType,
  SkillType,
} from '../../enums/index.js';
import {resolveRunewordItemTypes} from '../../utils/resolvers/resolve-runeword-item-types.js';
import ids from '../ids/index.js';

export default {
  id: RunewordType.SolUmUm,
  name: 'Bone',
  runes: [ids.Sol, ids.Um, ids.Um],
  types: resolveRunewordItemTypes('armor'),
  properties: {
    base: {
      [BasePropertyType.RequiredLevel]: 47,
    },
    magic: {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.BoneArmor]: {x: 10, y: 15},
      },
      [MagicPropertyType.ChanceToCastSpellOnStriking]: {
        [SkillType.BoneSpear]: {x: 10, y: 15},
      },
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.NecromancerSkills]: 2,
      },
      [MagicPropertyType.Mana]: [100, 150],
    },
  },
};
