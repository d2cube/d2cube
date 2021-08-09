import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.GrisworldsLegacy,
  name: "Grisworld's Legacy",
  bonus: [
    null,
    {
      [MagicPropertyType.Strength]: 20,
    },
    {
      [MagicPropertyType.Dexterity]: 30,
    },
    {
      [MagicPropertyType.PaladinSkillLevels]: 3,
      [MagicPropertyType.FasterHitRecovery]: 30,
      [MagicPropertyType.AttackRating]: 200,
      [MagicPropertyType.Strength]: 20,
      [MagicPropertyType.Dexterity]: 30,
      [MagicPropertyType.Life]: 150,
      [MagicPropertyType.AllResistances]: 50,
    },
  ],
  items: [
    ids.GrisworldsRedemption,
    ids.GrisworldsHeart,
    ids.GrisworldsHonor,
    ids.GrisworldsValor,
  ],
};
