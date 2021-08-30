import {Layout} from 'uinix-ui';

import PageLayout from '../components/page-layout.js';
import BrandIcon from '../components/ui/brand-icon.js';
import BrandLogo from '../components/ui/brand-logo.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import {UrlType} from '../enums/url-type.js';

const Page = () => {
  const left = (
    <Frame title="Community">
      <p>
        Join the following communities to continue the discussion and improve{' '}
        <BrandLogo />.
      </p>
      <Layout align="center" spacing="xl">
        <BrandIcon
          icon="discord"
          href={UrlType.Discord}
          size="icon.l"
          tooltip="Discord Server"
        />
        <BrandIcon
          icon="github"
          href={UrlType.GithubRepo}
          size="icon.l"
          tooltip="Github"
        />
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
