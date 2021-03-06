import {useCopy} from '../../hooks/index.js';
import Button from './button.js';

const CopyButton = ({label, text}) => {
  const [isCopied, copy] = useCopy(text);

  return <Button text={isCopied ? 'Copied!' : label} onClick={copy} />;
};

export default CopyButton;
