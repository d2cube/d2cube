import Tippy from '@tippyjs/react';
import React, {useEffect, useRef, useState} from 'react';

import 'tippy.js/dist/tippy.css';

// Based on: https://github.com/atomiks/tippyjs-react/issues/71#issuecomment-796880050
const Tooltip = ({children, isReadable = false, tooltip}) => {
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
          interactive
          appendTo={document.body}
          arrow={false}
          content={tooltip}
          offset={[0, 0]}
          placement="bottom"
          maxWidth={isReadable ? undefined : 'none'}
          reference={childRef}
        />
      ) : (
        <span ref={spanRef} style={{display: 'none'}} />
      )}
    </>
  );
};

export default Tooltip;
