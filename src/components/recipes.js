import {Layout} from 'uinix-ui';

import Recipe from './recipe.js';
import Button from './ui/button.js';

const Recipes = ({recipes, onClear}) => (
  <Layout direction="column" spacing="m">
    {recipes.map((recipe) => (
      <Recipe key={recipe.id} recipe={recipe} />
    ))}
    <Button size="s" text="Clear" onClick={onClear} />
  </Layout>
);

export default Recipes;
