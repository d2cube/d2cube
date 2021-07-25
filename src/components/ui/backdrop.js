import React from 'react';
import {Element} from 'uinix-ui';

import videoSrc from '../../../static/assets/videos/d2r.webm';

const Backdrop = () => (
  <Element
    autoPlay
    loop
    muted
    as="video"
    bottom={0}
    h="100%"
    left={0}
    opacity="inactive"
    position="fixed"
    right={0}
    src={videoSrc}
    top={0}
    w="100%"
    z="back"
  />
);

export default Backdrop;
