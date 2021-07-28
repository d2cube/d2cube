import React from 'react';
import {Element} from 'uinix-ui';

import ItemImage from './item-image.js';

const socketItemSize = [1, 1];

const ItemSocket = ({id}) =>
  id ? (
    <ItemImage id={id} size={socketItemSize} />
  ) : (
    <Element variant="socket" />
  );

export default ItemSocket;
