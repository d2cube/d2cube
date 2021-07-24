import {ItemType, PotionCategoryType} from '../enums/index.js';
import {mapItemProps} from '../utils/map-item-props.js';
import ids from '../ids/index.js';

const items = {
  [ids.MinorHealingPotion]: {
    id: ids.MinorHealingPotion,
    category: PotionCategoryType.Health,
    name: 'Minor Healing Potion',
  },
  [ids.LightHealingPotion]: {
    id: ids.LightHealingPotion,
    category: PotionCategoryType.Health,
    name: 'Light Healing Potion',
  },
  [ids.HealingPotion]: {
    id: ids.HealingPotion,
    category: PotionCategoryType.Health,
    name: 'Healing Potion',
  },
  [ids.GreaterHealingPotion]: {
    id: ids.GreaterHealingPotion,
    category: PotionCategoryType.Health,
    name: 'Greater Healing Potion',
  },
  [ids.SuperHealingPotion]: {
    id: ids.SuperHealingPotion,
    category: PotionCategoryType.Health,
    name: 'Super Healing Potion',
  },
  [ids.MinorManaPotion]: {
    id: ids.MinorManaPotion,
    category: PotionCategoryType.Mana,
    name: 'Minor Mana Potion',
  },
  [ids.LightManaPotion]: {
    id: ids.LightManaPotion,
    category: PotionCategoryType.Mana,
    name: 'Light Mana Potion',
  },
  [ids.ManaPotion]: {
    id: ids.ManaPotion,
    category: PotionCategoryType.Mana,
    name: 'Mana Potion',
  },
  [ids.GreaterManaPotion]: {
    id: ids.GreaterManaPotion,
    category: PotionCategoryType.Mana,
    name: 'Greater Mana Potion',
  },
  [ids.SuperManaPotion]: {
    id: ids.SuperManaPotion,
    category: PotionCategoryType.Mana,
    name: 'Super Mana Potion',
  },
  [ids.RejuvenationPotion]: {
    id: ids.RejuvenationPotion,
    category: PotionCategoryType.Rejuvenation,
    name: 'Rejuvenation Potion',
  },
  [ids.FullRejuvenationPotion]: {
    id: ids.FullRejuvenationPotion,
    category: PotionCategoryType.Rejuvenation,
    name: 'Full Rejuvenation Potion',
  },
  [ids.AntidotePotion]: {
    id: ids.AntidotePotion,
    category: PotionCategoryType.Other,
    name: 'Antidote Potion',
  },
  [ids.ThawingPotion]: {
    id: ids.ThawingPotion,
    category: PotionCategoryType.Other,
    name: 'Thawing Potion',
  },
  [ids.StaminaPotion]: {
    id: ids.StaminaPotion,
    category: PotionCategoryType.Other,
    name: 'Stamina Potion',
  },
  [ids.FulminatingPotion]: {
    id: ids.FulminatingPotion,
    category: PotionCategoryType.Other,
    name: 'Fulminating Potion',
    clvl: 6,
  },
  [ids.ExplodingPotion]: {
    id: ids.ExplodingPotion,
    category: PotionCategoryType.Other,
    name: 'Exploding Potion',
    clvl: 12,
  },
  [ids.OilPotion]: {
    id: ids.OilPotion,
    category: PotionCategoryType.Other,
    name: 'Oil Potion',
    clvl: 20,
  },
  [ids.StranglingGasPotion]: {
    id: ids.StranglingGasPotion,
    category: PotionCategoryType.Other,
    name: 'Strangling Gas Potion',
    clvl: 6,
  },
  [ids.ChokingGasPotion]: {
    id: ids.ChokingGasPotion,
    category: PotionCategoryType.Other,
    name: 'Choking Gas Potion',
    clvl: 16,
  },
  [ids.RancidGasPotion]: {
    id: ids.RancidGasPotion,
    category: PotionCategoryType.Other,
    name: 'Rancid Gas Potion',
    clvl: 24,
  },
};

export default mapItemProps({
  size: [1, 1],
  type: ItemType.Potion,
  mapDescription: (item) => [[{text: item.name}]],
})(items);
