import React from 'react';
import {Element, useStyles} from 'uinix-ui';

const Grid = ({children, size}) => {
  const styles = useStyles();

  return (
    <Element styles={styles.grid} styleProps={{size}}>
      {children}
    </Element>
  );
};

export default Grid;
