import {Layout, Text} from 'uinix-ui';

import Item from './item.js';

const Rune = ({disabled, rune}) => (
  <Layout disabled={disabled} align="center" direction="column" spacing="-s">
    <Item item={rune} />
    <Text color="item.rune" fontFamily="diablo" fontSize="xs">
      {rune.id}
    </Text>
  </Layout>
);

export default Rune;
