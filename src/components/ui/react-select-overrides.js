import {k, props} from 'uinix-fp';
import {useTheme} from 'uinix-ui';

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useTheme();

// TODO: uinix-ui to allow accessing theme values via property path
const themedStyles = {
  bordered: props('bordered')(theme.borders),
  borderWidth: props('border')(theme.borderWidths),
  diabloFont: props('diablo')(theme.fontFamilies),
  hover: props('hover')(theme.opacities),
  interfaceActive: props('interface.active')(theme.colors),
  interfaceBackground: props('interface.background')(theme.colors),
  interfaceHover: props('interface.hover')(theme.colors),
  brandPrimaryColor: props('brand.primary')(theme.colors),
  textPrimaryColor: props('text.primary')(theme.colors),
  textMutedColor: props('text.muted')(theme.colors),
  defaultFontSize: props('m')(theme.fontSizes),
  spacingSmall: props('s')(theme.spacings),
};

const IndicatorsContainer = k(null);

export const components = {
  IndicatorsContainer,
};

export const styles = {
  container: () => ({
    width: '100%',
  }),
  control: () => ({
    backgroundColor: themedStyles.interfaceBackground,
    border: themedStyles.bordered,
    fontFamily: themedStyles.diabloFont,
    padding: themedStyles.spacingSmall,
    '> div': {
      padding: 0,
    },
    ':hover': {
      border: themedStyles.bordered,
    },
  }),
  groupHeading: () => ({
    borderBottom: themedStyles.bordered,
    borderTop: themedStyles.bordered,
    fontFamily: themedStyles.diabloFont,
    fontSize: themedStyles.largeFontSize,
    padding: themedStyles.spacingSmall,
    marginTop: `calc(-${themedStyles.spacingSmall} - ${themedStyles.borderWidth})`,
  }),
  input: () => ({
    color: themedStyles.textPrimaryColor,
  }),
  menu: () => ({
    backgroundColor: themedStyles.interfaceBackground,
    border: themedStyles.bordered,
    marginTop: themedStyles.spacingSmall,
    '> div': {
      padding: 0,
    },
  }),
  noOptionsMessage: () => ({
    fontFamily: themedStyles.diabloFont,
    color: themedStyles.textMutedColor,
    padding: themedStyles.spacingSmall,
  }),
  option: (_, state) => ({
    backgroundColor: getOptionBackgroundColor(
      state,
      themedStyles.interfaceBackground,
    ),
    fontFamily: themedStyles.diabloFont,
    padding: themedStyles.spacingSmall,
    ':hover': {
      backgroundColor: getOptionBackgroundColor(
        state,
        themedStyles.interfaceHover,
      ),
    },
  }),
  placeholder: () => ({
    color: themedStyles.textMutedColor,
    position: 'absolute',
  }),
  singleValue: () => ({
    color: themedStyles.textPrimaryColor,
  }),
};

const getOptionBackgroundColor = (state, defaultBackgroundColor) => {
  if (state.isSelected) {
    return themedStyles.interfaceActive;
  }

  if (state.isFocused) {
    return themedStyles.interfaceHover;
  }

  return defaultBackgroundColor;
};
