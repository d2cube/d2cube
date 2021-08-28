import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.BulKathosChildren,
  name: "Bul-Kathos' Children",
  tier: ItemTierType.Elite,
  bonus: [
    null,
    {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.AttackRating]: 2,
      [MagicPropertyType.DamageToDemons]: 200,
    },
  ],
  items: [ids.BulKathosTribalGuardian, ids.BulKathosSacredCharge],
};
