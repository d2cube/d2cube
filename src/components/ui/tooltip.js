import Tippy from '@tippyjs/react';
import {useEffect, useRef, useState} from 'react';

import 'tippy.js/dist/tippy.css';

// Based on: https://github.com/atomiks/tippyjs-react/issues/71#issuecomment-796880050
const Tooltip = ({children, isReadable = false, placement, tooltip}) => {
  const spanRef = useRef(null);
  const [triggerRef, setTriggerRef] = useState(null);

  useEffect(() => {
    const span = spanRef.current;
    if (span) {
      setTriggerRef(span.previousElementSibling);
    }

    return () => setTriggerRef(null);
  }, []);

  if (!tooltip) {
    return children;
  }

  return (
    <>
      {children}
      {triggerRef ? (
        <Tippy
          appendTo={document.body}
          arrow={false}
          content={tooltip}
          maxWidth={isReadable ? undefined : 'none'}
          placement={placement}
          reference={triggerRef}
        />
      ) : (
        <span ref={spanRef} style={{display: 'none'}} />
      )}
    </>
  );
};

export default Tooltip;
