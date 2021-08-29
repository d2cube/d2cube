import {Layout, Text} from 'uinix-ui';

const Labelled = ({label, children}) => (
  <Layout as="label" direction="column" spacing="s">
    <Text variant="diablo">{label}</Text>
    {children}
  </Layout>
);

export default Labelled;
