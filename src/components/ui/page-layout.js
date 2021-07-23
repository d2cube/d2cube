import React from 'react';

import {useIsReady} from '../../utils/index.js';

export const PageLayout = ({children, title}) => {
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
