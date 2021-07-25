import Tippy from '@tippyjs/react';
import React, {useEffect, useRef, useState} from 'react';

import 'tippy.js/dist/tippy.css';

// Based on: https://github.com/atomiks/tippyjs-react/issues/71#issuecomment-796880050
const Tooltip = ({children, tooltip}) => {
  const spanRef = useRef(null);
  const [childRef, setChildRef] = useState(null);

  useEffect(() => {
    const span = spanRef.current;
    if (span) {
      setChildRef(span.previousElementSibling);
    }

    return () => setChildRef(null);
  }, []);

  if (!tooltip) {
    return null;
  }

  return (
    <>
      {children}
      {childRef ? (
        <Tippy
          arrow={false}
          content={tooltip}
          offset={0}
          reference={childRef}
          maxWidth="none"
        />
      ) : (
        <span ref={spanRef} style={{display: 'none'}} />
      )}
    </>
  );
};

export default Tooltip;
