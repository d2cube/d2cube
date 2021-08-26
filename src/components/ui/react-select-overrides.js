import {k, props} from 'uinix-fp';
import {useTheme} from 'uinix-ui';

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useTheme();

// TODO: uinix-ui to allow accessing theme values via property path
const themedStyles = {
  bordered: props('bordered')(theme.borders),
  diabloFont: props('diablo')(theme.fontFamilies),
  hover: props('hover')(theme.opacities),
  interfaceBackground: props('interface.background')(theme.colors),
  textPrimary: props('text.primary')(theme.colors),
};

const IndicatorsContainer = k(null);

export const components = {
  IndicatorsContainer,
};

export const styles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: themedStyles.interfaceBackground,
    border: themedStyles.bordered,
    color: themedStyles.textPrimary,
    fontFamily: themedStyles.diabloFont,
  }),
  input: (provided) => ({
    ...provided,
    color: themedStyles.textPrimary,
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: themedStyles.interfaceBackground,
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: themedStyles.interfaceBackground,
    fontFamily: themedStyles.diabloFont,
    ':hover': {
      opacity: themedStyles.hover,
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: themedStyles.textPrimary,
  }),
};
