import {useScrollTop} from '../../hooks/index.js';
import BrandIcon from './brand-icon.js';

const ScrollTop = () => {
  const {canScrollTop, scrollTop} = useScrollTop();

  if (!canScrollTop) {
    return null;
  }

  return (
    <BrandIcon
      icon="up"
      position="fixed"
      right="m"
      tooltip="Back to top"
      top="m"
      onClick={scrollTop}
    />
  );
};

export default ScrollTop;
