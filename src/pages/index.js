import Cube from '../components/cube.js';
import Interface from '../components/interface.js';
import Inventory from '../components/inventory.js';
import PageLayout from '../components/page-layout.js';
import {cubeItems, inventoryItems} from '../mocks/index.js';

const Page = () => {
  const left = <Cube items={cubeItems} />;
  const right = <Inventory items={inventoryItems} />;

  return (
    <PageLayout title={null}>
      <Interface left={left} right={right} />
    </PageLayout>
  );
};

export default Page;
