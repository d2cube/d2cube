import {useMemo} from 'react';

import {getSocketedLabel} from '../utils/get-socketed-label.js';
import {range} from '../utils/fp.js';
import Select from './ui/select.js';

const SocketSelect = ({max = 6, min = 1, value, onChange}) => {
  const options = useMemo(
    () => [
      {value: null, label: 'None'},
      ...range(min)(max).map((n) => ({
        value: n,
        label: getSocketedLabel(n),
      })),
    ],
    [max, min],
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
