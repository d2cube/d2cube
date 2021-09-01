import {Layout} from 'uinix-ui';

import BrandIcon from './brand-icon.js';
import BrandText from './brand-text.js';

const BrandLogo = ({as = undefined, size = 'm'}) => (
  <Layout inline align="center">
    <BrandText as={as} text="D2" />
    <BrandIcon icon="cube" size={`icon.${size}`} />
  </Layout>
);

export default BrandLogo;
