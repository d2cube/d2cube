import {getSets} from '../api/index.js';
import {getTierLabel} from '../utils/get-tier-label.js';
import SetName from './set-name.js';
import Select from './ui/select.js';

const SetSelect = ({isMenuOpen = undefined, value, onChange}) => (
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
  getLabel: getTierLabel,
};

const options = getSets().map(mapSetToOption);

export default SetSelect;
