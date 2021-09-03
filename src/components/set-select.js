import {getSets} from '../api/index.js';
import {getItemTierTypeLabel} from '../utils/get-item-tier-type-label.js';
import SetName from './set-name.js';
import Select from './ui/select.js';

const SetSelect = ({
  isMenuOpen = undefined,
  value = undefined,
  onChange = undefined,
}) => (
  <Select
    group={group}
    isMenuOpen={isMenuOpen}
    noOptionsMessage="No sets found."
    options={options}
    placeholder="Search sets..."
    value={value}
    renderOption={renderOption}
    onChange={onChange}
  />
);

const renderOption = ({option, query}) => (
  <SetName set={option.data} query={query} />
);

const mapSetToOption = (set) => ({
  data: set,
  value: set.id,
  label: set.name,
});

const group = {
  key: 'data.tier',
  getLabel: getItemTierTypeLabel,
};

const options = getSets().map(mapSetToOption);

export default SetSelect;
