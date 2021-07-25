import {Link} from 'gatsby';
import React from 'react';
import {Layout, Icon, useStyles} from 'uinix-ui';

import Tooltip from './tooltip.js';

const BrandIcon = ({icon, size = 'icon.m', to, tooltip, ...rest}) => {
  const styles = useStyles();
  const as = rest.href ? 'a' : 'div';

  const iconElement = (
    <Icon
      color="brand.primary"
      icon={icon}
      size={size}
      styles={styles.centered}
    />
  );

  return (
    <Tooltip isReadable tooltip={tooltip}>
      <Layout {...rest} as={as} align="center" justify="center">
        {to ? <Link to={to}>{iconElement}</Link> : iconElement}
      </Layout>
    </Tooltip>
  );
};

export default BrandIcon;
