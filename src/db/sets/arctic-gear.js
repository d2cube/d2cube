import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.ArcticGear,
  name: 'Arctic Gear',
  bonus: [
    null,
    {
      [MagicPropertyType.Strength]: 5,
    },
    {
      [MagicPropertyType.Life]: 50,
    },
    {
      [MagicPropertyType.ColdDamage]: {x: 6, y: 14, z: 4},
      [MagicPropertyType.Strength]: 5,
      [MagicPropertyType.Life]: 50,
      [MagicPropertyType.CannotBeFrozen]: true,
    },
  ],
  items: [ids.ArcticMitts, ids.ArcticBinding, ids.ArcticFurs, ids.ArcticHorn],
};
