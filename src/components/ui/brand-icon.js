import Link from 'next/link.js';

import {Layout, Icon, useStyles} from 'uinix-ui';

import Tooltip from './tooltip.js';

const BrandIcon = ({
  icon,
  size = 'icon.m',
  href = null,
  tooltip = null,
  ...rest
}) => {
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
    <Tooltip isReadable placement="top" tooltip={tooltip}>
      <Layout {...rest} as={as} align="center" justify="center">
        {href ? <Link href={href}>{iconElement}</Link> : iconElement}
      </Layout>
    </Tooltip>
  );
};

export default BrandIcon;
