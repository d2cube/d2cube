import {useState} from 'react';

import PageLayout from '../components/page-layout.js';
import Cube from '../components/cube.js';
import CubeRecipes from '../components/cube-recipes.js';
import Interface from '../components/ui/interface.js';
import {autoplaceCubeItems} from '../utils/autoplace-cube-items.js';

const Page = () => {
  const [hasTransmuted, setHasTransmuted] = useState(false);
  const [event, setEvent] = useState(null);
  const [items, setItems] = useState([]);
  const [recipe, setRecipe] = useState(null);

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

  const handleClearRecipe = () => {
    setEvent(null);
    setItems([]);
    setRecipe(null);
    setHasTransmuted(false);
  };

  const handleSelectRecipe = (updatedRecipe) => {
    const cubeItems = autoplaceCubeItems(updatedRecipe.sources);
    setEvent(null);
    setItems(cubeItems);
    setRecipe(updatedRecipe);
    setHasTransmuted(false);
  };

  const left = (
    <CubeRecipes onClear={handleClearRecipe} onSelect={handleSelectRecipe} />
  );

  const right = (
    <Cube
      disabled={disabled}
      event={event}
      items={items}
      onTransmute={handleTransmute}
    />
  );

  return (
    <PageLayout title="Cube">
      <Interface left={left} right={right} />
    </PageLayout>
  );
};

export default Page;
