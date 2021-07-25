import React from 'react';
import {Element, useStyles} from 'uinix-ui';

import Item from './item.js';

const ItemGrid = ({items = [], size}) => {
  const styles = useStyles();

  return (
    <Element styles={styles.grid} styleProps={{size}}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Element>
  );
};

export default ItemGrid;
