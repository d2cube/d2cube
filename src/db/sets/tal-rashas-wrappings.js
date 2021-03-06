import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
  SkillSetType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.TalRashasWrappings,
  name: "Tal Rasha's Wrappings",
  tier: ItemTierType.Elite,
  bonus: [
    null,
    {
      [MagicPropertyType.ReplenishLife]: 10,
    },
    {
      [MagicPropertyType.MagicFind]: 65,
    },
    null,
    {
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.SorceressSkills]: 3,
      },
      [MagicPropertyType.FasterHitRecovery]: 25,
      [MagicPropertyType.Defense]: 150,
      [MagicPropertyType.DefenseVsMissle]: 50,
      [MagicPropertyType.Life]: 150,
      [MagicPropertyType.ReplenishLife]: 10,
      [MagicPropertyType.AllResistances]: 50,
      [MagicPropertyType.MagicFind]: 65,
    },
  ],
  items: [
    ids.TalRashasHoradricCrest,
    ids.TalRashasGuardianship,
    ids.TalRashasLidlessEye,
    ids.TalRashasAdjudication,
    ids.TalRashasFineSpunCloth,
  ],
};
