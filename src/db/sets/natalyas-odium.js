import {
  ItemSetType,
  MagicPropertyType,
  SkillSetType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.NatalyasOdium,
  name: "Natalya's Odium",
  bonus: [
    null,
    {
      [MagicPropertyType.MagicDamageReduced]: 15,
    },
    {
      [MagicPropertyType.Defense]: 200,
    },
    {
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.AssassinSkills]: 3,
      },
      [MagicPropertyType.ManaStolenPerHit]: 14,
      [MagicPropertyType.LifeStolenPerHit]: 14,
      [MagicPropertyType.Defense]: 350,
      [MagicPropertyType.AllResistances]: 50,
      [MagicPropertyType.DamageReducedPercentage]: 30,
      [MagicPropertyType.MagicDamageReduced]: 15,
    },
  ],
  items: [
    ids.NatalyasSoul,
    ids.NatalyasShadow,
    ids.NatalyasMark,
    ids.NatalyasTotem,
  ],
};
