import {Layout} from 'uinix-ui';

import PageLayout from '../components/page-layout.js';
import BrandLogo from '../components/ui/brand-logo.js';
import Frame from '../components/ui/frame.js';
import GithubSponsorIcon from '../components/ui/github-sponsor-icon.js';
import Interface from '../components/ui/interface.js';
import PaypalIcon from '../components/ui/paypal-icon.js';

const Page = () => {
  const left = (
    <Frame title="Thank you for your support">
      <p>
        <BrandLogo /> will <strong>always</strong> be open-source and
        (ads-)free.
      </p>
      <p>
        While this imposes on personal time and financial commitments, I believe
        that staying ads-free and following a sponsorship model is the right
        approach to building meaningful relationships with the community and
        shipping relevant features and updates.
      </p>
      <p>Drop a donation if you would like to show your support!</p>
      <p>chrisrzhou</p>
      <Layout align="center" spacing="l">
        <GithubSponsorIcon />
        <PaypalIcon />
      </Layout>
    </Frame>
  );

  return (
    <PageLayout title="Support">
      <Interface left={left} />
    </PageLayout>
  );
};

export default Page;
