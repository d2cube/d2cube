import {Element} from 'uinix-ui';

const Image = ({src}) => (
  <Element as="img" height="100%" width="100%" src={`images/${src}`} />
);

export default Image;
