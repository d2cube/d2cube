import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.IsenhartsAmory,
  name: "Isenhart's Armory",
  tier: ItemTierType.Normal,
  bonus: [
    null,
    {
      [MagicPropertyType.Strength]: 10,
    },
    {
      [MagicPropertyType.Dexterity]: 10,
    },
    {
      [MagicPropertyType.FasterRunWalk]: 20,
      [MagicPropertyType.IncreasedChanceOfBlocking]: 30,
      [MagicPropertyType.BonusToAttackRating]: 35,
      [MagicPropertyType.LifeStolenPerHit]: 5,
      [MagicPropertyType.Strength]: 10,
      [MagicPropertyType.Dexterity]: 10,
      [MagicPropertyType.AllResistances]: 10,
    },
  ],
  items: [
    ids.IsenhartsHorns,
    ids.IsenhartsCase,
    ids.IsenhartsParry,
    ids.IsenhartsLightbrand,
  ],
};
