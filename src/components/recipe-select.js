import {getRecipes} from '../api/index.js';
import {getRecipeTypeLabel} from '../utils/get-recipe-type-label.js';
import Recipe from './recipe.js';
import Select from './ui/select.js';

const RecipeSelect = ({value, onChange}) => (
  <Select
    filterOptionMatchMode="any"
    group={group}
    noOptionsMessage="No recipes found."
    options={options}
    placeholder='Search recipes... e.g. "rune", "cow", "socket", "ruby"'
    value={value}
    renderOption={createRenderOption(value)}
    onChange={onChange}
  />
);

const createRenderOption =
  (value) =>
  ({option, query}) =>
    (
      <Recipe
        disableItems={value === option.value}
        query={query}
        recipe={option.data}
      />
    );

const mapRecipeToOption = (recipe) => ({
  data: recipe,
  value: recipe.id,
  label: recipe.name,
});

const group = {
  key: 'data.type',
  getLabel: getRecipeTypeLabel,
};

const options = getRecipes().map(mapRecipeToOption);

export default RecipeSelect;
