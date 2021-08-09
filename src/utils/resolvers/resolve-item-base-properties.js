import {props} from 'uinix-fp';

import {BasePropertyType, MagicPropertyType} from '../../enums/index.js';
import {add, isEmpty, multiply, percent} from '../fp.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemBaseProperties = (item) => {
  const baseProperties = props('properties.base')(item) || {};

  const results = [];
  Object.entries(baseProperties).forEach((entry) => {
    const [property] = entry;
    const {isEnhanced, values} = enhanceWithStats(item.stats)(entry);
    const resolved =
      !isEmpty(values) && resolveItemProperty(item)({property, values});
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
    case BasePropertyType.AttackSpeed: {
      return enhance(MagicPropertyType.IncreasedAttackSpeed)({
        values,
        stats,
      });
    }

    case BasePropertyType.Damage1H:
    case BasePropertyType.Damage2H:
    case BasePropertyType.DamageThrow: {
      const enhanced = enhance(MagicPropertyType.EnhancedDamage)({
        values,
        stats,
      });
      return enhance(MagicPropertyType.Damage)({
        values: enhanced.values,
        stats,
        wasEnhanced: enhanced.isEnhanced,
      });
    }

    case BasePropertyType.BaseDefense: {
      const enhanced = enhance(MagicPropertyType.EnhancedDefense)({
        values,
        stats,
      });
      return enhance(MagicPropertyType.Defense)({
        values: enhanced.values,
        stats,
        wasEnhanced: enhanced.isEnhanced,
      });
    }

    case BasePropertyType.BlockChance: {
      return enhance(MagicPropertyType.IncreasedChanceOfBlocking)({
        values,
        stats,
      });
    }

    case BasePropertyType.Durability: {
      return enhance(MagicPropertyType.Indestructible)({
        values,
        stats,
      });
    }

    case BasePropertyType.RequiredDexterity:
    case BasePropertyType.RequiredStrength: {
      return enhance(MagicPropertyType.Requirements)({
        values,
        stats,
      });
    }

    default:
      return {isEnhanced: false, values};
  }
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

const multiplyMap = (x) => (xs) => xs.map(multiply(x));

const addDefense = (values, enhanced) =>
  Array.isArray(values) ? values.map(add(enhanced)) : add(enhanced)(values);

// TODO: this is incorrect.  Find the official implementation.
const ias = (values, enhanced) => {
  const delta = Math.abs(values) * percent(enhanced);
  return values - delta;
};

const icb = (values, enhanced) => values + enhanced;

const indestructible = (values, enhanced) => (enhanced ? null : values);

const addDamage = ({x, y}, enhanced) => {
  if (Array.isArray(x) && Array.isArray(y)) {
    return {
      x: x.map(add(enhanced.x)),
      y: y.map(add(enhanced.y)),
    };
  }

  return {
    x: x + enhanced.x,
    y: y + enhanced.y,
  };
};

const requirements = (values, enhanced) => multiply(values)(percent(enhanced));

const enhanceDamage = ({x, y}, enhanced) => {
  if (Array.isArray(enhanced)) {
    const ps = enhanced.map(percent);
    return {
      x: multiplyMap(x)(ps),
      y: multiplyMap(y)(ps),
    };
  }

  const p = percent(enhanced);
  return {
    x: multiply(p)(x),
    y: multiply(p)(y),
  };
};

const enhanceDefense = (values, enhanced) => {
  const max = values[1];

  if (Array.isArray(enhanced)) {
    return enhanced.map((ee) => enhanceDefense(values, ee));
  }

  const p = percent(enhanced);
  return Math.floor((max + 1) * p);
};

const enhancers = {
  [MagicPropertyType.Defense]: addDefense,
  [MagicPropertyType.Damage]: addDamage,
  [MagicPropertyType.EnhancedDamage]: enhanceDamage,
  [MagicPropertyType.EnhancedDefense]: enhanceDefense,
  [MagicPropertyType.IncreasedAttackSpeed]: ias,
  [MagicPropertyType.IncreasedChanceOfBlocking]: icb,
  [MagicPropertyType.Indestructible]: indestructible,
  [MagicPropertyType.Requirements]: requirements,
};
