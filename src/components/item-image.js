import {GameVersionType} from '../enums/index.js';
import Image from './ui/image.js';

const defaultVersion = GameVersionType.D2;

const ItemImage = ({id, version = defaultVersion}) => {
  const src = `${version}/items/${id}.webp`;

  return <Image src={src} />;
};

export default ItemImage;
