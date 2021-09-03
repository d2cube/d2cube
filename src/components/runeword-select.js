import {useMemo} from 'react';
import {pipe} from 'uinix-fp';

import {getItem, getRunewords} from '../api/index.js';
import {and, append, concat, join} from '../utils/fp.js';
import {getItemTypeLabel} from '../utils/get-item-type-label.js';
import RunewordName from './runeword-name.js';
import Select from './ui/select.js';

const RunewordSelect = ({
  isMenuOpen = undefined,
  itemId,
  runes,
  value,
  onChange,
}) => {
  const item = getItem(itemId);

  const options = useMemo(
    () => runewords.filter(tests({item, runes})).map(mapRunewordToOption),
    [item, runes],
  );

  const placeholder = getPlaceholder({item, matchCount: options.length, runes});

  return (
    <Select
      isMenuOpen={isMenuOpen}
      noOptionsMessage="No runewords found."
      options={options}
      placeholder={placeholder}
      value={value}
      renderOption={createRenderOption(runes)}
      onChange={onChange}
    />
  );
};

const tests =
  ({item, runes}) =>
  (runeword) =>
    and([
      () => new RegExp(runes + '([^a-z]|[^a-z]?$)').test(runeword.id),
      () => (item ? runeword.types.includes(item.type) : true),
    ])();

const createRenderOption =
  (runes) =>
  ({option, query}) =>
    <RunewordName query={query} runeQuery={runes} runeword={option.data} />;

const getPlaceholder = ({item, matchCount, runes}) =>
  pipe([
    concat(matchCount ? 'Search' : 'No'),
    concat(item ? getItemTypeLabel(item.type) : null),
    concat('Runewords'),
    concat(runes ? `with '${runes}'` : null),
    join(' '),
    append('...'),
  ])([]);

const mapRunewordToOption = (runeword) => ({
  data: runeword,
  value: runeword.id,
  label: runeword.name,
});

const runewords = getRunewords();

export default RunewordSelect;
