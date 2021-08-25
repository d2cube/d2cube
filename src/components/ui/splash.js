import {Layout, Text, useStyles} from 'uinix-ui';

import Button from './button.js';

const Splash = ({onEnter}) => {
  const styles = useStyles();

  return (
    <Layout align="center" justify="center" variant="splash">
      <Layout
        align="center"
        direction="column"
        spacing="m"
        styles={styles.fadeIn}
      >
        <Text as="h1" pt="70%" variant="diablo">
          D2Cube
        </Text>
        <Button text="Enter" onClick={onEnter} />
      </Layout>
    </Layout>
  );
};

export default Splash;
