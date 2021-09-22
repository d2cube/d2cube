import {Layout} from 'uinix-ui';

const Interface = ({left = null, right = null}) => (
  <Layout direction="column" flex="auto" justify="center" spacing="l">
    <Layout
      wrap
      styles={{
        // TODO: this is a hack until Layout formally supports responsive props
        '> *': {
          margin: 'm',
        },
      }}
    >
      {left}
      {right}
    </Layout>
  </Layout>
);

export default Interface;
