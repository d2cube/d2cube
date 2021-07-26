import {ItemPropertyType} from '../enums/index.js';

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

export const mapItemOffenseProperties = (item) => {
  const {clvl, ilvl, properties, type} = item;

  const description = [];

  description.push({
    text: `Item Level: ${ilvl}`,
  });

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

  if (properties[ItemPropertyType.Durability]) {
    description.push({
      text: `Durability: ${properties[ItemPropertyType.Durability]}`,
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

  if (clvl) {
    description.push({
      text: `Required Level: ${clvl}`,
    });
  }

  description.push({
    text: `${type} class - ${getAttackSpeedDescription(
      properties[ItemPropertyType.AttackSpeed],
    )} attack speed`,
  });

  return description;
};
