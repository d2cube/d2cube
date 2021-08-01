import {
  ItemQualityType,
  ItemType,
  MagicPropertyType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  quality: ItemQualityType.Unique,
})([
  {
    id: ids.BladeOfAliBaba,
    title: 'Blade of Ali Baba',
    type: ItemType.Sword,
    clvl: 35,
    baseId: ids.Tulwar,
    sockets: [null, null],
    properties: {
      magic: {
        [MagicPropertyType.EnhancedDamage]: {
          values: [60, 120],
        },
        [MagicPropertyType.ExtraGoldByLevel]: {
          values: [2, 247, 2.5],
        },
        [MagicPropertyType.MagicFind]: {
          values: [1, 99, 1],
        },
        [MagicPropertyType.Mana]: {
          values: [15],
        },
        [MagicPropertyType.Dexterity]: {
          values: [5, 15],
        },
      },
    },
  },
  {
    id: ids.BloodCrescent,
    title: 'Blood Crescent',
    type: ItemType.Sword,
    clvl: 7,
    qlvl: 87,
    baseId: ids.Scimitar,
    properties: {
      magic: {
        [MagicPropertyType.EnhancedDamage]: {
          values: [60, 80],
        },
        [MagicPropertyType.OpenWounds]: {
          values: [33],
        },
        [MagicPropertyType.IncreasedAttackSpeed]: {
          values: [15],
        },
        [MagicPropertyType.LifeStolenPerHit]: {
          values: [15],
        },
        [MagicPropertyType.AllResistances]: {
          values: [15],
        },
        [MagicPropertyType.Life]: {
          values: [15],
        },
        [MagicPropertyType.LightRadius]: {
          values: [4],
        },
      },
    },
  },
  {
    id: ids.LidlessWall,
    title: 'Lidless Wall',
    type: ItemType.Shield,
    size: [3, 2],
    clvl: 35,
    baseId: ids.GrimShield,
    properties: {
      magic: {
        [MagicPropertyType.EnhancedDefense]: {
          values: [80, 130],
        },
        [MagicPropertyType.AllSkillLevels]: {
          values: [1],
        },
        [MagicPropertyType.IncreaseMaximumMana]: {
          values: [10],
        },
        [MagicPropertyType.FasterCastRate]: {
          values: [20],
        },
        [MagicPropertyType.ManaAfterKill]: {
          values: [3, 5],
        },
        [MagicPropertyType.Energy]: {
          values: [10],
        },
        [MagicPropertyType.LightRadius]: {
          values: [1],
        },
      },
    },
  },
  {
    id: ids.StoneOfJordan,
    title: 'Stone of Jordan',
    type: ItemType.Ring,
    size: [1, 1],
    clvl: 29,
    qlvl: 66,
    baseId: ids.Ring,
    properties: {
      magic: {
        [MagicPropertyType.AllSkillLevels]: {
          values: [1],
        },
        [MagicPropertyType.LightningDamage]: {
          values: [1, 12],
        },
        [MagicPropertyType.Mana]: {
          values: [20],
        },
        [MagicPropertyType.IncreaseMaximumMana]: {
          values: [25],
        },
      },
    },
  },
  {
    id: ids.WallOfTheEyeless,
    title: 'Wall of the Eyeless',
    type: ItemType.Shield,
    clvl: 35,
    baseId: ids.BoneShield,
    properties: {
      magic: {
        [MagicPropertyType.EnhancedDefense]: {
          values: [30, 40],
        },
        [MagicPropertyType.Defense]: {
          values: [10],
        },
        [MagicPropertyType.ManaAfterKill]: {
          values: [5],
        },
        [MagicPropertyType.FasterCastRate]: {
          values: [20],
        },
        [MagicPropertyType.ManaStolenPerHit]: {
          values: [3],
        },
        [MagicPropertyType.PoisonResist]: {
          values: [20],
        },
      },
    },
  },
]);
