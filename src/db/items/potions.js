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
      base: {
        [BasePropertyType.DamageThrow]: {x: 5, y: 15},
        [BasePropertyType.Quantity]: 200,
        [BasePropertyType.RequiredLevel]: 6,
      },
    },
  },
  {
    id: ids.ExplodingPotion,
    name: 'Exploding Potion',
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 16, y: 30},
        [BasePropertyType.Quantity]: 200,
        [BasePropertyType.RequiredLevel]: 12,
      },
    },
  },
  {
    id: ids.OilPotion,
    name: 'Oil Potion',
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 24, y: 64},
        [BasePropertyType.Quantity]: 200,
        [BasePropertyType.RequiredLevel]: 20,
      },
    },
  },
  {
    id: ids.StranglingGasPotion,
    name: 'Strangling Gas Potion',
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 24, y: 24},
        [BasePropertyType.Quantity]: 200,
        [BasePropertyType.RequiredLevel]: 6,
      },
    },
  },
  {
    id: ids.ChokingGasPotion,
    name: 'Choking Gas Potion',
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 72, y: 72},
        [BasePropertyType.Quantity]: 200,
        [BasePropertyType.RequiredLevel]: 16,
      },
    },
  },
  {
    id: ids.RancidGasPotion,
    name: 'Rancid Gas Potion',
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 96, y: 96},
        [BasePropertyType.Quantity]: 200,
        [BasePropertyType.RequiredLevel]: 24,
      },
    },
  },
]);
