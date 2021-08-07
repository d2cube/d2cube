import {props} from 'uinix-fp';

import {BasePropertyType} from '../../enums/index.js';
import {sortEntriesBy} from '../fp.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemBaseProperties = (item) => {
  const baseProperties = props('properties.base')(item) || {};
  const entries = sortEntriesBy(basePropertiesOrder)(
    Object.entries(baseProperties),
  );

  const results = [];
  entries.forEach(([property, values]) => {
    const resolved = resolveItemProperty(item)({property, values});
    if (resolved) {
      results.push(resolved);
    }
  });

  return results;
};

const basePropertiesOrder = [
  BasePropertyType.DamageThrow,
  BasePropertyType.Damage1H,
  BasePropertyType.Damage2H,
  BasePropertyType.Defense,
  BasePropertyType.BlockChance,
  BasePropertyType.Durability,
  BasePropertyType.RequiredDexterity,
  BasePropertyType.RequiredStrength,
  BasePropertyType.RequiredLevel,
  BasePropertyType.QualityLevel,
  BasePropertyType.AttackSpeed,
];
