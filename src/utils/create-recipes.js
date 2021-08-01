import {merge} from 'uinix-fp';

export const createRecipes = (data) => (recipes) =>
  recipes.map((recipe) => merge(data)(recipe));
