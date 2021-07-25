import {navigate, Link} from 'gatsby';
import React, {useEffect, useState} from 'react';
import {Layout} from 'uinix-ui';

import Backdrop from './backdrop.js';
import Splash from './splash.js';
import Soundtrack from './soundtrack.js';

let cachedEntered = false;

const PageLayout = ({children, title}) => {
  const isReady = useIsReady();
  const [entered, setEntered] = useState(cachedEntered);

  if (!isReady) {
    return null;
  }

  const handleEnter = () => {
    cachedEntered = true;
    setEntered(cachedEntered);
  };

  return (
    <Layout direction="column" spacing="l" variant="fullscreen">
      <Soundtrack isEnabled={entered} />
      {entered ? (
        <Layout as="main" direction="column" flex="auto" p="l" spacing="l">
          <Layout as="ul" spacing="l">
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
          </Layout>
          {title && <h2>{title}</h2>}
          {children}
        </Layout>
      ) : (
        <Splash onEnter={handleEnter} />
      )}
      <Backdrop />
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
