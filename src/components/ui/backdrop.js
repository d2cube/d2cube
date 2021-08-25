import {Element} from 'uinix-ui';

const Backdrop = () => (
  <Element
    autoPlay
    loop
    muted
    as="video"
    src="videos/d2r.webm"
    variant="fullscreen"
    z="back"
  />
);

export default Backdrop;
