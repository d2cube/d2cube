import {Layout, Text} from 'uinix-ui';

import BrandIcon from './brand-icon.js';

const BrandLogo = ({size = 'm'}) => (
  <Layout inline align="center">
    <Text variant="diablo">D2</Text>
    <BrandIcon icon="cube" size={`icon.${size}`} />
  </Layout>
);

export default BrandLogo;
