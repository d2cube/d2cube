import React from 'react';

import {GameVersionType} from '../enums/index.js';
import {random} from '../utils/random.js';
import Image from './ui/image.js';

const defaultVersion = GameVersionType.D2;

const ItemImage = ({id, variants = null, version = defaultVersion}) => {
  const imageName = id + (variants ? random(1, variants) : '');
  const src = `${version}/items/${imageName}.webp`;

  return <Image alt={id} src={src} />;
};

export default ItemImage;
