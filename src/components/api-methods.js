import {Fragment} from 'react';
import {Layout} from 'uinix-ui';

import Divider from './ui/divider.js';
import ApiMethod from './api-method.js';

const ApiMethods = ({methods}) => (
  <Layout direction="column" py="xl" spacing="xxl">
    {methods.map((method) => (
      <Fragment key={method.name}>
        <Divider />
        <ApiMethod method={method} />
      </Fragment>
    ))}
  </Layout>
);

export default ApiMethods;
