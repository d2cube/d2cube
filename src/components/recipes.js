import React, {useState} from 'react';
import {Layout} from 'uinix-ui';

import {getRecipes} from '../api/index.js';
import {RecipeType} from '../enums/index.js';
import Item from './item.js';
import Recipe from './recipe.js';
import Button from './ui/button.js';

const Recipes = ({items}) => {
  const [showAvailable, setShowAvailable] = useState(false);
  const [selectedRecipeType, setSelectedRecipeType] = useState('');

  const filters = [];
  if (selectedRecipeType) {
    filters.push({
      key: 'type',
      value: selectedRecipeType,
    });
  }

  const recipes = getRecipes({
    items,
    filters,
    showAvailable,
  });

  const handleUpdateRecipeType = (event) =>
    setSelectedRecipeType(event.target.value);

  return (
    <div>
      <Layout align="center" spacing="m">
        <Button
          text={showAvailable ? 'Show all' : 'Show available'}
          onClick={() => setShowAvailable(!showAvailable)}
        />
        <select value={selectedRecipeType} onChange={handleUpdateRecipeType}>
          <option value="" />
          {Object.values(RecipeType).map((recipeType) => (
            <option key={recipeType} value={recipeType}>
              {recipeType}
            </option>
          ))}
        </select>
      </Layout>
      <p>{recipes.length} recipes found</p>
      <Layout wrap align="flex-end" spacing="m">
        {items.map((item) => (
          <Item key={item.uuid} item={item} />
        ))}
      </Layout>
      <Layout as="ul" direction="column" spacing="s">
        {recipes.map((recipe) => (
          <Recipe key={recipe.name} recipe={recipe} />
        ))}
      </Layout>
    </div>
  );
};

export default Recipes;
