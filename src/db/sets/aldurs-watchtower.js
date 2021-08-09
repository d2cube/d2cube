import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.AldursWatchtower,
  name: "Aldur's Watchtower",
  bonus: [
    null,
    {
      [MagicPropertyType.BonusToAttackRating]: 150,
    },
    {
      [MagicPropertyType.MagicFind]: 50,
    },
    {
      [MagicPropertyType.DruidSkillLevels]: 3,
      [MagicPropertyType.EnhancedDamage]: 350,
      [MagicPropertyType.BonusToAttackRating]: 150,
      [MagicPropertyType.ManaStolenPerHit]: 10,
      [MagicPropertyType.Defense]: 150,
      [MagicPropertyType.Mana]: 150,
      [MagicPropertyType.AllResistances]: 50,
      [MagicPropertyType.MagicFind]: 50,
    },
  ],
  items: [
    ids.AldursAdvance,
    ids.AldursRhythm,
    ids.AldursDeception,
    ids.AldursStonyGaze,
  ],
};
