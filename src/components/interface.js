import {Layout} from 'uinix-ui';

const empty = <div />;

const Interface = ({left = empty, right = empty}) => (
  <Layout direction="column" flex="auto" justify="center" spacing="l">
    <Layout justify="space-between" spacing="l">
      {left}
      {right}
    </Layout>
  </Layout>
);

export default Interface;
