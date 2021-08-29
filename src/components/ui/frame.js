import {Layout} from 'uinix-ui';

import Help from './help.js';

const Frame = ({
  alignTitle = undefined,
  children,
  help = undefined,
  isFixedHeight = false,
  size = undefined,
  title,
}) => (
  <Layout
    as="section"
    direction="column"
    h={isFixedHeight ? 'frame.height' : undefined}
    spacing="l"
    variant="frame"
    w={`frame.width.${size}`}
  >
    <Layout align="center" alignSelf={alignTitle} spacing="m">
      <h3>{title}</h3>
      <Help text={help} />
    </Layout>
    {children}
  </Layout>
);

export default Frame;
