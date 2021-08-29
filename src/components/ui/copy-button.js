import {useEffect, useState} from 'react';

import Button from './button.js';

const CopyButton = ({label, text}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 1000);
    }

    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <Button size="s" text={isCopied ? 'Copied!' : label} onClick={handleCopy} />
  );
};

export default CopyButton;
