import {Layout} from 'uinix-ui';

import Help from './help.js';

const Frame = ({children, flex = 'none', help, title}) => (
  <Layout
    as="section"
    align="center"
    direction="column"
    flex={flex}
    spacing="l"
    variant="frame"
  >
    <Layout align="center" spacing="m">
      <h3>{title}</h3>
      <Help text={help} />
    </Layout>
    {children}
  </Layout>
);

export default Frame;
