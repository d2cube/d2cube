import {range} from '../../utils/fp.js';
import Select from './select.js';

const PageSelect = ({page = 0, pageSize, totalCount, onChange}) => {
  const max = totalCount / pageSize;
  const options = range(0)(max).map(getOptionLabel({pageSize, totalCount}));

  return (
    <Select
      isClearable={false}
      isSearchable={false}
      options={options}
      formatOptionLabel={formatOptionLabel}
      placeholder="Select page"
      value={page}
      onChange={onChange}
    />
  );
};

const getOptionLabel =
  ({pageSize, totalCount}) =>
  (value) => {
    const min = Math.max(value * pageSize + 1, 0);
    const max = Math.min((value + 1) * pageSize, totalCount);

    return {
      data: {totalCount},
      label: `${min}-${max}`,
      value,
    };
  };

const formatOptionLabel = (option) =>
  `${option.label} of ${option.data.totalCount} rows`;

export default PageSelect;
