import React from 'react';
import {Element} from 'uinix-ui';

import videoSrc from '../../../static/assets/videos/d2r.webm';

const Backdrop = () => (
  <Element autoPlay loop muted as="video" variant="layout.backdrop">
    <source type="video/webm" src={videoSrc} />
  </Element>
);

export default Backdrop;
