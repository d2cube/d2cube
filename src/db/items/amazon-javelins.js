import {
  BasePropertyType,
  ItemQualityType,
  ItemTierType,
  ItemType,
  PlayerClassType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Javelin,
  playerClass: PlayerClassType.Amazon,
  quality: ItemQualityType.Normal,
  size: [3, 1],
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.AmazonJavelin,
})([
  {
    id: ids.MaidenJavelin,
    name: 'Maiden Javelin',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 8, y: 14},
        [BasePropertyType.RequiredDexterity]: 47,
        [BasePropertyType.RequiredStrength]: 33,
        [BasePropertyType.RequiredLevel]: 17,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.CeremonialJavelin,
    name: 'Ceremonial Javelin',
    tier: ItemTierType.Exceptional,
    baseId: ids.MaidenJavelin,
    imageId: ids.MaidenJavelin,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 18, y: 35},
        [BasePropertyType.RequiredDexterity]: 99,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 26,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.MatriarchalJavelin,
    name: 'Matriarchal Javelin',
    tier: ItemTierType.Elite,
    baseId: ids.MaidenJavelin,
    imageId: ids.MaidenJavelin,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 30, y: 54},
        [BasePropertyType.RequiredDexterity]: 151,
        [BasePropertyType.RequiredStrength]: 107,
        [BasePropertyType.RequiredLevel]: 48,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
]);
