import {useMemo} from 'react';

import {getSocketedLabel} from '../utils/get-socketed-label.js';
import {range} from '../utils/fp.js';
import Select from './ui/select.js';

const SocketSelect = ({min = 1, value, onChange}) => {
  const options = useMemo(
    () => [
      {value: null, label: 'Any'},
      ...range(min)(6).map((n) => ({
        value: n,
        label: getSocketedLabel({max: n}),
      })),
    ],
    [min],
  );

  return (
    <Select
      isSearchable={false}
      options={options}
      placeholder="Select sockets"
      value={value}
      onChange={onChange}
    />
  );
};

export default SocketSelect;
