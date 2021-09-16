import {Layout} from 'uinix-ui';

import Recipe from './recipe.js';
import Button from './ui/button.js';

const Recipes = ({recipes, onClear}) => (
  <Layout direction="column" spacing="l">
    {recipes.map((recipe) => (
      <Recipe key={recipe.id} recipe={recipe} />
    ))}
    <Button text="Clear" onClick={onClear} />
  </Layout>
);

export default Recipes;
