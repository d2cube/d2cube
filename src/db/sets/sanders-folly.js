import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.SandersFolly,
  name: "Sander's Folly",
  bonus: [
    null,
    {
      [MagicPropertyType.Defense]: 50,
    },
    {
      [MagicPropertyType.AttackRating]: 75,
    },
    {
      [MagicPropertyType.AllSkillLevels]: 1,
      [MagicPropertyType.AttackRating]: 75,
      [MagicPropertyType.LifeStolenPerHit]: 4,
      [MagicPropertyType.Defense]: 50,
      [MagicPropertyType.Mana]: 50,
      [MagicPropertyType.MagicFind]: 50,
    },
  ],
  items: [
    ids.SandersSuperstition,
    ids.SandersTaboo,
    ids.SandersRiprap,
    ids.SandersParagon,
  ],
};
