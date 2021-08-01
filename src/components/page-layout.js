import {navigate} from 'gatsby';
import React, {useEffect, useState} from 'react';
import {Layout, useStyles} from 'uinix-ui';

import Hud from './hud.js';
import Backdrop from './ui/backdrop.js';
import Splash from './ui/splash.js';
import Soundtrack from './ui/soundtrack.js';

let cachedEntered = false;

const PageLayout = ({children, title = null}) => {
  const [entered, setEntered] = useState(cachedEntered);
  const isReady = useIsReady();
  const styles = useStyles();

  if (!isReady) {
    return null;
  }

  const handleEnter = () => {
    cachedEntered = true;
    setEntered(cachedEntered);
  };

  return (
    <Layout direction="column" h="100vh" spacing="l">
      <Backdrop />
      <Soundtrack isEnabled={entered} />
      {entered ? (
        <Layout
          as="main"
          direction="column"
          flex="auto"
          px="l"
          spacing="l"
          styles={styles.fadeIn}
        >
          {title && <h2>{title}</h2>}
          {children}
          <Hud />
        </Layout>
      ) : (
        <Splash onEnter={handleEnter} />
      )}
    </Layout>
  );
};

// Hack around gatsby/fela FOUC
export const useIsReady = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    navigate(window.location.pathname, {replace: true});
    setIsReady(true);
  }, []);

  return isReady;
};

export default PageLayout;
