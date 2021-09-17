import {Layout} from 'uinix-ui';

import Recipe from './recipe.js';
import Button from './ui/button.js';

const Recipes = ({recipes, onClear, onSelect}) => (
  <Layout direction="column" spacing="l">
    <Button text="Clear" onClick={onClear} />
    {recipes.map((recipe) => (
      <Layout key={recipe.id} align="center" justify="space-between">
        <Recipe recipe={recipe} />
        <Button text="Select" onClick={() => onSelect(recipe)} />
      </Layout>
    ))}
    <Button text="Clear" onClick={onClear} />
  </Layout>
);

export default Recipes;
