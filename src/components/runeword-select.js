import {useMemo} from 'react';
import {pipe} from 'uinix-fp';

import {getItem, getRunewords} from '../api/index.js';
import {and, append, concat, join} from '../utils/fp.js';
import {getItemTypeLabel} from '../utils/get-item-type-label.js';
import {getSocketedLabel} from '../utils/get-socketed-label.js';
import RunewordName from './runeword-name.js';
import Select from './ui/select.js';

const RunewordSelect = ({
  isMenuOpen = undefined,
  itemId,
  sockets,
  runes,
  value,
  onChange,
}) => {
  const item = getItem(itemId);

  const options = useMemo(
    () =>
      runewords.filter(tests({sockets, item, runes})).map(mapRunewordToOption),
    [sockets, item, runes],
  );

  const placeholder = getPlaceholder({item, sockets, runes});

  return (
    <Select
      isMenuOpen={isMenuOpen}
      noOptionsMessage="No runewords found."
      options={options}
      placeholder={placeholder}
      value={value}
      renderOption={createRenderOption({item, runes})}
      onChange={onChange}
    />
  );
};

const tests =
  ({sockets, item, runes}) =>
  (runeword) =>
    and([
      () => new RegExp(runes + '([^a-z]|[^a-z]?$)').test(runeword.id),
      () => (item ? runeword.types.includes(item.type) : true),
      () => (sockets > 0 ? runeword.runes.length === sockets : true),
    ])();

const createRenderOption =
  ({item, runes}) =>
  ({option, query}) =>
    (
      <RunewordName
        item={item}
        query={query}
        runeQuery={runes}
        runeword={option.data}
      />
    );

const getPlaceholder = ({item, sockets, runes}) =>
  pipe([
    concat('Search'),
    concat(sockets ? `${getSocketedLabel(sockets)}-socketed` : null),
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
