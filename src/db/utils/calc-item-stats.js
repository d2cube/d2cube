import {merge, pipe, props} from 'uinix-fp';

import {BasePropertyType, MagicPropertyType} from '../../enums/index.js';
import {multiply, percent} from '../../utils/fp.js';

export const calcItemStats = (item) => {
  const baseProperties = props('properties.base')(item) || {};
  const magicProperties = props('properties.magic')(item) || {};
  const setProperties = props('properties.set')(item) || {};

  return pipe([
    withBaseProperties(baseProperties),
    withMagicProperties(magicProperties),
    withSetProperties(setProperties),
  ])({});
};

const withBaseProperties = (baseProperties) => (stats) => {
  Object.entries(baseProperties).forEach(([baseProperty, values]) => {
    stats[baseProperty] = {values};
  });
  return stats;
};

const withMagicProperties = (magicProperties) => (stats) => {
  Object.entries(magicProperties).forEach(([magicProperty, values]) => {
    stats[magicProperty] = {type: 'magic', values};

    // Base properties enhanced by magic properties
    switch (magicProperty) {
      case MagicPropertyType.EnhancedDamage: {
        [
          BasePropertyType.Damage1H,
          BasePropertyType.Damage2H,
          BasePropertyType.DamageThrow,
        ].forEach((baseProperty) => {
          if (stats[baseProperty]) {
            stats[baseProperty].type = 'magic';
            stats[baseProperty].values = enhanceDamage(
              stats[baseProperty].values,
              values,
            );
          }
        });
        break;
      }

      // TODO: figure out logic for Gear-IAS (GIAS)
      case MagicPropertyType.IncreasedAttackSpeed: {
        stats[BasePropertyType.AttackSpeed].type = 'magic';
        break;
      }

      default:
        break;
    }
  });

  return stats;
};

const withSetProperties = (properties) => (stats) => merge(properties)(stats);

const multiplyMap = (x) => (xs) => xs.map(multiply(x));

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
