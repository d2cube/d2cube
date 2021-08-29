import {Layout} from 'uinix-ui';

import ApiMethod from './api-method.js';

const ApiMethods = ({methods}) => (
  <Layout direction="column" spacing="xl">
    {methods.map((method) => (
      <ApiMethod key={method.name} method={method} />
    ))}
  </Layout>
);

export default ApiMethods;
