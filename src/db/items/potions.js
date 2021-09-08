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
    tier: 1,
  },
  {
    id: ids.LightHealingPotion,
    name: 'Light Healing Potion',
    class: PotionClassType.Health,
    tier: 2,
  },
  {
    id: ids.HealingPotion,
    name: 'Healing Potion',
    class: PotionClassType.Health,
    tier: 3,
  },
  {
    id: ids.GreaterHealingPotion,
    name: 'Greater Healing Potion',
    class: PotionClassType.Health,
    tier: 4,
  },
  {
    id: ids.SuperHealingPotion,
    name: 'Super Healing Potion',
    class: PotionClassType.Health,
    tier: 5,
  },
  {
    id: ids.MinorManaPotion,
    name: 'Minor Mana Potion',
    class: PotionClassType.Mana,
    tier: 1,
  },
  {
    id: ids.LightManaPotion,
    name: 'Light Mana Potion',
    class: PotionClassType.Mana,
    tier: 2,
  },
  {
    id: ids.ManaPotion,
    name: 'Mana Potion',
    class: PotionClassType.Mana,
    tier: 3,
  },
  {
    id: ids.GreaterManaPotion,
    name: 'Greater Mana Potion',
    class: PotionClassType.Mana,
    tier: 4,
  },
  {
    id: ids.SuperManaPotion,
    name: 'Super Mana Potion',
    class: PotionClassType.Mana,
    tier: 5,
  },
  {
    id: ids.RejuvenationPotion,
    name: 'Rejuvenation Potion',
    class: PotionClassType.Rejuvenation,
    tier: 1,
  },
  {
    id: ids.FullRejuvenationPotion,
    name: 'Full Rejuvenation Potion',
    class: PotionClassType.Rejuvenation,
    tier: 2,
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
    tier: 1,
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
    tier: 2,
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
    tier: 3,
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
    tier: 1,
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
    tier: 2,
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
    tier: 3,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: {x: 96, y: 96},
        [BasePropertyType.Quantity]: 200,
        [BasePropertyType.RequiredLevel]: 24,
      },
    },
  },
]);
