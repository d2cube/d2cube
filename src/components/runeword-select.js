import {getRunewords} from '../api/index.js';
import Select from './ui/select.js';

const RunewordSelect = ({isMenuOpen = false, value, onChange}) => (
  <Select
    isMenuOpen={isMenuOpen}
    options={options}
    placeholder="Search runewords..."
    value={value}
    renderOption={renderOption}
    onChange={onChange}
  />
);

const renderOption = ({option}) => <div>{option.label}</div>;

const mapRunewordToOption = (runeword) => ({
  runeword,
  value: runeword.id,
  label: runeword.name,
});

const runewords = getRunewords();

const options = runewords.map(mapRunewordToOption);

export default RunewordSelect;
