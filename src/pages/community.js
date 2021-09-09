import {Layout} from 'uinix-ui';

import PageLayout from '../components/page-layout.js';
import BrandLogo from '../components/ui/brand-logo.js';
import DiscordIcon from '../components/ui/discord-icon.js';
import Frame from '../components/ui/frame.js';
import GithubIcon from '../components/ui/github-icon.js';
import Interface from '../components/ui/interface.js';

const Page = () => {
  const left = (
    <Frame title="Community">
      <p>
        Join the following communities to continue the discussion and improve{' '}
        <BrandLogo />.
      </p>
      <Layout align="center" spacing="l">
        <GithubIcon />
        <DiscordIcon />
      </Layout>
    </Frame>
  );

  return (
    <PageLayout title="Community">
      <Interface left={left} />
    </PageLayout>
  );
};

export default Page;
