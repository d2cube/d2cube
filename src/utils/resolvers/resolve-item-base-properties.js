import {filter, props} from 'uinix-fp';

import {BasePropertyType} from '../../enums/base-property-type.js';
import {sortEntriesBy} from '../fp.js';
import {resolveBaseProperty} from './resolve-base-property.js';

export const resolveItemBaseProperties = (item) => {
  const baseProperties = props('properties.base')(item);
  if (!baseProperties) {
    return [];
  }

  const entries = sortEntriesBy(order)(Object.entries(baseProperties));

  return filter()(entries.map(resolveBaseProperty(item)));
};

const order = [
  BasePropertyType.DamageThrow,
  BasePropertyType.Damage1H,
  BasePropertyType.Damage2H,
  BasePropertyType.Defense,
  BasePropertyType.BlockChance,
  BasePropertyType.Durability,
  BasePropertyType.AttackSpeed,
  BasePropertyType.RequiredDexterity,
  BasePropertyType.RequiredStrength,
];
