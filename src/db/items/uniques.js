import {
  ItemQualityType,
  ItemType,
  MagicPropertyType,
} from '../../enums/index.js';
import {createBaseItems} from '../../utils/create-base-items.js';
import ids from '../ids/index.js';

export default createBaseItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Sword,
})([
  {
    id: ids.BladeOfAliBaba,
    name: 'Blade of Ali Baba',
    type: ItemType.Sword,
    size: [3, 1],
    clvl: 35,
    baseId: ids.Tulwar,
    sockets: [null, null],
    stats: {
      [MagicPropertyType.EnhancedDamage]: [60, 120],
      [MagicPropertyType.ExtraGoldByLevel]: [2, 247, 2.5],
      [MagicPropertyType.MagicFind]: [1, 99, 1],
      [MagicPropertyType.Mana]: [15],
      [MagicPropertyType.Dexterity]: [5, 15],
    },
  },
  {
    id: ids.BloodCrescent,
    name: 'Blood Crescent',
    type: ItemType.Sword,
    size: [3, 1],
    clvl: 7,
    qlvl: 87,
    baseId: ids.Scimitar,
    stats: {
      [MagicPropertyType.EnhancedDamage]: [60, 80],
      [MagicPropertyType.OpenWounds]: [33],
      [MagicPropertyType.IncreasedAttackSpeed]: [15],
      [MagicPropertyType.LifeStolenPerHit]: [15],
      [MagicPropertyType.AllResistances]: [15],
      [MagicPropertyType.Life]: [15],
      [MagicPropertyType.LightRadius]: [4],
    },
  },
  {
    id: ids.LidlessWall,
    name: 'Lidless Wall',
    type: ItemType.Shield,
    size: [3, 2],
    clvl: 35,
    baseId: ids.GrimShield,
    stats: {
      [MagicPropertyType.EnhancedDefense]: [80, 130],
      [MagicPropertyType.AllSkillLevels]: [1],
      [MagicPropertyType.IncreaseMaximumMana]: [10],
      [MagicPropertyType.FasterCastRate]: [20],
      [MagicPropertyType.ManaAfterKill]: [3, 5],
      [MagicPropertyType.Energy]: [10],
      [MagicPropertyType.LightRadius]: [1],
    },
  },
  {
    id: ids.StoneOfJordan,
    name: 'Stone of Jordan',
    type: ItemType.Ring,
    size: [1, 1],
    clvl: 29,
    qlvl: 66,
    stats: {
      [MagicPropertyType.AllSkillLevels]: [1],
      [MagicPropertyType.LightningDamage]: [1, 12],
      [MagicPropertyType.Mana]: [20],
      [MagicPropertyType.IncreaseMaximumMana]: [25],
    },
  },
  {
    id: ids.WallOfTheEyeless,
    name: 'Wall of the Eyeless',
    type: ItemType.Shield,
    size: [3, 2],
    clvl: 35,
    baseId: ids.BoneShield,
    stats: {
      [MagicPropertyType.EnhancedDefense]: [30, 40],
      [MagicPropertyType.Defense]: [10],
      [MagicPropertyType.ManaAfterKill]: [5],
      [MagicPropertyType.FasterCastRate]: [20],
      [MagicPropertyType.ManaStolenPerHit]: [3],
      [MagicPropertyType.PoisonResist]: [20],
    },
  },
]);
