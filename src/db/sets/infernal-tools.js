import {
  ItemSetType,
  MagicPropertyType,
  SkillSetType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.InfernalTools,
  name: 'Infernal Tools',
  bonus: [
    null,
    {
      [MagicPropertyType.PoisonDamage]: {x: 8, y: 8, duration: 3},
    },
    {
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.NecromancerSkills]: 1,
      },
      [MagicPropertyType.BonusToAttackRating]: 20,
      [MagicPropertyType.PoisonDamage]: {x: 8, y: 8, z: 3},
      [MagicPropertyType.ManaStolenPerHit]: 6,
      [MagicPropertyType.OpenWounds]: 20,
    },
  ],
  items: [ids.InfernalSign, ids.InfernalTorch, ids.InfernalCranium],
};
