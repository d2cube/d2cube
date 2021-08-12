import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.SazabisGrandTribute,
  name: "Sazabi's Grand Tribute",
  bonus: [
    null,
    {
      [MagicPropertyType.FasterRunWalk]: 40,
    },
    {
      [MagicPropertyType.FasterRunWalk]: 40,
      [MagicPropertyType.LifeStolenPerHit]: 15,
      [MagicPropertyType.IncreaseMaximumLife]: 27,
      [MagicPropertyType.AllResistances]: 30,
    },
  ],
  items: [
    ids.SazabisMentalSheath,
    ids.SazabisGhostLiberator,
    ids.SazabisCobaltRedeemer,
  ],
};
