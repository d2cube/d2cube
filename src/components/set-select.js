import {getSets} from '../api/index.js';
import {ITEM_TIER_TYPE_LABELS} from '../constants/index.js';
import {groupBy} from '../utils/fp.js';
import SetName from './set-name.js';
import Select from './ui/select.js';

const SetSelect = ({
  isMenuOpen = false,
  value = undefined,
  onChange = undefined,
}) => (
  <Select
    isMenuOpen={isMenuOpen}
    options={options}
    placeholder="Search sets..."
    value={value}
    renderOption={renderOption}
    onChange={onChange}
  />
);

const renderOption = ({option, query}) => (
  <SetName set={option.set} query={query} />
);

const mapSetToOption = (set) => ({
  set,
  value: set.id,
  label: set.name,
});

const getOptions = () => {
  const sets = getSets().map(mapSetToOption);
  const groupedSets = groupBy('set.tier')(sets);
  return Object.entries(groupedSets).map(([tier, options]) => ({
    label: ITEM_TIER_TYPE_LABELS[tier],
    value: tier,
    options,
  }));
};

const options = getOptions();

export default SetSelect;
