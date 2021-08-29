import Link from 'next/link.js';

import {Layout, Icon, useStyles} from 'uinix-ui';

import Tooltip from './tooltip.js';

const BrandIcon = ({
  as = undefined,
  icon,
  size = 'icon.m',
  href = '',
  tooltip = null,
  ...rest
}) => {
  const styles = useStyles();

  const iconElement = (
    <Icon
      aria-label={tooltip}
      color="brand.primary"
      icon={icon}
      size={size}
      styles={styles.centered}
    />
  );

  let LinkElement;
  let linkProps;
  if (href.startsWith('http')) {
    LinkElement = 'a';
    linkProps = {href, rel: 'noreferrer', target: '_blank'};
  } else {
    LinkElement = Link;
    linkProps = {href};
  }

  return (
    <Tooltip isReadable placement="top" tooltip={tooltip}>
      <Layout {...rest} as={as} align="center" justify="center">
        {href ? (
          <LinkElement {...linkProps}>{iconElement}</LinkElement>
        ) : (
          iconElement
        )}
      </Layout>
    </Tooltip>
  );
};

export default BrandIcon;
