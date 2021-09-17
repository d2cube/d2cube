import {merge} from 'uinix-fp';
import {v4 as uuid} from 'uuid';

export const createRecipes = (data) => (recipes) =>
  recipes.map((recipe) => merge({...data, id: uuid()})(recipe));
