import {ItemType, PotionClassType} from '../../enums/index.js';
import {mapItems} from '../utils/map-items.js';
import ids from '../ids/index.js';

const items = {
  [ids.MinorHealingPotion]: {
    id: ids.MinorHealingPotion,
    class: PotionClassType.Health,
    name: 'Minor Healing Potion',
  },
  [ids.LightHealingPotion]: {
    id: ids.LightHealingPotion,
    class: PotionClassType.Health,
    name: 'Light Healing Potion',
  },
  [ids.HealingPotion]: {
    id: ids.HealingPotion,
    class: PotionClassType.Health,
    name: 'Healing Potion',
  },
  [ids.GreaterHealingPotion]: {
    id: ids.GreaterHealingPotion,
    class: PotionClassType.Health,
    name: 'Greater Healing Potion',
  },
  [ids.SuperHealingPotion]: {
    id: ids.SuperHealingPotion,
    class: PotionClassType.Health,
    name: 'Super Healing Potion',
  },
  [ids.MinorManaPotion]: {
    id: ids.MinorManaPotion,
    class: PotionClassType.Mana,
    name: 'Minor Mana Potion',
  },
  [ids.LightManaPotion]: {
    id: ids.LightManaPotion,
    class: PotionClassType.Mana,
    name: 'Light Mana Potion',
  },
  [ids.ManaPotion]: {
    id: ids.ManaPotion,
    class: PotionClassType.Mana,
    name: 'Mana Potion',
  },
  [ids.GreaterManaPotion]: {
    id: ids.GreaterManaPotion,
    class: PotionClassType.Mana,
    name: 'Greater Mana Potion',
  },
  [ids.SuperManaPotion]: {
    id: ids.SuperManaPotion,
    class: PotionClassType.Mana,
    name: 'Super Mana Potion',
  },
  [ids.RejuvenationPotion]: {
    id: ids.RejuvenationPotion,
    class: PotionClassType.Rejuvenation,
    name: 'Rejuvenation Potion',
  },
  [ids.FullRejuvenationPotion]: {
    id: ids.FullRejuvenationPotion,
    class: PotionClassType.Rejuvenation,
    name: 'Full Rejuvenation Potion',
  },
  [ids.AntidotePotion]: {
    id: ids.AntidotePotion,
    class: PotionClassType.Other,
    name: 'Antidote Potion',
  },
  [ids.ThawingPotion]: {
    id: ids.ThawingPotion,
    class: PotionClassType.Other,
    name: 'Thawing Potion',
  },
  [ids.StaminaPotion]: {
    id: ids.StaminaPotion,
    class: PotionClassType.Other,
    name: 'Stamina Potion',
  },
  [ids.FulminatingPotion]: {
    id: ids.FulminatingPotion,
    class: PotionClassType.Other,
    name: 'Fulminating Potion',
    clvl: 6,
  },
  [ids.ExplodingPotion]: {
    id: ids.ExplodingPotion,
    class: PotionClassType.Other,
    name: 'Exploding Potion',
    clvl: 12,
  },
  [ids.OilPotion]: {
    id: ids.OilPotion,
    class: PotionClassType.Other,
    name: 'Oil Potion',
    clvl: 20,
  },
  [ids.StranglingGasPotion]: {
    id: ids.StranglingGasPotion,
    class: PotionClassType.Other,
    name: 'Strangling Gas Potion',
    clvl: 6,
  },
  [ids.ChokingGasPotion]: {
    id: ids.ChokingGasPotion,
    class: PotionClassType.Other,
    name: 'Choking Gas Potion',
    clvl: 16,
  },
  [ids.RancidGasPotion]: {
    id: ids.RancidGasPotion,
    class: PotionClassType.Other,
    name: 'Rancid Gas Potion',
    clvl: 24,
  },
};

export default mapItems({
  size: [1, 1],
  type: ItemType.Potion,
  mapDescription: (item) => [[{text: item.name}]],
})(items);
