import {navigate, Link} from 'gatsby';
import React, {useEffect, useState} from 'react';
import {Element, useStyles} from 'uinix-ui';

import Backdrop from './backdrop.js';
import Splash from './splash.js';
import Soundtrack from './soundtrack.js';

let cachedEntered = false;

const PageLayout = ({children, title}) => {
  const isReady = useIsReady();
  const [entered, setEntered] = useState(cachedEntered);
  const styles = useStyles();

  if (!isReady) {
    return null;
  }

  const handleEnter = () => {
    cachedEntered = true;
    setEntered(cachedEntered);
  };

  const contents = (
    <Element styles={styles.fadeIn}>
      <Link to="/">Home</Link>
      <Link to="/items">Items</Link>
      <h2>{title}</h2>
      {children}
    </Element>
  );

  return (
    <div>
      <Soundtrack isEnabled={entered} />
      {entered ? contents : <Splash onEnter={handleEnter} />}
      <Backdrop />
    </div>
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
