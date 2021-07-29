import {roll} from '../../utils/roll.js';
import {ItemPropertyType} from '../enums/index.js';
import {mapItemClvl} from './map-item-clvl.js';
import {mapItemIlvl} from './map-item-ilvl.js';

// TODO: confirm logic
const getAttackSpeedDescription = (value) => {
  if (value >= 20) {
    return 'Very Slow';
  }

  if (value >= 10) {
    return 'Slow';
  }

  if (value >= 0) {
    return 'Normal';
  }

  if (value >= -10) {
    return 'Fast';
  }

  return 'Very Fast';
};

// TODO: abstract and reuse for all items.
export const mapItemProperties = (item) => {
  const {properties, type} = item;

  const description = [];

  description.push(mapItemIlvl(item));

  if (properties[ItemPropertyType.DamageThrow]) {
    description.push({
      text: `Throw Damage: ${properties[ItemPropertyType.DamageThrow].join(
        ' to ',
      )}`,
    });
  }

  if (properties[ItemPropertyType.Damage1H]) {
    description.push({
      text: `One-hand Damage: ${properties[ItemPropertyType.Damage1H].join(
        ' to ',
      )}`,
    });
  }

  if (properties[ItemPropertyType.Damage2H]) {
    description.push({
      text: `Two-hand Damage: ${properties[ItemPropertyType.Damage2H].join(
        ' to ',
      )}`,
    });
  }

  if (properties[ItemPropertyType.Defense]) {
    const defense = properties[ItemPropertyType.Defense];
    description.push({
      text: `Defense: ${roll(defense[0], defense[1])}`,
    });
  }

  if (properties[ItemPropertyType.BlockChance]) {
    const blockChance = properties[ItemPropertyType.BlockChance];
    description.push({
      text: `Chance to Block: ${blockChance}%`,
    });
  }

  if (properties[ItemPropertyType.Durability]) {
    const maxDurability = properties[ItemPropertyType.Durability];
    description.push({
      text: `Durability: ${
        item.durability || roll(0, maxDurability)
      } of ${maxDurability}`,
    });
  }

  if (properties[ItemPropertyType.MinimumDexterity]) {
    description.push({
      text: `Required Dexterity: ${
        properties[ItemPropertyType.MinimumDexterity]
      }`,
    });
  }

  if (properties[ItemPropertyType.MinimumStrength]) {
    description.push({
      text: `Required Strength: ${
        properties[ItemPropertyType.MinimumStrength]
      }`,
    });
  }

  if (item.clvl) {
    description.push(mapItemClvl(item));
  }

  if (ItemPropertyType.AttackSpeed in properties) {
    description.push({
      text: `${type} class - ${getAttackSpeedDescription(
        properties[ItemPropertyType.AttackSpeed],
      )} attack speed`,
    });
  }

  return description;
};
