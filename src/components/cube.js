import {Element, Layout} from 'uinix-ui';

import {useToggle} from '../hooks/index.js';
import ItemGrid from './item-grid.js';
import BrandIcon from './ui/brand-icon.js';

const Cube = ({items, onTransmute}) => {
  const [transmuteKey, toggleTransmuteKey] = useToggle();

  const handleTransmute = () => {
    toggleTransmuteKey();
    onTransmute();
  };

  return (
    <Layout variant="frame">
      <Layout
        align="center"
        direction="column"
        flex="auto"
        justify="center"
        spacing="s"
        variant="cube"
      >
        <Element position="relative" styles={styles.backdropAlignment}>
          <ItemGrid items={items} size={[4, 3]} />
          <Element key={transmuteKey} styles={styles.transmute} />
        </Element>
        <BrandIcon
          icon="interface.transmute"
          size="icon.l"
          tooltip="Transmute"
          onClick={handleTransmute}
        />
      </Layout>
    </Layout>
  );
};

const styles = {
  backdropAlignment: {
    // Hacky but works to align layout with the backdrop.  will remove once we have formal assets.
    paddingRight: 's',
    paddingTop: 's',
  },
  transmute: {
    animation: 'linearSlow',
    animationName: 'transmute',
    backgroundColor: 'brand.primary',
    boxShadow: 'transmute',
    inset: 0,
    opacity: 0,
    position: 'absolute',
  },
};

export default Cube;
