import {Layout} from 'uinix-ui';

const Interface = ({left = null, right = null}) => (
  <Layout direction="column" flex="auto" justify="center" spacing="l">
    <Layout justify="space-between" spacing="l">
      {left}
      {right}
    </Layout>
  </Layout>
);

export default Interface;
