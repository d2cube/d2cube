import PageLayout from '../components/page-layout.js';
import BrandLogo from '../components/ui/brand-logo.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';

const Page = () => {
  const left = (
    <Frame title="Roadmap">
      <p>
        A lot of exciting things are planned for <BrandLogo />. So much to do,
        so little time!
      </p>
      <li>
        Item simulation
        <ul>
          <li>Creation</li>
          <li>Gambling</li>
          <li>Rolling (magical/rare affixes)</li>
          <li>Quest enhancements (e.g. Larzuk, Anya, Charsi)</li>
        </ul>
      </li>
      <li>
        Character simulation
        <ul>
          <li>Stats</li>
          <li>Skills</li>
          <li>Mercenary</li>
        </ul>
      </li>
    </Frame>
  );

  return (
    <PageLayout title="Support">
      <Interface left={left} />
    </PageLayout>
  );
};

export default Page;
