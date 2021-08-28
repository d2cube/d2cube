import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
  SkillType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.CowKingsLeathers,
  name: "Cow King's Leathers",
  tier: ItemTierType.Exceptional,
  bonus: [
    null,
    {
      [MagicPropertyType.PoisonResist]: 25,
    },
    {
      [MagicPropertyType.ChanceToCastSpellWhenStruck]: {
        [SkillType.StaticField]: {x: 5, y: 25},
      },
      [MagicPropertyType.IncreasedAttackSpeed]: 30,
      [MagicPropertyType.Strength]: 20,
      [MagicPropertyType.MaximumStamina]: 100,
      [MagicPropertyType.PoisonResist]: 25,
      [MagicPropertyType.MagicFind]: 100,
    },
  ],
  items: [ids.CowKingsHooves, ids.CowKingsHide, ids.CowKingsHorns],
};
