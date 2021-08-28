import React, {useState} from 'react';
import {Layout, Text, useStyles} from 'uinix-ui';

import Hud from './hud.js';
import Backdrop from './ui/backdrop.js';
import BrandLogo from './ui/brand-logo.js';
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
      <ScrollTop />
      <Backdrop />
      {entered ? (
        <>
          <Layout
            as="main"
            direction="column"
            flex="auto"
            p="l"
            spacing="l"
            styles={styles.fadeIn}
          >
            {title ? (
              <Layout align="baseline" spacing="s">
                <BrandLogo />
                <Text fontSize="xl" variant="diablo">
                  /
                </Text>
                <h2>{title}</h2>
              </Layout>
            ) : (
              <BrandLogo />
            )}
            {children}
          </Layout>
          <Hud />
        </>
      ) : (
        <Splash onEnter={handleEnter} />
      )}
    </Layout>
  );
};

export default PageLayout;
