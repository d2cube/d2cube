import {k} from 'uinix-fp';

import {BasePropertyType} from '../../enums/index.js';

export const resolveBaseProperty =
  (item) =>
  ([property, values]) => {
    const serializer = serializers[property] || k('');
    return serializer(values, item);
  };

const serializers = {
  [BasePropertyType.AttackSpeed]: ([x], item) =>
    `Class ${item.class} - ${getAttackSpeedDescription(x)} Attack Speed`,
  [BasePropertyType.BlockChance]: ([x]) => `Chance to Block: ${x}%`,
  [BasePropertyType.Damage1H]: ([x, y]) => `One-hand Damage: ${x} to ${y}`,
  [BasePropertyType.Damage2H]: ([x, y]) => `Two-hand Damage: ${x} to ${y}`,
  [BasePropertyType.DamageThrow]: ([x, y]) => `Throw Damage: ${x} to ${y}`,
  [BasePropertyType.Defense]: ([x]) => `Defense: ${x}`,
  [BasePropertyType.Durability]: ([x]) => `Durability: ${x} of ${x}`,
  [BasePropertyType.MinimumDexterity]: ([x]) => `Required Dexterity: ${x}`,
  [BasePropertyType.MinimumStrength]: ([x]) => `Required Strength: ${x}`,
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
