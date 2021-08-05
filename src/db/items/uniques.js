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
    properties: {
      magic: {
        [MagicPropertyType.EnhancedDamage]: [[60, 120]],
        [MagicPropertyType.ExtraGoldByLevel]: [2.5],
        [MagicPropertyType.MagicFind]: [1, 99, 1],
        [MagicPropertyType.Mana]: [15],
        [MagicPropertyType.Dexterity]: [5, 15],
        [MagicPropertyType.AddSockets]: [2],
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
        [MagicPropertyType.EnhancedDamage]: [[60, 80]],
        [MagicPropertyType.OpenWounds]: [33],
        [MagicPropertyType.IncreasedAttackSpeed]: [15],
        [MagicPropertyType.LifeStolenPerHit]: [15],
        [MagicPropertyType.AllResistances]: [15],
        [MagicPropertyType.Life]: [15],
        [MagicPropertyType.LightRadius]: [4],
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
        [MagicPropertyType.EnhancedDefense]: [80, 130],
        [MagicPropertyType.AllSkillLevels]: [1],
        [MagicPropertyType.IncreaseMaximumMana]: [10],
        [MagicPropertyType.FasterCastRate]: [20],
        [MagicPropertyType.ManaAfterKill]: [3, 5],
        [MagicPropertyType.Energy]: [10],
        [MagicPropertyType.LightRadius]: [1],
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
        [MagicPropertyType.AllSkillLevels]: [1],
        [MagicPropertyType.LightningDamage]: [1, 12],
        [MagicPropertyType.Mana]: [20],
        [MagicPropertyType.IncreaseMaximumMana]: [25],
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
        [MagicPropertyType.EnhancedDefense]: [30, 40],
        [MagicPropertyType.Defense]: [10],
        [MagicPropertyType.ManaAfterKill]: [5],
        [MagicPropertyType.FasterCastRate]: [20],
        [MagicPropertyType.ManaStolenPerHit]: [3],
        [MagicPropertyType.PoisonResist]: [20],
      },
    },
  },
]);
