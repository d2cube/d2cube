import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
  SkillSetType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.GrisworldsLegacy,
  name: "Grisworld's Legacy",
  tier: ItemTierType.Elite,
  bonus: [
    null,
    {
      [MagicPropertyType.Strength]: 20,
    },
    {
      [MagicPropertyType.Dexterity]: 30,
    },
    {
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.PaladinSkills]: 3,
      },
      [MagicPropertyType.FasterHitRecovery]: 30,
      [MagicPropertyType.AttackRating]: 200,
      [MagicPropertyType.Strength]: 20,
      [MagicPropertyType.Dexterity]: 30,
      [MagicPropertyType.Life]: 150,
      [MagicPropertyType.AllResistances]: 50,
    },
  ],
  items: [
    ids.GrisworldsHonor,
    ids.GrisworldsRedemption,
    ids.GrisworldsHeart,
    ids.GrisworldsValor,
  ],
};
