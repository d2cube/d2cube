import {random} from '../../utils/random.js';
import {BasePropertyType} from '../../enums/index.js';
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

  if (properties[BasePropertyType.DamageThrow]) {
    description.push({
      text: `Throw Damage: ${properties[BasePropertyType.DamageThrow].join(
        ' to ',
      )}`,
    });
  }

  if (properties[BasePropertyType.Damage1H]) {
    description.push({
      text: `One-hand Damage: ${properties[BasePropertyType.Damage1H].join(
        ' to ',
      )}`,
    });
  }

  if (properties[BasePropertyType.Damage2H]) {
    description.push({
      text: `Two-hand Damage: ${properties[BasePropertyType.Damage2H].join(
        ' to ',
      )}`,
    });
  }

  if (properties[BasePropertyType.Defense]) {
    const defense = properties[BasePropertyType.Defense];
    description.push({
      text: `Defense: ${random(defense[0], defense[1])}`,
    });
  }

  if (properties[BasePropertyType.BlockChance]) {
    const blockChance = properties[BasePropertyType.BlockChance];
    description.push({
      text: `Chance to Block: ${blockChance}%`,
    });
  }

  if (properties[BasePropertyType.Durability]) {
    const maxDurability = properties[BasePropertyType.Durability];
    description.push({
      text: `Durability: ${
        item.durability || random(0, maxDurability)
      } of ${maxDurability}`,
    });
  }

  if (properties[BasePropertyType.MinimumDexterity]) {
    description.push({
      text: `Required Dexterity: ${
        properties[BasePropertyType.MinimumDexterity]
      }`,
    });
  }

  if (properties[BasePropertyType.MinimumStrength]) {
    description.push({
      text: `Required Strength: ${
        properties[BasePropertyType.MinimumStrength]
      }`,
    });
  }

  if (item.clvl) {
    description.push(mapItemClvl(item));
  }

  if (BasePropertyType.AttackSpeed in properties) {
    description.push({
      text: `${type} class - ${getAttackSpeedDescription(
        properties[BasePropertyType.AttackSpeed],
      )} attack speed`,
    });
  }

  return description;
};
