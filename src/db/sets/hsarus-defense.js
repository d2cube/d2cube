import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.HsarusDefense,
  name: "Hsarus' Defense",
  bonus: [
    null,
    {
      [MagicPropertyType.AttackerTakesDamage]: 5,
    },
    {
      [MagicPropertyType.MaximumDamage]: 5,
      [MagicPropertyType.LightningResist]: 25,
      [MagicPropertyType.CannotBeFrozen]: true,
      [MagicPropertyType.AttackerTakesDamage]: 5,
    },
  ],
  items: [ids.HsarusIronStay, ids.HsarusIronFist, ids.HsarusIronHeel],
};
