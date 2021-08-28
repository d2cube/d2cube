import {Text} from 'uinix-ui';

const BrandText = ({color = undefined, text}) => (
  <Text color={color} variant="diablo">
    {text}
  </Text>
);

export default BrandText;
