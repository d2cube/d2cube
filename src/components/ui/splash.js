import {Layout, useStyles} from 'uinix-ui';

import BrandLogo from './brand-logo.js';
import Button from './button.js';

const Splash = ({onEnter}) => {
  const styles = useStyles();

  return (
    <Layout align="center" justify="center" variant="splash">
      <Layout
        align="center"
        direction="column"
        spacing="l"
        styles={styles.fadeIn}
      >
        <BrandLogo />
        <Button text="Enter" onClick={onEnter} />
      </Layout>
    </Layout>
  );
};

export default Splash;
