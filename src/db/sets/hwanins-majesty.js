import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.HwaninsMajesty,
  name: "Hwanin's Majesty",
  bonus: [
    null,
    {
      [MagicPropertyType.Defense]: 100,
    },
    {
      [MagicPropertyType.Defense]: 200,
    },
    {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.FasterRunWalk]: 30,
      [MagicPropertyType.LifeStolenPerHit]: 20,
      [MagicPropertyType.Defense]: 300,
      [MagicPropertyType.AllResistances]: 30,
    },
  ],
  items: [
    ids.HwaninsJustice,
    ids.HwaninsBlessing,
    ids.HwaninsRefuge,
    ids.HwaninsSplendor,
  ],
};
