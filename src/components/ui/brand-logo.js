import Link from 'next/link.js';
import {Layout, Text} from 'uinix-ui';

import BrandIcon from './brand-icon.js';

const BrandLogo = () => (
  <Link href="/">
    <Layout align="center">
      <Text as="h1">D2</Text>
      <BrandIcon icon="cube" size="icon.l" tooltip="d2cube" />
    </Layout>
  </Link>
);

export default BrandLogo;
