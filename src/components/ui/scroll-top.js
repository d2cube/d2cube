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
      right="l"
      top="l"
      tooltip="Back to top"
      onClick={scrollTop}
    />
  );
};

export default ScrollTop;
