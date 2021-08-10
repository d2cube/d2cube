import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.HeavensBrethren,
  name: "Heaven's Brethren",
  bonus: [
    null,
    {
      [MagicPropertyType.HealStamina]: 50,
    },
    {
      [MagicPropertyType.ReplenishLife]: 20,
    },
    {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.ReplenishLife]: 20,
      [MagicPropertyType.HealStamina]: 50,
      [MagicPropertyType.AllResistances]: 50,
      [MagicPropertyType.CannotBeFrozen]: true,
      [MagicPropertyType.LightRadius]: 5,
    },
  ],
  items: [
    ids.OndalsAlmighty,
    ids.HaemosusAdamant,
    ids.TaebaeksGlory,
    ids.DangoonsTeaching,
  ],
};
