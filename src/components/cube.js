import {Element, Layout} from 'uinix-ui';

import {useToggle} from '../hooks/index.js';
import ItemGrid from './item-grid.js';
import BrandIcon from './ui/brand-icon.js';
import BrandText from './ui/brand-text.js';

const Cube = ({disabled, event, items, onTransmute}) => {
  const [transmuteKey, toggleTransmuteKey] = useToggle();

  const handleTransmute = () => {
    toggleTransmuteKey();
    onTransmute();
  };

  return (
    <Layout align="center" justify="center" variant="cube">
      <Layout direction="column" spacing="m" variant="frame">
        <Element position="relative">
          <Element key={transmuteKey} styles={styles.transmute} />
          <ItemGrid items={items} size={[4, 3]} />
          {event && (
            <Element variant="absolute.stretch">
              <Layout align="center" justify="center" variant="portal.red">
                <BrandText color="text.event" textAlign="center" text={event} />
              </Layout>
            </Element>
          )}
        </Element>
        <BrandIcon
          disabled={disabled}
          icon="interface.transmute"
          size="icon.l"
          tooltip={disabled ? 'Nothing to Transmute' : 'Transmute'}
          onClick={handleTransmute}
        />
      </Layout>
    </Layout>
  );
};

const styles = {
  transmute: {
    animation: 'linear',
    animationName: 'transmute',
    backgroundColor: 'brand.primary',
    boxShadow: 'transmute',
    inset: 0,
    opacity: 0,
    position: 'absolute',
  },
};

export default Cube;
