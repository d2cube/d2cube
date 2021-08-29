import {Layout, Text} from 'uinix-ui';

import BrandIcon from './brand-icon.js';

const BrandLogo = () => (
  <Layout align="center">
    <Text as="h1">D2</Text>
    <BrandIcon icon="cube" size="icon.l" />
  </Layout>
);

export default BrandLogo;
