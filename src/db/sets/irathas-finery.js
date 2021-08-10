import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.IrathasFinery,
  name: "Iratha's Finery",
  bonus: [
    null,
    {
      [MagicPropertyType.Defense]: 50,
    },
    {
      [MagicPropertyType.FasterRunWalk]: 20,
    },
    {
      [MagicPropertyType.FasterRunWalk]: 20,
      [MagicPropertyType.Defense]: 50,
      [MagicPropertyType.Dexterity]: 15,
      [MagicPropertyType.MaximumPoisonResist]: 10,
      [MagicPropertyType.MaximumColdResist]: 10,
      [MagicPropertyType.MaximumLightningResist]: 10,
      [MagicPropertyType.MaximumFireResist]: 10,
      [MagicPropertyType.AllResistances]: 20,
    },
  ],
  items: [ids.IrathasCord, ids.IrathasCoil, ids.IrathasCuff, ids.IrathasCollar],
};
