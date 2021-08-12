import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.MilabregasRegalia,
  name: "Milabrega's Regalia",
  bonus: [
    null,
    {
      [MagicPropertyType.AttackRating]: 75,
    },
    {
      [MagicPropertyType.AttackRating]: 125,
    },
    {
      [MagicPropertyType.PaladinSkillLevels]: 2,
      [MagicPropertyType.AttackRating]: 200,
      [MagicPropertyType.ManaStolenPerHit]: 10,
      [MagicPropertyType.LifeStolenPerHit]: 8,
      [MagicPropertyType.PoisonResist]: 15,
    },
  ],
  items: [
    ids.MilabregasRobe,
    ids.MilabregasDiadem,
    ids.MilabregasRod,
    ids.MilabregasOrb,
  ],
};
