import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.NajsAncientVestige,
  name: "Naj's Ancient Vestige",
  bonus: [
    null,
    {
      [MagicPropertyType.Defense]: 175,
    },
    {
      [MagicPropertyType.AllSkillLevels]: 1,
      [MagicPropertyType.Defense]: 175,
      [MagicPropertyType.Strength]: 20,
      [MagicPropertyType.Dexterity]: 15,
      [MagicPropertyType.ReplenishLife]: 10,
      [MagicPropertyType.Mana]: 100,
      [MagicPropertyType.AllResistances]: 50,
    },
  ],
  items: [ids.NajsCirclet, ids.NajsLightPlate, ids.NajsPuzzler],
};
