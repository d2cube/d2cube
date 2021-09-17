import {useState} from 'react';

import {getRecipes} from '../api/index.js';
import PageLayout from '../components/page-layout.js';
import Cube from '../components/cube.js';
import RecipeSelect from '../components/recipe-select.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import {PREVIEWS} from '../constants/index.js';
import {autoplaceCubeItems} from '../utils/autoplace-cube-items.js';
import {normalize} from '../utils/fp.js';

const Page = () => {
  const [hasTransmuted, setHasTransmuted] = useState(false);
  const [event, setEvent] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const recipe = recipesMap[selectedRecipeId];

  const disabled = hasTransmuted || !recipe?.target;

  const handleTransmute = () => {
    const {target} = recipe;
    if (target.isEvent) {
      setEvent(target.text);
      setItems([]);
    } else {
      const transmutedItems = autoplaceCubeItems([recipe.target]);
      setEvent(null);
      setItems(transmutedItems);
    }

    setHasTransmuted(true);
  };

  const handleUpdateSelectedRecipeId = (updatedRecipeId) => {
    setItems([]);
    setEvent(null);
    setSelectedRecipeId(updatedRecipeId);
    setHasTransmuted(false);
    if (updatedRecipeId !== null) {
      const updatedRecipe = recipesMap[updatedRecipeId];
      const cubeItems = autoplaceCubeItems(updatedRecipe.sources);
      setItems(cubeItems);
    }
  };

  const left = (
    <Frame help={help} preview={PREVIEWS.cube} size="m" title="Cube">
      <RecipeSelect
        value={selectedRecipeId}
        onChange={handleUpdateSelectedRecipeId}
      />
      <Cube
        disabled={disabled}
        event={event}
        items={items}
        onTransmute={handleTransmute}
      />
    </Frame>
  );

  return (
    <PageLayout title="Cube">
      <Interface left={left} />
    </PageLayout>
  );
};

const help = (
  <div>
    <p>
      Search and discover Cube recipes and load components into the Horadric
      Cube.
    </p>
    <p>
      Click on the Transmute button to transmute items using the Horadric Cube
    </p>
  </div>
);

const recipesMap = normalize('id')(getRecipes());

export default Page;
