import db from '../db/index.js';
import {rollItem} from '../utils/roll-item.js';

export const getRecipes = () => {
  const recipes = [];

  db.recipes.forEach((recipe) => {
    const sources = [];
    recipe.sources.forEach((source) => {
      const sourceItem = source.item;
      const item = rollItem(sourceItem);
      sources.push(item);
    });
    const {event, item: targetItem, transform} = recipe.target;
    recipes.push({
      ...recipe,
      sources,
      target: event
        ? {isEvent: true, text: event}
        : transform
        ? transform(sources)
        : rollItem(targetItem),
    });
  });

  return recipes;
};
