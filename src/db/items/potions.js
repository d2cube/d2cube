import {
  BasePropertyType,
  ItemType,
  PotionClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  size: [1, 1],
  type: ItemType.Potion,
})([
  {
    id: ids.MinorHealingPotion,
    name: 'Minor Healing Potion',
    class: PotionClassType.Health,
  },
  {
    id: ids.LightHealingPotion,
    name: 'Light Healing Potion',
    class: PotionClassType.Health,
  },
  {
    id: ids.HealingPotion,
    name: 'Healing Potion',
    class: PotionClassType.Health,
  },
  {
    id: ids.GreaterHealingPotion,
    name: 'Greater Healing Potion',
    class: PotionClassType.Health,
  },
  {
    id: ids.SuperHealingPotion,
    name: 'Super Healing Potion',
    class: PotionClassType.Health,
  },
  {
    id: ids.MinorManaPotion,
    name: 'Minor Mana Potion',
    class: PotionClassType.Mana,
  },
  {
    id: ids.LightManaPotion,
    name: 'Light Mana Potion',
    class: PotionClassType.Mana,
  },
  {
    id: ids.ManaPotion,
    name: 'Mana Potion',
    class: PotionClassType.Mana,
  },
  {
    id: ids.GreaterManaPotion,
    name: 'Greater Mana Potion',
    class: PotionClassType.Mana,
  },
  {
    id: ids.SuperManaPotion,
    name: 'Super Mana Potion',
    class: PotionClassType.Mana,
  },
  {
    id: ids.RejuvenationPotion,
    name: 'Rejuvenation Potion',
    class: PotionClassType.Rejuvenation,
  },
  {
    id: ids.FullRejuvenationPotion,
    name: 'Full Rejuvenation Potion',
    class: PotionClassType.Rejuvenation,
  },
  {
    id: ids.AntidotePotion,
    name: 'Antidote Potion',
  },
  {
    id: ids.ThawingPotion,
    name: 'Thawing Potion',
  },
  {
    id: ids.StaminaPotion,
    name: 'Stamina Potion',
  },
  {
    id: ids.FulminatingPotion,
    name: 'Fulminating Potion',
    properties: {
      [BasePropertyType.RequiredLevel]: 6,
    },
  },
  {
    id: ids.ExplodingPotion,
    name: 'Exploding Potion',
    properties: {
      [BasePropertyType.RequiredLevel]: 12,
    },
  },
  {
    id: ids.OilPotion,
    name: 'Oil Potion',
    properties: {
      [BasePropertyType.RequiredLevel]: 20,
    },
  },
  {
    id: ids.StranglingGasPotion,
    name: 'Strangling Gas Potion',
    properties: {
      [BasePropertyType.RequiredLevel]: 6,
    },
  },
  {
    id: ids.ChokingGasPotion,
    name: 'Choking Gas Potion',
    properties: {
      [BasePropertyType.RequiredLevel]: 16,
    },
  },
  {
    id: ids.RancidGasPotion,
    name: 'Rancid Gas Potion',
    properties: {
      [BasePropertyType.RequiredLevel]: 24,
    },
  },
]);
