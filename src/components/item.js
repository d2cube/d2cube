import React from 'react';
import {Element, useStyles} from 'uinix-ui';

import db from '../db/index.js';
import {getItemById} from '../queries/index.js';
import ItemTooltip from './item-tooltip.js';

const defaultVersion = db.enums.GameVersionType.D2;

const Item = ({item: initialItem, version = defaultVersion}) => {
  const styles = useStyles();

  const id = initialItem.placeholderId || initialItem.id;
  const item = {
    ...getItemById(id),
    ...initialItem,
  };
  const src = `../assets/images/${version}/items/${id}.webp`;
  const description = item.placeholderDescription || item.description;

  return (
    <ItemTooltip description={description}>
      <Element
        as="img"
        alt={id}
        src={src}
        styleProps={{item}}
        styles={[styles.item, styles.interactive]}
      />
    </ItemTooltip>
  );
};

export default Item;
