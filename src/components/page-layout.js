import React, {useState} from 'react';
import {Layout, Text, useStyles} from 'uinix-ui';

import Hud from './hud.js';
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
      {entered ? (
        <>
          <Layout
            as="main"
            align="center"
            direction="column"
            flex="auto"
            spacing="xl"
            styles={styles.fadeIn}
            variant="container"
          >
            <Layout
              align="center"
              as="header"
              justify="center"
              pt="l"
              spacing="m"
              variant="header"
            >
              <BrandLogo />
              {title && (
                <>
                  <Text fontSize="xl" variant="diablo">
                    /
                  </Text>
                  <h2>{title}</h2>
                </>
              )}
              <Layout position="absolute" right="l">
                <ScrollTop />
              </Layout>
            </Layout>
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
