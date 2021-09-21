import {Layout} from 'uinix-ui';

const Interface = ({left = null, right = null}) => (
  <Layout direction="column" flex="auto" justify="center" spacing="l">
    <Layout
      wrap
      justify="center"
      spacing="l"
      wrapSpacing="l"
      styles={{
        // TODO: this is a hack until Layout formally supports responsive props
        '> :first-child': {
          marginLeft: right ? 'l' : undefined,
        },
      }}
    >
      {left}
      {right}
    </Layout>
  </Layout>
);

export default Interface;
