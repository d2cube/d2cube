import {BasePropertyType} from '../../enums/index.js';
import {sortEntriesBy} from '../fp.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemStats = (item) => {
  const entries = sortEntriesBy(order)(Object.entries(item.stats));

  return entries.map(([property, stat]) => {
    const {type, values} = stat;
    const text = resolveItemProperty(item)({property, values});

    return {text, color: type};
  });
};

const order = [
  BasePropertyType.DamageThrow,
  BasePropertyType.Damage1H,
  BasePropertyType.Damage2H,
  BasePropertyType.ArmorDefense,
  BasePropertyType.BlockChance,
  BasePropertyType.Durability,
  BasePropertyType.AttackSpeed,
  BasePropertyType.RequiredDexterity,
  BasePropertyType.RequiredStrength,
];
