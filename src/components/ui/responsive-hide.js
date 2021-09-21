import {Element} from 'uinix-ui';

const ResponsiveHide = ({children, mode = 'display'}) => {
  const display = mode === 'display' ? ['none', 'none', 'block'] : undefined;
  const opacity = mode === 'opacity' ? ['0', '0', '1'] : undefined;
  const style = {display, opacity};

  // @ts-ignore fix responsive prop type
  return <Element styles={style}>{children}</Element>;
};

export default ResponsiveHide;
