import {useMemo} from 'react';
import ReactSelect, {
  components as rsComponents,
  createFilter,
} from 'react-windowed-select';
import {k, pipe, props} from 'uinix-fp';

import {degroupBy, groupBy, isEmpty, keyOn} from '../../utils/fp.js';
import {
  components as overrideComponents,
  styles,
} from './react-select-overrides.js';

const Select = ({
  group = undefined,
  isMenuOpen = undefined,
  isMulti = false,
  isClearable = true,
  isSearchable = true,
  max = undefined,
  noOptionsMessage = undefined,
  options: initialOptions,
  placeholder = 'Search...',
  value,
  formatOptionLabel = undefined,
  renderOption = defaultRenderOption,
  onChange,
}) => {
  const options = useMemo(() => {
    if (!group) {
      return initialOptions;
    }

    const groupedOptions = groupBy(group.key)(initialOptions);
    return Object.entries(groupedOptions).map(([groupValue, options]) => ({
      label: group.getLabel(groupValue),
      value: groupValue,
      options,
    }));
  }, [group, initialOptions]);

  const optionsMap = useMemo(() => {
    const degrouped = degroupBy('options')(options);
    return Object.fromEntries(
      degrouped.map((option) => [option.value, option]),
    );
  }, [options]);

  const optionValue = isMulti
    ? value.map((v) => optionsMap[v])
    : optionsMap[value];

  const components = useMemo(
    () => ({
      ...overrideComponents,
      Option: createOptionComponent(renderOption),
    }),
    [renderOption],
  );

  const handleChange = (updatedOption, state) => {
    if (onChange) {
      if (isMulti) {
        switch (state.action) {
          case 'clear':
            onChange([]);
            break;
          case 'deselect-option':
          case 'select-option':
            onChange([...value, getValue(state.option)]);
            break;
          case 'pop-value':
            onChange(value.slice(0, -1));
            break;
          case 'remove-value':
            onChange(updatedOption.map(getValue));
            break;
          default:
            break;
        }
      } else {
        onChange(getValue(updatedOption));
      }
    }
  };

  return (
    <ReactSelect
      isClearable={isClearable}
      isSearchable={isSearchable}
      hideSelectedOptions={false}
      isMulti={isMulti}
      components={components}
      filterOption={filterOption}
      formatOptionLabel={
        formatOptionLabel || pipe([keyOn('option'), renderOption])
      }
      max={max}
      menuIsOpen={isMenuOpen}
      noOptionsMessage={k(noOptionsMessage)}
      options={options}
      placeholder={placeholder}
      styles={styles}
      value={isEmpty(optionValue) ? null : optionValue}
      onChange={handleChange}
    />
  );
};

const getValue = (x) => (isEmpty(x) ? null : props('value')(x));

const defaultRenderOption = props('option.label');

const createOptionComponent = (renderOption) => (props) => {
  const {children, data, innerProps, selectProps, ...rest} = props;
  const {onClick} = innerProps;
  return (
    <rsComponents.Option {...rest} innerProps={{onClick}}>
      {renderOption({option: data, query: selectProps.inputValue})}
    </rsComponents.Option>
  );
};

const filterOption = createFilter({
  ignoreAccents: false,
  matchFrom: 'start',
});

export default Select;
