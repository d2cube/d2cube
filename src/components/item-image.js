import React from 'react';

import {GameVersionType} from '../enums/index.js';
import {random} from '../utils/random.js';
import Image from './ui/image.js';

const defaultVersion = GameVersionType.D2;

const ItemImage = ({
  id,
  variant = null,
  variants = null,
  version = defaultVersion,
}) => {
  let suffix = '';
  if (variant) {
    suffix += variant;
  } else if (variants) {
    suffix += random(1, variants);
  }

  const src = `${version}/items/${id}${suffix}.webp`;

  return <Image alt={id} src={src} />;
};

export default ItemImage;
