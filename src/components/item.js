import React from 'react';
import {Element, useStyles} from 'uinix-ui';

import db from '../db/index.js';
import {getItemById} from '../queries/index.js';
import {resolveItemProps} from '../utils/index.js';
import {ItemTooltip} from './item-tooltip.js';

const defaultVersion = db.enums.GameVersionType.D2;

export const Item = ({isInactive, item, version = defaultVersion}) => {
  const styles = useStyles();

  const id = item.placeholderId || item.id;
  const sourceItem = getItemById(id);

  const resolvedItem = {...sourceItem, ...item};
  const {description, size} = resolveItemProps(resolvedItem);
  const src = `../assets/images/${version}/items/${id}.webp`;

  return (
    <ItemTooltip description={item.placeholderDescription || description}>
      <Element
        as="img"
        alt={id}
        src={src}
        styleProps={{isInactive, size}}
        styles={[styles.itemSize, styles.interactive]}
      />
    </ItemTooltip>
  );
};
