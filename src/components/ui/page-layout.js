import React from 'react';

import {useIsReady} from '../../utils/index.js';

const PageLayout = ({children, title}) => {
  const isReady = useIsReady();

  if (!isReady) {
    return null;
  }

  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default PageLayout;
