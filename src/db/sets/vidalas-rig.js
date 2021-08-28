import {
  ItemSetType,
  ItemTierType,
  MagicPropertyType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.VidalasRig,
  name: "Vidala's Rig",
  tier: ItemTierType.Normal,
  bonus: [
    null,
    {
      [MagicPropertyType.AttackRating]: 75,
    },
    {
      [MagicPropertyType.Dexterity]: 15,
    },
    {
      [MagicPropertyType.PiercingAttack]: 50,
      [MagicPropertyType.AttackRating]: 75,
      [MagicPropertyType.ColdDamage]: {x: 15, y: 20, z: 2},
      [MagicPropertyType.FreezesTarget]: true,
      [MagicPropertyType.Strength]: 10,
      [MagicPropertyType.Dexterity]: 15,
    },
  ],
  items: [
    ids.VidalasSnare,
    ids.VidalasAmbush,
    ids.VidalasFetlock,
    ids.VidalasBarb,
  ],
};
