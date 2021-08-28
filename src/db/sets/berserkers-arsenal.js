import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.BerserkersArsenal,
  name: "Berserker's Arsenal",
  tier: ItemTierType.Normal,
  bonus: [
    null,
    {
      [MagicPropertyType.Life]: 50,
    },
    {
      [MagicPropertyType.PoisonDamage]: {x: 5, y: 9, z: 3},
      [MagicPropertyType.Defense]: 75,
      [MagicPropertyType.Life]: 50,
      [MagicPropertyType.PoisonLengthReduced]: 75,
    },
  ],
  items: [ids.BerserkersHatchet, ids.BerserkersHauberk, ids.BerserkersHeadgear],
};
