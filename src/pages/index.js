import PageLayout from '../components/page-layout.js';
import CubeRecipes from '../components/cube-recipes.js';
import Interface from '../components/ui/interface.js';

const Page = () => {
  const left = <CubeRecipes />;

  return (
    <PageLayout title="Cube">
      <Interface left={left} />
    </PageLayout>
  );
};

export default Page;
