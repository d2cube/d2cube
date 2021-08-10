import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.DeathsDisguise,
  name: "Death's Disguise",
  bonus: [
    null,
    {
      [MagicPropertyType.LifeStolenPerHit]: 8,
    },
    {
      [MagicPropertyType.MinimumDamage]: 10,
      [MagicPropertyType.BonusToAttackRating]: 40,
      [MagicPropertyType.LifeStolenPerHit]: 8,
      [MagicPropertyType.AllResistances]: 25,
    },
  ],
  items: [ids.DeathsTouch, ids.DeathsGuard, ids.DeathsHand],
};
