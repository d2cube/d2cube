import {props} from 'uinix-fp';

import {BasePropertyType, MagicPropertyType} from '../../enums/index.js';
import {add, multiply, percent, sortEntriesBy} from '../fp.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemBaseProperties = (item) => {
  const baseProperties = props('properties.base')(item) || {};
  const entries = sortEntriesBy(basePropertiesOrder)(
    Object.entries(baseProperties),
  );

  const results = [];
  entries.forEach((entry) => {
    const [property] = entry;
    const {isEnhanced, values} = enhanceWithStats(item.stats)(entry);
    const resolved = values && resolveItemProperty(item)({property, values});
    if (resolved) {
      const [label, valueText] = resolved;
      results.push([
        label,
        {text: valueText, color: isEnhanced ? 'magic' : null},
      ]);
    }
  });

  return results;
};

const enhanceWithStats = (stats) => (entry) => {
  const [property, values] = entry;

  switch (property) {
    case BasePropertyType.Damage1H:
    case BasePropertyType.Damage2H:
    case BasePropertyType.DamageThrow: {
      return enhance(MagicPropertyType.EnhancedDamage)({values, stats});
    }

    case BasePropertyType.Defense: {
      const enhanced = enhance(MagicPropertyType.EnhancedDefense)({
        values,
        stats,
      });
      return enhance(MagicPropertyType.AddDefense)({
        values: enhanced.values,
        stats,
        wasEnhanced: enhanced.isEnhanced,
      });
    }

    case BasePropertyType.Durability:
      return enhance(MagicPropertyType.Indestructible)({values, stats});
    default:
      break;
  }

  return {isEnhanced: false, values};
};

const enhance =
  (magicProperty) =>
  ({values, stats, wasEnhanced = false}) => {
    const enhancedValues = stats[magicProperty];
    const isEnhanced = Boolean(enhancedValues);
    const enhancer = enhancers[magicProperty];

    return {
      isEnhanced: wasEnhanced || isEnhanced,
      values: isEnhanced ? enhancer(values, enhancedValues) : values,
    };
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
  BasePropertyType.AttackSpeed,
];

const multiplyMap = (x) => (xs) => xs.map(multiply(x));

const addDefense = (values, x) => values.map(add(x));

const indestructible = (values, x) => (x ? null : values);

const enhanceDamage = ({min, max}, x) => {
  if (Array.isArray(x)) {
    const ps = x.map(percent);
    return {
      min: multiplyMap(min)(ps),
      max: multiplyMap(max)(ps),
    };
  }

  const p = percent(x);
  return {
    min: multiply(p)(min),
    max: multiply(p)(max),
  };
};

const enhanceDefense = (values, x) => {
  const max = values[1];

  if (Array.isArray(x)) {
    return x.map((xx) => enhanceDefense(values, xx));
  }

  const p = percent(x);
  return Math.floor((max + 1) * p);
};

const enhancers = {
  [MagicPropertyType.AddDefense]: addDefense,
  [MagicPropertyType.EnhancedDamage]: enhanceDamage,
  [MagicPropertyType.EnhancedDefense]: enhanceDefense,
  [MagicPropertyType.Indestructible]: indestructible,
};
