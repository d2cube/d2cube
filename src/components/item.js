import React from 'react';
import {Element, useStyles} from 'uinix-ui';

import db from '../db/index.js';
import {getItemById} from '../queries/index.js';
import {roll} from '../utils/index.js';
import ItemTooltip from './item-tooltip.js';

const defaultVersion = db.enums.GameVersionType.D2;

const Item = ({isInactive, item: initialItem, version = defaultVersion}) => {
  const styles = useStyles();

  const id = initialItem.baseId || initialItem.id;
  const item = {
    ...getItemById(id),
    ...initialItem,
  };
  const imageName = id + (item.variants ? roll(1, item.variants) : '');
  const src = `../assets/images/${version}/items/${imageName}.webp`;
  const description = item.baseDescription || item.description;

  return (
    <ItemTooltip description={description}>
      <Element
        as="img"
        alt={id}
        src={src}
        styleProps={{isInactive, item}}
        styles={[styles.item, styles.interactive]}
      />
    </ItemTooltip>
  );
};

export default Item;
