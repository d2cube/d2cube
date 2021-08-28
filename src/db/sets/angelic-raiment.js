import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.AngelicRaiment,
  name: 'Angelic Raiment',
  tier: ItemTierType.Normal,
  bonus: [
    null,
    {
      [MagicPropertyType.Dexterity]: 10,
    },
    {
      [MagicPropertyType.Mana]: 50,
    },
    {
      [MagicPropertyType.Dexterity]: 10,
      [MagicPropertyType.Mana]: 50,
      [MagicPropertyType.RegenerateMana]: 8,
      [MagicPropertyType.AllResistances]: 25,
      [MagicPropertyType.HalfFreezeDuration]: true,
      [MagicPropertyType.MagicFind]: 40,
    },
  ],
  items: [
    ids.AngelicWings,
    ids.AngelicHalo,
    ids.AngelicMantle,
    ids.AngelicSickle,
  ],
};
