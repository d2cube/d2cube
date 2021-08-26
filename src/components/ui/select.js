import ReactSelect, {components as rc} from 'react-windowed-select';
import {prop} from 'uinix-fp';

import {components, styles} from './react-select-overrides.js';

const Select = ({options, renderOption = defaultRenderOption, onChange}) => (
  <ReactSelect
    components={{
      ...components,
      Option: createOptionComponent(renderOption),
    }}
    options={options}
    styles={styles}
    onChange={onChange}
  />
);

const defaultRenderOption = prop('label');

const createOptionComponent = (renderOption) => (props) => {
  const {children, data, innerProps, selectProps, ...rest} = props;
  const {onClick} = innerProps;
  return (
    <rc.Option {...rest} innerProps={{onClick}}>
      {renderOption({option: data, query: selectProps.inputValue})}
    </rc.Option>
  );
};

export default Select;
