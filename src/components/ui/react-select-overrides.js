import {k, props} from 'uinix-fp';
import {useTheme} from 'uinix-ui';

import {resolveItemColor} from '../../utils/resolvers/resolve-item-color.js';

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useTheme();

// TODO: uinix-ui to allow accessing theme values via property path
const themedStyles = {
  bordered: props('bordered')(theme.borders),
  diabloFont: props('diablo')(theme.fontFamilies),
  hover: props('hover')(theme.opacities),
  interfaceActive: props('interface.active')(theme.colors),
  interfaceBackground: props('interface.background')(theme.colors),
  interfaceHover: props('interface.hover')(theme.colors),
  brandPrimaryColor: props('brand.primary')(theme.colors),
  textPrimaryColor: props('text.primary')(theme.colors),
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
    fontFamily: themedStyles.diabloFont,
    ':hover': {
      border: themedStyles.bordered,
    },
  }),
  input: (provided) => ({
    ...provided,
    color: themedStyles.textPrimaryColor,
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: themedStyles.interfaceBackground,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? themedStyles.interfaceActive
      : themedStyles.interfaceBackground,
    fontFamily: themedStyles.diabloFont,
    ':hover': {
      backgroundColor: themedStyles.interfaceHover,
    },
  }),
  singleValue: (provided, state) => {
    const {item} = state.getValue()[0];
    return {
      ...provided,
      color: props(resolveItemColor(item))(theme.colors),
    };
  },
};
