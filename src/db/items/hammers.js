import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Mace,
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.Hammer,
})([
  {
    id: ids.WarHammer,
    name: 'War Hammer',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 19, y: 29},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredStrength]: 53,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.Maul,
    name: 'Maul',
    tier: ItemTierType.Normal,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 30, y: 43},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 69,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.GreatMaul,
    name: 'Great Maul',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 38, y: 58},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 99,
        [BasePropertyType.AttackSpeed]: 12,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.BattleHammer,
    name: 'Battle Hammer',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.WarHammer,
    imageId: ids.WarHammer,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 35, y: 58},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredStrength]: 100,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.WarClub,
    name: 'War Club',
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    baseId: ids.Maul,
    imageId: ids.Maul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 53, y: 78},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 124,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.MartelDeFer,
    name: 'Martel de Fer',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.GreatMaul,
    imageId: ids.GreatMaul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 61, y: 99},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 169,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.LegendaryMallet,
    name: 'Legendary Mallet',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.WarHammer,
    imageId: ids.WarHammer,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 50, y: 61},
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.RequiredStrength]: 189,
        [BasePropertyType.RequiredLevel]: 61,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.OgreMaul,
    name: 'Ogre Maul',
    tier: ItemTierType.Elite,
    size: [4, 2],
    baseId: ids.Maul,
    imageId: ids.Maul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 77, y: 106},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 225,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.ThunderMaul,
    name: 'Thunder Maul',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.GreatMaul,
    imageId: ids.GreatMaul,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 33, y: 180},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 253,
        [BasePropertyType.RequiredLevel]: 65,
        [BasePropertyType.AttackSpeed]: 20,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
]);
