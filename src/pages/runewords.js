import PageLayout from '../components/page-layout.js';
import Runewords from '../components/runewords.js';
import Interface from '../components/ui/interface.js';

const Page = () => (
  <PageLayout title="Runewords">
    <Interface left={<Runewords />} />
  </PageLayout>
);

export default Page;
