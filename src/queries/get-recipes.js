import db from '../db/index.js';
import {DEPRECATED_createItem} from '../utils/create-item.js';

/**
 * Returns true and removes the item if it is found in the stack.
 *
 * Mutates the stack.
 */
const findItem = (stack, sourceItem, test) => {
  for (let i = 0; i < stack.length; i++) {
    const item = stack[i];
    const hasMatch = test ? test(item) : sourceItem.id === item.id;

    if (hasMatch) {
      stack.splice(i, 1);
      return item;
    }
  }

  return null;
};

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
      const sourceItem = source.item;
      const matchedItem = findItem(itemStack, sourceItem, source.test);
      const isInactive = showAvailable ? !matchedItem : false;
      const item = DEPRECATED_createItem(
        showAvailable ? matchedItem || sourceItem : sourceItem,
      );
      sources.push({item, isInactive});

      if (isInactive) {
        inactiveSourceCount++;
      }
    });

    const hasInactiveSources = inactiveSourceCount > 0;
    const hasAllInactiveSources = inactiveSourceCount === sources.length;

    if (!(showAvailable && hasAllInactiveSources)) {
      const {event, item: targetItem, transform} = recipe.target;
      recipes.push({
        ...recipe,
        sources,
        target: event || {
          item: transform
            ? transform(sources.map((source) => source.item))
            : targetItem,
          isInactive: hasInactiveSources,
        },
      });
    }
  });

  return recipes;
};
