import React from 'react';
import {Layout, Text} from 'uinix-ui';

import Help from './help.js';

const Frame = ({children, help, title}) => (
  <Layout
    as="section"
    align="center"
    direction="column"
    spacing="l"
    variant="frame"
  >
    <Layout align="center" spacing="m">
      <Text as="h2" variant="diablo">
        {title}
      </Text>
      <Help text={help} />
    </Layout>
    {children}
  </Layout>
);

export default Frame;
