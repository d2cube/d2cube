import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.ArcannasTricks,
  name: "Arcanna's Tricks",
  bonus: [
    null,
    {
      [MagicPropertyType.Mana]: 25,
    },
    {
      [MagicPropertyType.Life]: 50,
    },
    {
      [MagicPropertyType.FasterCastRate]: 20,
      [MagicPropertyType.ManaStolenPerHit]: 5,
      [MagicPropertyType.Life]: 50,
      [MagicPropertyType.Mana]: 50,
    },
  ],
  items: [
    ids.ArcannasFlesh,
    ids.ArcannasHead,
    ids.ArcannasDeathwand,
    ids.ArcannasSign,
  ],
};
