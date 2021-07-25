import React from 'react';
import {Layout, Text} from 'uinix-ui';

const Frame = ({children, title}) => (
  <Layout
    as="section"
    align="center"
    direction="column"
    spacing="l"
    variant="frame"
  >
    <Text as="h2" variant="brand">
      {title}
    </Text>
    {children}
  </Layout>
);

export default Frame;
