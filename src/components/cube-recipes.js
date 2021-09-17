import {Layout} from 'uinix-ui';

import {getRecipes} from '../api/index.js';
import {PREVIEWS} from '../constants/index.js';
import Recipes from './recipes.js';
import Frame from './ui/frame.js';

const CubeRecipes = ({onClear, onSelect}) => (
  <Frame
    isFixedHeight
    help={help}
    preview={PREVIEWS.cube}
    size="m"
    title="Recipes"
  >
    <Layout direction="column" overflow="auto">
      <Recipes recipes={recipes} onClear={onClear} onSelect={onSelect} />
    </Layout>
  </Frame>
);

const help = (
  <div>
    <p>Search for a Cube recipe to load components into the Cube.</p>
    <p>
      Use the Horadric Cube to transmute items into new items by clicking on the
      Transmute button.
    </p>
  </div>
);

const recipes = getRecipes();

export default CubeRecipes;
