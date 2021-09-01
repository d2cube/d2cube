import {Element, Layout, useStyles} from 'uinix-ui';

import {EquipSlotType} from '../enums/index.js';
import Item from './item.js';
import Image from './ui/image.js';

const InventoryEquipSlot = ({item = null, slot}) => {
  const styles = useStyles();

  const {src, size} = getConfig(slot);

  return (
    <Element
      b="bordered"
      position="relative"
      styleProps={{size}}
      styles={styles.itemSize}
    >
      <Image alt={slot} src={src} />
      <Layout
        align="center"
        justify="center"
        styles={styles.itemHover}
        variant="absolute.stretch"
      >
        {item && <Item item={item} />}
      </Layout>
    </Element>
  );
};

const getConfig = (slot) => {
  let size;
  let src;
  switch (slot) {
    case EquipSlotType.Feet:
      size = [2, 2];
      src = 'ui/inventory-feet.png';
      break;
    case EquipSlotType.Hands:
      size = [2, 2];
      src = 'ui/inventory-hands.png';
      break;
    case EquipSlotType.Head:
      size = [2, 2];
      src = 'ui/inventory-head.png';
      break;
    case EquipSlotType.LeftFinger:
    case EquipSlotType.RightFinger:
      size = [1, 1];
      src = 'ui/inventory-finger.png';
      break;
    case EquipSlotType.AlternateMainHand:
    case EquipSlotType.AlternateOffHand:
    case EquipSlotType.MainHand:
    case EquipSlotType.OffHand:
      size = [4, 2];
      src = 'ui/inventory-weapon.png';
      break;
    case EquipSlotType.Neck:
      size = [1, 1];
      src = 'ui/inventory-neck.png';
      break;
    case EquipSlotType.Torso:
      size = [3, 2];
      src = 'ui/inventory-torso.png';
      break;
    case EquipSlotType.Waist:
      size = [1, 2];
      src = 'ui/inventory-waist.png';
      break;
    default:
      break;
  }

  return {size, src};
};

export default InventoryEquipSlot;
