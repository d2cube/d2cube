import {isPlainObject} from 'uinix-fp';

import db from '../db/index.js';
import {getItemById} from './get-item-by-id.js';

const reservedProperties = new Set(['baseDescription', 'baseId']);

/**
 * Returns true and removes the item if it is found in the stack.
 *
 * Mutates the stack.
 */
const findItem = (stack, target) => {
  for (let i = 0; i < stack.length; i++) {
    const item = stack[i];
    const properties = Object.keys(target).filter(
      (key) => !reservedProperties.has(key),
    );
    const hasMatch = properties.every(
      (property) => item[property] === target[property],
    );

    if (hasMatch) {
      stack.splice(i, 1);
      return item;
    }
  }

  return null;
};

const itemify = (x) => (isPlainObject(x) ? x : getItemById(x));

export const getRecipes = ({items = [], filters = [], showAvailable}) => {
  const recipes = [];
  const filteredRecipes =
    filters.length > 0
      ? db.recipes.filter((recipe) =>
          filters.every((filter) => {
            const {key, value} = filter;
            return recipe[key] === value;
          }),
        )
      : db.recipes;

  filteredRecipes.forEach((recipe) => {
    let inactiveSourceCount = 0;
    const itemStack = [...items];
    const sources = [];
    recipe.sources.forEach((source) => {
      const sourceItem = itemify(source);
      const matchedItem = findItem(itemStack, sourceItem);
      const isInactive = showAvailable ? !matchedItem : false;
      sources.push({
        item: showAvailable ? matchedItem || sourceItem : sourceItem,
        isInactive,
      });

      if (isInactive) {
        inactiveSourceCount++;
      }
    });

    const hasInactiveSources = inactiveSourceCount > 0;
    const hasAllInactiveSources = inactiveSourceCount === sources.length;

    if (!(showAvailable && hasAllInactiveSources)) {
      const targetItem = itemify(recipe.target);
      recipes.push({
        ...recipe,
        sources,
        target: {
          item: targetItem,
          isInactive: hasInactiveSources,
        },
      });
    }
  });

  return recipes;
};
