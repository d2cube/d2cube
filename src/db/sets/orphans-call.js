import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.OrphansCall,
  name: "Orphan's Call",
  tier: ItemTierType.Exceptional,
  bonus: [
    null,
    {
      [MagicPropertyType.Life]: 35,
    },
    {
      [MagicPropertyType.AttackerTakesDamage]: 5,
    },
    {
      [MagicPropertyType.Defense]: 100,
      [MagicPropertyType.Strength]: 20,
      [MagicPropertyType.Dexterity]: 10,
      [MagicPropertyType.Life]: 85,
      [MagicPropertyType.AllResistances]: 15,
      [MagicPropertyType.AttackerTakesDamage]: 5,
      [MagicPropertyType.MagicFind]: 80,
    },
  ],
  items: [
    ids.WhitstansGuard,
    ids.MagnusSkin,
    ids.WilhelmsPride,
    ids.GuillaumesFace,
  ],
};
