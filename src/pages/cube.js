import {useState} from 'react';

import {cubeItems} from '../mocks/index.js';
import PageLayout from '../components/page-layout.js';
import Cube from '../components/cube.js';
import CubeRecipes from '../components/cube-recipes.js';
import Interface from '../components/ui/interface.js';

const Page = () => {
  const [items, setItems] = useState(cubeItems);

  const handleTransmute = () => {
    console.log('to be implemented');
    setItems(items);
  };

  const left = <CubeRecipes />;
  const right = <Cube items={items} onTransmute={handleTransmute} />;

  return (
    <PageLayout title="Cube">
      <Interface left={left} right={right} />
    </PageLayout>
  );
};

export default Page;
