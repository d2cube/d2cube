import {useMemo} from 'react';
import ReactSelect, {
  components as rsComponents,
  createFilter,
} from 'react-windowed-select';
import {k, prop} from 'uinix-fp';

import {degroupBy, groupBy, isEmpty} from '../../utils/fp.js';
import {components, styles} from './react-select-overrides.js';

const Select = ({
  group = undefined,
  isMenuOpen = undefined,
  isMulti = false,
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
      label: group.labels[groupValue],
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

  const handleChange = (updatedOption, state) => {
    if (onChange) {
      if (isMulti) {
        switch (state.action) {
          case 'clear':
            onChange([]);
            break;
          case 'deselect-option':
          case 'select-option':
            onChange([...value, propByValue(state.option)]);
            break;
          case 'pop-value':
            onChange(value.slice(0, -1));
            break;
          case 'remove-value':
            onChange(updatedOption.map(propByValue));
            break;
          default:
            break;
        }
      } else {
        onChange(propByValue(updatedOption));
      }
    }
  };

  return (
    <ReactSelect
      isClearable
      isSearchable
      isMulti={isMulti}
      components={{
        ...components,
        Option: createOptionComponent(renderOption),
      }}
      filterOption={filterOption}
      formatOptionLabel={formatOptionLabel}
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

const propByValue = prop('value');

const defaultRenderOption = prop('label');

const createOptionComponent = (renderOption) => (props) => {
  const {children, data, selectProps, ...rest} = props;
  return (
    <rsComponents.Option {...rest}>
      {renderOption({option: data, query: selectProps.inputValue})}
    </rsComponents.Option>
  );
};

const filterOption = createFilter({
  matchFrom: 'start',
});

export default Select;
