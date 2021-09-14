import {Layout, Text} from 'uinix-ui';

import pkg from '../../package.json';
import PageLayout from '../components/page-layout.js';
import BrandLogo from '../components/ui/brand-logo.js';
import CardPreview from '../components/ui/card-preview.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';

const Page = () => {
  const left = (
    <Frame size="m" title={null}>
      <Layout direction="column" spacing="xl">
        <Layout direction="column">
          <BrandLogo as="h1" size="l" />
          <Text variant="diablo">{pkg.description}</Text>
        </Layout>
        <hr />
        {previews.map((preview) => (
          <CardPreview key={preview.href} preview={preview} />
        ))}
      </Layout>
    </Frame>
  );

  return (
    <PageLayout title="Home">
      <Interface left={left} />
    </PageLayout>
  );
};

const previews = [
  {
    href: '/cube',
    icon: 'nav.cube',
    title: 'Cube',
    description: 'Explore Cube recipes with a unique interactive interface.',
    embedId: '2b88b1667ec643919fe0aeb2c4f353c2',
  },
  {
    href: '/items',
    icon: 'nav.items',
    title: 'Items',
    description: 'Query the ItemDB with a powerful search interface.',
    embedId: 'e2880ce20d864acb92ea5553562a4ace',
  },
  {
    href: '/sets',
    icon: 'nav.sets',
    title: 'Sets',
    description: 'View item sets and bonuses.',
    embedId: '2b88b1667ec643919fe0aeb2c4f353c2',
  },
  {
    href: '/runewords',
    icon: 'nav.runewords',
    title: 'Runewords',
    description: 'Explore Runewords with the Runegram.',
    embedId: 'eeaa4cfabe0a4cfebbe2f48625c0e783',
  },
  {
    href: '/developers',
    icon: 'nav.developers',
    title: 'Developers',
    description: 'Reference the REST/Node API.',
    embedId: '34348c39d6ed4465900bfeaa31f3d59a',
  },
  {
    href: '/support',
    icon: 'nav.support',
    title: 'Support',
    description: 'Help keep this project going.',
  },
];

export default Page;
