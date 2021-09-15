import {useState} from 'react';
import {Layout} from 'uinix-ui';

import {getRecipes} from '../api/index.js';
import {PREVIEWS} from '../constants/index.js';
import {cubeItems} from '../mocks/index.js';
import Cube from './cube.js';
import Recipes from './recipes.js';
import Frame from './ui/frame.js';

const CubeRecipes = () => {
  const [items, setItems] = useState(cubeItems);

  const handleTransmute = () => console.log('transmute', setItems);

  const handleClear = () => console.log('clear');

  return (
    <Frame
      isFixedHeight
      preview={PREVIEWS.cube}
      size="l"
      title="Cube"
      help={help}
    >
      <Layout minH="0" spacing="xl">
        <Layout flex="1" overflow="auto">
          <Recipes recipes={recipes} onClear={handleClear} />
        </Layout>
        <Cube items={items} onTransmute={handleTransmute} />
      </Layout>
    </Frame>
  );
};

const help = (
  <div>
    <p>Search for a Cube recipe to load components into the Cube.</p>
    <p>
      Use the Horadric Cube to transmute items into new items by clicking on the
      Transmute button
    </p>
    <p>You may apply filters when searching for Cube recipes.</p>
  </div>
);

const recipes = getRecipes();

export default CubeRecipes;
