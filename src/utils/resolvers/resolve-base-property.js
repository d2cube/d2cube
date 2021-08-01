import {BasePropertyType} from '../../enums/index.js';

export const resolveBaseProperty = (item) => (entry) => {
  const {type} = item;
  const property = entry[0];
  const {values} = entry[1];

  // TODO: remove this guard after refactor
  if (!values) {
    return '';
  }

  const [x, y] = values;

  switch (property) {
    case BasePropertyType.AttackSpeed:
      return `${type} Class - ${getAttackSpeedDescription(x)} Attack Speed`;
    case BasePropertyType.BlockChance:
      return `Chance to Block: ${x}%`;
    case BasePropertyType.Damage1H:
      return `One-hand Damage: ${x} to ${y}`;
    case BasePropertyType.Damage2H:
      return `Two-hand Damage: ${x} to ${y}`;
    case BasePropertyType.DamageThrow:
      return `Throw Damage: ${x} to ${y}`;
    case BasePropertyType.Defense:
      return `Defense: ${x}`;
    case BasePropertyType.Durability:
      return `Durability: ${x} of ${x}`;
    case BasePropertyType.MinimumDexterity:
      return `Required Dexterity: ${x}`;
    case BasePropertyType.MinimumStrength:
      return `Required Strength: ${x}`;
    default:
      return '';
  }
};

// TODO: confirm logic
const getAttackSpeedDescription = (value) => {
  let description;
  if (value >= 20) {
    description = 'Very Slow';
  } else if (value >= 10) {
    description = 'Slow';
  } else if (value >= 0) {
    description = 'Normal';
  } else if (value >= -10) {
    description = 'Fast';
  } else {
    description = 'Very Fast';
  }

  return description;
};
