import {useMemo} from 'react';

import {getRunewords} from '../api/index.js';
import RunewordName from './runeword-name.js';
import Select from './ui/select.js';

const RunewordSelect = ({isMenuOpen = undefined, runes, value, onChange}) => {
  const options = useMemo(
    () => runewords.filter(filterByRunes(runes)).map(mapRunewordToOption),
    [runes],
  );

  let noOptionsMessage = null;
  let placeholder;
  if (runes) {
    placeholder =
      options.length === 0
        ? `No Runewords spelled with '${runes}'`
        : `Runewords spelled with '${runes}'`;
  } else {
    placeholder = 'Search Runewords...';
    noOptionsMessage = 'No Runewords found.';
  }

  return (
    <Select
      isMenuOpen={isMenuOpen}
      noOptionsMessage={noOptionsMessage}
      options={options}
      placeholder={placeholder}
      value={value}
      renderOption={createRenderOption(runes)}
      onChange={onChange}
    />
  );
};

const filterByRunes = (runes) => (runeword) => {
  if (!runes) {
    return true;
  }

  return runes ? runeword.id.includes(runes) : true;
};

const createRenderOption =
  (runes) =>
  ({option, query}) =>
    <RunewordName query={query} runeQuery={runes} runeword={option.data} />;

const mapRunewordToOption = (runeword) => ({
  data: runeword,
  value: runeword.id,
  label: runeword.name,
});

const runewords = getRunewords();

export default RunewordSelect;
