import {
  ItemSetType,
  MagicPropertyType,
  SkillSetType,
} from '../../enums/index.js';
import ids from '../ids/index.js';

export default {
  id: ItemSetType.MAvinasBattleHymn,
  name: "M'avina's Battle Hymn",
  bonus: [
    null,
    {
      [MagicPropertyType.Strength]: 20,
    },
    {
      [MagicPropertyType.Dexterity]: 30,
    },
    null,
    {
      [MagicPropertyType.SkillSetLevels]: {
        [SkillSetType.AmazonSkills]: 3,
      },
      [MagicPropertyType.AttackRating]: 100,
      [MagicPropertyType.Defense]: 100,
      [MagicPropertyType.Strength]: 20,
      [MagicPropertyType.Dexterity]: 30,
      [MagicPropertyType.AllResistances]: 50,
      [MagicPropertyType.MagicFind]: 100,
    },
  ],
  items: [
    ids.MAvinasCaster,
    ids.MAvinasEmbrace,
    ids.MAvinasTrueSight,
    ids.MAvinasIcyClutch,
    ids.MAvinasTenet,
  ],
};
