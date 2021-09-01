import {Layout} from 'uinix-ui';

import BrandText from './brand-text.js';

const Labelled = ({flex = 'auto', label, children}) => (
  <Layout as="label" direction="column" flex={flex} spacing="s">
    <BrandText text={label} />
    {children}
  </Layout>
);

export default Labelled;
