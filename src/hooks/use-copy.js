import {useEffect, useState} from 'react';

export const useCopy = (text) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 1000);
    }

    return () => clearTimeout(timeout);
  }, [isCopied]);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return [isCopied, copy];
};
