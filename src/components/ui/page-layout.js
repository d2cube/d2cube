import {navigate} from 'gatsby';
import React, {useEffect, useState} from 'react';

import Backdrop from './backdrop.js';

const PageLayout = ({children, title}) => {
  const isReady = useIsReady();

  if (!isReady) {
    return null;
  }

  return (
    <div>
      <Backdrop />
      <h2>{title}</h2>
      {children}
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
