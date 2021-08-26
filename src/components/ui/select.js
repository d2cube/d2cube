import ReactSelect, {components as rc} from 'react-select';
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
  const {children, data, ...rest} = props;
  return <rc.Option {...rest}>{renderOption(data)}</rc.Option>;
};

export default Select;
