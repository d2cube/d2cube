import {Element, useStyles} from 'uinix-ui';

import Tooltip from './ui/tooltip.js';

const Globe = ({type, max, value}) => {
  const styles = useStyles();

  return (
    <Tooltip tooltip={`${type}: ${value} / ${max}`}>
      <Element styleProps={{type}} styles={styles.globe} />
    </Tooltip>
  );
};

export default Globe;
