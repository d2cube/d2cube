import {Text} from 'uinix-ui';

const BrandText = ({
  as = undefined,
  color = undefined,
  fontSize = undefined,
  text,
}) => (
  <Text as={as} color={color} fontSize={fontSize} variant="diablo">
    {text}
  </Text>
);

export default BrandText;
