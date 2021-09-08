import {Text} from 'uinix-ui';

const BrandText = ({
  as = undefined,
  color = undefined,
  fontSize = undefined,
  text,
  textAlign = undefined,
}) => (
  <Text
    as={as}
    color={color}
    fontFamily="diablo"
    fontSize={fontSize}
    textAlign={textAlign}
  >
    {text}
  </Text>
);

export default BrandText;
