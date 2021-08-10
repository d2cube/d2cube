import {ItemSetType, MagicPropertyType} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.TheDisciple,
  name: 'The Disciple',
  bonus: [
    null,
    {
      [MagicPropertyType.Defense]: 150,
    },
    {
      [MagicPropertyType.PoisonDamage]: {x: 22, y: 22, z: 3},
    },
    {
      [MagicPropertyType.Strength]: 10,
    },
    {
      [MagicPropertyType.AllSkillLevels]: 2,
      [MagicPropertyType.PoisonDamage]: {x: 22, y: 22, z: 3},
      [MagicPropertyType.Defense]: 150,
      [MagicPropertyType.Strength]: 10,
      [MagicPropertyType.Mana]: 100,
      [MagicPropertyType.AllResistances]: 50,
    },
  ],
  items: [
    ids.Credendum,
    ids.DarkAdherent,
    ids.RiteOfPassage,
    ids.LayingOfHands,
    ids.TellingOfBeads,
  ],
};
