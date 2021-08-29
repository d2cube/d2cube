import {Layout, useStyles} from 'uinix-ui';

import BrandLogo from './brand-logo.js';
import Button from './button.js';

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
        <h1>
          <BrandLogo size="l" />
        </h1>
        <Button text="Enter" onClick={onEnter} />
      </Layout>
    </Layout>
  );
};

export default Splash;
