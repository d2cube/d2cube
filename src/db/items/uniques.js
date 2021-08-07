import {
  ItemQualityType,
  ItemType,
  MagicPropertyType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.BladeOfAliBaba,
    name: 'Blade of Ali Baba',
    type: ItemType.Sword,
    clvl: 35,
    baseId: ids.Tulwar,
    properties: {
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 120],
        [MagicPropertyType.ExtraGoldByLevel]: 2.5,
        [MagicPropertyType.MagicFindByLevel]: 1,
        [MagicPropertyType.Mana]: 15,
        [MagicPropertyType.Dexterity]: [5, 15],
        [MagicPropertyType.AddSockets]: 2,
      },
    },
  },
  {
    id: ids.BloodCrescent,
    name: 'Blood Crescent',
    type: ItemType.Sword,
    clvl: 7,
    qlvl: 87,
    baseId: ids.Scimitar,
    properties: {
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 80],
        [MagicPropertyType.OpenWounds]: 33,
        [MagicPropertyType.IncreasedAttackSpeed]: 15,
        [MagicPropertyType.LifeStolenPerHit]: 15,
        [MagicPropertyType.AllResistances]: 15,
        [MagicPropertyType.Life]: 15,
        [MagicPropertyType.LightRadius]: 4,
      },
    },
  },
  {
    id: ids.LidlessWall,
    name: 'Lidless Wall',
    type: ItemType.Shield,
    size: [3, 2],
    clvl: 35,
    baseId: ids.GrimShield,
    properties: {
      magic: {
        [MagicPropertyType.EnhancedDefense]: [80, 130],
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.IncreaseMaximumMana]: 10,
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.ManaAfterKill]: [3, 5],
        [MagicPropertyType.Energy]: 10,
        [MagicPropertyType.LightRadius]: 1,
      },
    },
  },
  {
    id: ids.StoneOfJordan,
    name: 'Stone of Jordan',
    type: ItemType.Ring,
    size: [1, 1],
    clvl: 29,
    qlvl: 66,
    baseId: ids.Ring,
    properties: {
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.LightningDamage]: {min: 1, max: 12},
        [MagicPropertyType.Mana]: 20,
        [MagicPropertyType.IncreaseMaximumMana]: 25,
      },
    },
  },
  {
    id: ids.WallOfTheEyeless,
    name: 'Wall of the Eyeless',
    type: ItemType.Shield,
    clvl: 35,
    baseId: ids.BoneShield,
    properties: {
      magic: {
        [MagicPropertyType.EnhancedDefense]: [30, 40],
        [MagicPropertyType.Defense]: 10,
        [MagicPropertyType.ManaAfterKill]: 5,
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.ManaStolenPerHit]: 3,
        [MagicPropertyType.PoisonResist]: 20,
      },
    },
  },
]);
