import {Layout, useStyles} from 'uinix-ui';

import BrandLogo from './brand-logo.js';
import Button from './button.js';
import Countdown from './countdown.js';

const Splash = ({onEnter}) => {
  const styles = useStyles();

  return (
    <Layout align="flex-end" justify="center" variant="splash">
      <Layout
        align="center"
        direction="column"
        pb="xxl"
        spacing="l"
        styles={styles.fadeIn}
      >
        <BrandLogo as="h1" size="l" />
        <Button size="l" text="Open" onClick={onEnter} />
        <Countdown date={launchDate} />
      </Layout>
    </Layout>
  );
};

const launchDate = new Date(Date.UTC(2021, 8, 23, 15));

export default Splash;
