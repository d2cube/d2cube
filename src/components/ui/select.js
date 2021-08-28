import ReactSelect, {
  components as rsComponents,
  createFilter,
} from 'react-windowed-select';
import {prop} from 'uinix-fp';

import {components, styles} from './react-select-overrides.js';

const Select = ({
  isMenuOpen = undefined,
  options,
  placeholder = 'Search...',
  value,
  renderOption = defaultRenderOption,
  onChange,
}) => (
  <ReactSelect
    components={{
      ...components,
      Option: createOptionComponent(renderOption),
    }}
    filterOption={filterOption}
    menuIsOpen={isMenuOpen}
    options={options}
    placeholder={placeholder}
    styles={styles}
    value={value}
    onChange={onChange}
  />
);

const defaultRenderOption = prop('label');

const createOptionComponent = (renderOption) => (props) => {
  const {children, data, innerProps, selectProps, ...rest} = props;
  const {onClick} = innerProps;
  return (
    <rsComponents.Option {...rest} innerProps={{onClick}}>
      {renderOption({option: data, query: selectProps.inputValue})}
    </rsComponents.Option>
  );
};

const filterOption = createFilter({matchFrom: 'start'});

export default Select;
