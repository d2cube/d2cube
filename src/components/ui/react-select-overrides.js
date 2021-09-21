import {components as rsComponents} from 'react-windowed-select';
import {k, props} from 'uinix-fp';
import {Element, useTheme} from 'uinix-ui';

import BrandText from './brand-text.js';

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useTheme();

// TODO: uinix-ui to allow accessing theme values via property path
const themedStyles = {
  bordered: props('bordered')(theme.borders),
  borderWidth: props('border')(theme.borderWidths),
  diabloFont: props('diablo')(theme.fontFamilies),
  bodyFont: props('body')(theme.fontFamilies),
  fontSizeSmall: props('s')(theme.fontSizes),
  hover: props('hover')(theme.opacities),
  interfaceActive: props('interface.active')(theme.colors),
  interfaceBackground: props('interface.background')(theme.colors),
  interfaceHover: props('interface.hover')(theme.colors),
  borderColor: props('interface.border')(theme.colors),
  brandPrimaryColor: props('brand.primary')(theme.colors),
  textPrimaryColor: props('text.primary')(theme.colors),
  textMutedColor: props('text.muted')(theme.colors),
  defaultFontSize: props('m')(theme.fontSizes),
  spacingExtraSmall: props('xs')(theme.spacings),
  spacingSmall: props('s')(theme.spacings),
  spacingMedium: props('m')(theme.spacings),
};

export const components = {
  DropdownIndicator: k(null),
  IndicatorSeparator: k(null),
  Menu: (props) => {
    const {children, getValue, selectProps, ...rest} = props;
    const {isMulti, max} = selectProps;
    const hasExceededMaxMultiSelection =
      isMulti && max && getValue().length >= max;
    return (
      <rsComponents.Menu {...rest}>
        {hasExceededMaxMultiSelection ? (
          <Element p="s">
            <BrandText
              color="text.muted"
              text={`Only ${max} selections allowed`}
            />
          </Element>
        ) : (
          children
        )}
      </rsComponents.Menu>
    );
  },
};

export const styles = {
  clearIndicator: () => ({
    color: themedStyles.borderColor,
    display: 'flex',
  }),
  container: () => ({
    fontSize: themedStyles.fontSizeSmall,
    position: 'relative',
    width: '100%',
  }),
  control: () => ({
    backgroundColor: themedStyles.interfaceBackground,
    border: themedStyles.bordered,
    display: 'flex',
    fontFamily: themedStyles.diabloFont,
    justifyContent: 'space-between',
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
    color: themedStyles.textMutedColor,
    fontFamily: themedStyles.diabloFont,
    fontSize: themedStyles.largeFontSize,
    padding: themedStyles.spacingSmall,
    marginTop: `calc(-${themedStyles.spacingMedium} - ${themedStyles.borderWidth})`,
  }),
  input: () => ({
    color: themedStyles.textPrimaryColor,
    fontFamily: themedStyles.bodyFont,
  }),
  menuList: () => ({
    backgroundColor: themedStyles.interfaceBackground,
    maxHeight: 400,
    overflowY: 'auto',
  }),
  menu: () => ({
    backgroundColor: themedStyles.interfaceBackground,
    border: themedStyles.bordered,
    color: themedStyles.textPrimaryColor,
    left: 0,
    marginTop: themedStyles.spacingSmall,
    position: 'absolute',
    right: 0,
    '> div': {
      padding: 0,
    },
    zIndex: 1,
  }),
  multiValueLabel: () => ({
    color: themedStyles.brandPrimaryColor,
    fontSize: themedStyles.fontSizeSmall,
    paddingLeft: themedStyles.spacingSmall,
    paddingRight: themedStyles.spacingSmall,
  }),
  multiValue: () => ({
    backgroundColor: themedStyles.interfaceBackground,
    border: themedStyles.bordered,
    display: 'flex',
    margin: themedStyles.spacingExtraSmall,
    paddingLeft: themedStyles.spacingSmall,
    paddingRight: themedStyles.spacingSmall,
  }),
  multiValueRemove: () => ({
    color: themedStyles.borderColor,
    display: 'flex',
    alignItems: 'center',
    ':hover': {
      opacity: themedStyles.hover,
    },
    paddingLeft: themedStyles.spacingExtraSmall,
    paddingRight: themedStyles.spacingExtraSmall,
  }),
  noOptionsMessage: () => ({
    fontFamily: themedStyles.diabloFont,
    color: themedStyles.textMutedColor,
    padding: themedStyles.spacingSmall,
  }),
  option: (_, state) => ({
    backgroundColor: state.isSelected
      ? themedStyles.interfaceActive
      : state.isFocused
      ? themedStyles.interfaceHover
      : themedStyles.interfaceBackground,
    fontFamily: themedStyles.diabloFont,
    fontSize: themedStyles.fontSizeSmall,
    padding: themedStyles.spacingSmall,
    ':hover': {
      backgroundColor: state.isSelected
        ? themedStyles.interfaceActive
        : themedStyles.interfaceHover,
    },
  }),
  placeholder: () => ({
    color: themedStyles.textMutedColor,
  }),
  singleValue: () => ({
    color: themedStyles.textPrimaryColor,
    flex: 'auto',
  }),
};
