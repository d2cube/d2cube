import React, {useState} from 'react';
import {Layout} from 'uinix-ui';

import {getRecipes} from '../queries/index.js';
import {Recipe} from './recipe.js';

export const Recipes = ({items}) => {
  const [shouldFilter, setShouldFilter] = useState(false);
  const recipes = getRecipes({items, shouldFilter});

  return (
    <div>
      <button type="button" onClick={() => setShouldFilter(!shouldFilter)}>
        {shouldFilter ? 'Unfilter' : 'Filter'}
      </button>
      <p>{recipes.length} recipes found</p>
      <Layout as="ul" direction="column" spacing="s">
        {recipes.map((recipe) => (
          <Recipe key={recipe.name} recipe={recipe} />
        ))}
      </Layout>
    </div>
  );
};
