import {Element} from 'uinix-ui';

import ItemImage from './item-image.js';

const ItemSocket = ({id}) =>
  id ? <ItemImage id={id} /> : <Element variant="socket" />;

export default ItemSocket;
