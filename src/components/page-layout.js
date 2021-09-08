import {useState} from 'react';
import {Layout, useStyles} from 'uinix-ui';

import Hud from './hud.js';
import Splash from './ui/splash.js';
import ScrollTop from './ui/scroll-top.js';

let cachedEntered = false;

const PageLayout = ({children, title}) => {
  const [entered, setEntered] = useState(cachedEntered);
  const styles = useStyles();

  const handleEnter = () => {
    cachedEntered = true;
    setEntered(cachedEntered);
  };

  return (
    <Layout direction="column" minH="100vh" spacing="l">
      {entered ? (
        <>
          <Layout
            as="main"
            align="center"
            direction="column"
            flex="auto"
            pt="xl"
            spacing="xl"
            styles={styles.fadeIn}
            variant="container"
          >
            {children}
          </Layout>
          <Hud title={title} />
        </>
      ) : (
        <Splash onEnter={handleEnter} />
      )}
      <ScrollTop />
    </Layout>
  );
};

export default PageLayout;
