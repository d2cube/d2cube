import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.SigonsCompleteSteel,
  name: "Sigon's Complete Steel",
  bonus: [
    null,
    {
      [MagicPropertyType.LifeStolenPerHit]: 10,
    },
    {
      [MagicPropertyType.Defense]: 100,
    },
    {
      [MagicPropertyType.MaximumFireDamage]: 24,
      [MagicPropertyType.LifeStolenPerHit]: 10,
      [MagicPropertyType.Defense]: 100,
      [MagicPropertyType.Mana]: 20,
      [MagicPropertyType.FireResist]: 12,
      [MagicPropertyType.DamageReduced]: 7,
      [MagicPropertyType.AttackerTakesDamage]: 12,
    },
  ],
  items: [
    ids.SigonsGuard,
    ids.SigonsWrap,
    ids.SigonsSabot,
    ids.SigonsShelter,
    ids.SigonsVisor,
    ids.SigonsGage,
  ],
};
