import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
  SkillSetType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.ImmortalKing,
  name: 'Immortal King',
  tier: ItemTierType.Elite,
  bonus: [
    null,
    {
      [MagicPropertyType.AttackRating]: 50,
    },
    {
      [MagicPropertyType.AttackRating]: 125,
    },
    {
      [MagicPropertyType.AttackRating]: 250,
    },
    {
      [MagicPropertyType.AttackRating]: 450,
    },
    {
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.BarbarianSkills]: 3,
      },
      [MagicPropertyType.AttackRating]: 450,
      [MagicPropertyType.Life]: 150,
      [MagicPropertyType.AllResistances]: 50,
      [MagicPropertyType.MagicDamageReduced]: 10,
    },
  ],
  items: [
    ids.ImmortalKingsStoneCrusher,
    ids.ImmortalKingsPillar,
    ids.ImmortalKingsForge,
    ids.ImmortalKingsDetail,
    ids.ImmortalKingsSoulCage,
    ids.ImmortalKingsWill,
  ],
};
