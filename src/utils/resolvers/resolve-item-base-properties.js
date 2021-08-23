/**
 * TODO: cleanup this file after consolidating enhanced stats
 */

import {isPlainObject, props} from 'uinix-fp';

import {BasePropertyType, MagicPropertyType} from '../../enums/index.js';
import {formatValues} from '../format-values.js';
import {add, isEmpty, min, multiply, percent} from '../fp.js';
import {resolveItemProperty} from './resolve-item-property.js';

export const resolveItemBaseProperties = (item) => {
  const baseProperties = props('properties.base')(item) || {};

  const results = [];
  Object.entries(baseProperties).forEach((entry) => {
    const [property] = entry;
    const {isEnhanced, values, byLevel} = enhanceWithStats(item.stats)(entry);
    const resolved =
      !isEmpty(values) && resolveItemProperty(item)({property, values});
    if (resolved) {
      const [label, valueText] = resolved;
      const result = [
        label,
        {text: valueText, color: isEnhanced ? 'magic' : null},
      ];
      if (byLevel) {
        result.push({text: byLevel, color: 'magic'});
      }

      results.push(result);
    }
  });

  return results;
};

const enhanceWithStats =
  (stats = {}) =>
  (entry) => {
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
        let enhanced = enhance(MagicPropertyType.EnhancedDamage)({
          values,
          stats,
        });
        enhanced = enhance(MagicPropertyType.MinimumDamage)({
          values: enhanced.values,
          stats,
          wasEnhanced: enhanced.isEnhanced,
        });
        enhanced = enhance(MagicPropertyType.MaximumDamage)({
          values: enhanced.values,
          stats,
          wasEnhanced: enhanced.isEnhanced,
        });
        enhanced = enhance(MagicPropertyType.AddDamage)({
          values: enhanced.values,
          stats,
          wasEnhanced: enhanced.isEnhanced,
        });
        enhanced = enhanceByLevel(
          stats[MagicPropertyType.MaximumDamageByLevel],
        )(enhanced);
        return enhance(MagicPropertyType.Ethereal)({
          values: enhanced.values,
          stats,
          wasEnhanced: enhanced.isEnhanced,
        });
      }

      case BasePropertyType.BaseDefense: {
        let enhanced = enhance(MagicPropertyType.EnhancedDefense)({
          values,
          stats,
        });
        enhanced = enhance(MagicPropertyType.Defense)({
          values: enhanced.values,
          stats,
          wasEnhanced: enhanced.isEnhanced,
        });
        return enhanceByLevel(stats[MagicPropertyType.DefenseByLevel])(
          enhanced,
        );
      }

      case BasePropertyType.BlockChance: {
        return enhance(MagicPropertyType.IncreasedChanceOfBlocking)({
          values,
          stats,
        });
      }

      case BasePropertyType.Durability: {
        const enhanced = enhance(MagicPropertyType.AddDurability)({
          values,
          stats,
        });
        return enhance(MagicPropertyType.Indestructible)({
          values: enhanced.values,
          stats,
          wasEnhanced: enhanced.isEnhanced,
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

const enhanceByLevel = (valuePerLevel) => (enhanced) => ({
  ...enhanced,
  byLevel: isEmpty(valuePerLevel)
    ? undefined
    : ` (+${formatValues([valuePerLevel, valuePerLevel * 99])})`,
});

const multiplyMap = (x) => (xs) => xs.map(multiply(x));

const sumArray = (x) => (y) => x.map((xx, i) => xx + y[i]);

const addDefense = (values, enhanced) => {
  if (Array.isArray(enhanced)) {
    return enhanced.map((v, i) =>
      add(v)(Array.isArray(values) ? values[i] : values),
    );
  }

  return Array.isArray(values)
    ? values.map(add(enhanced))
    : add(enhanced)(values);
};

// TODO: this is incorrect.  Find the official implementation.
const ias = (values, enhanced) => {
  const delta = Math.abs(values) * percent(enhanced);
  return values - delta;
};

const icb = (values, enhanced) => {
  const MAX_BLOCK = 75;
  const minByMaxBlock = min(MAX_BLOCK);
  if (Array.isArray(enhanced)) {
    return enhanced.map(add(values)).map(minByMaxBlock);
  }

  return minByMaxBlock(values + enhanced);
};

const indestructible = (values, enhanced) => (enhanced ? null : values);

const addDamage = ({x, y}, enhanced) => {
  if (Array.isArray(x) && Array.isArray(y)) {
    const newX = Array.isArray(enhanced.x)
      ? sumArray(x)(enhanced.x)
      : x.map(add(enhanced.x));
    const newY = Array.isArray(enhanced.y)
      ? sumArray(y)(enhanced.y)
      : y.map(add(enhanced.y));
    return {
      x: newX,
      y: newY,
    };
  }

  return {
    x: x + enhanced.x,
    y: y + enhanced.y,
  };
};

const addDurability = (values, enhanced) => {
  if (Array.isArray(enhanced)) {
    return enhanced.map((v, i) =>
      add(v)(Array.isArray(values) ? values[i] : values),
    );
  }

  return Array.isArray(values)
    ? values.map(add(enhanced))
    : add(enhanced)(values);
};

const addMaxDamage = ({x, y}, enhanced) => {
  if (Array.isArray(enhanced)) {
    const newY = Array.isArray(y) ? sumArray(enhanced)(y) : y;
    return {
      x,
      y: newY,
    };
  }

  if (Array.isArray(x)) {
    return {
      x,
      y: y.map(add(enhanced)),
    };
  }

  return {
    x,
    y: y + enhanced,
  };
};

const addMinDamage = ({x, y}, enhanced) => {
  if (Array.isArray(enhanced)) {
    const newX = enhanced.map(add(x));
    return {
      x: newX,
      y: newX.map((xx) => Math.max(y, xx + 1)),
    };
  }

  if (Array.isArray(x)) {
    const newX = x.map(add(enhanced));
    return {
      x: newX,
      y: y.map((yy) => Math.max(Math.max(...x), yy)),
    };
  }

  const newX = x + enhanced;
  return {
    x: newX,
    y: Math.max(y, newX + 1),
  };
};

const requirements = (values, enhanced) => multiply(values)(percent(enhanced));

const ethereal = (values) => {
  if (Array.isArray(values)) {
    return values.map((value) => {
      if (isPlainObject(value)) {
        return Object.entries(value).reduce((acc, [k, v]) => {
          acc[k] = v * 1.5;
          return acc;
        }, {});
      }

      return value * 1.5;
    });
  }

  if (isPlainObject(values)) {
    return Object.entries(values).reduce((acc, [k, v]) => {
      acc[k] = Array.isArray(v) ? v.map(multiply(1.5)) : v * 1.5;
      return acc;
    }, {});
  }

  return values * 1.5;
};

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
  [MagicPropertyType.AddDamage]: addDamage,
  [MagicPropertyType.AddDurability]: addDurability,
  [MagicPropertyType.EnhancedDamage]: enhanceDamage,
  [MagicPropertyType.EnhancedDefense]: enhanceDefense,
  [MagicPropertyType.Ethereal]: ethereal,
  [MagicPropertyType.IncreasedAttackSpeed]: ias,
  [MagicPropertyType.IncreasedChanceOfBlocking]: icb,
  [MagicPropertyType.Indestructible]: indestructible,
  [MagicPropertyType.MinimumDamage]: addMinDamage,
  [MagicPropertyType.MaximumDamage]: addMaxDamage,
  [MagicPropertyType.Requirements]: requirements,
};
