import {Fragment} from 'react';
import {Layout} from 'uinix-ui';

import Divider from './ui/divider.js';
import ApiMethod from './api-method.js';

const ApiMethods = ({methods}) => (
  <Layout direction="column" pt="xxl" spacing="xl">
    {methods.map((method) => (
      <Fragment key={method.name}>
        <ApiMethod method={method} />
        <Divider />
      </Fragment>
    ))}
  </Layout>
);

export default ApiMethods;
