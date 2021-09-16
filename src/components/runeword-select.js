import {useMemo} from 'react';

import {getRunewords} from '../api/index.js';
import {BasePropertyType} from '../enums/index.js';
import {and} from '../utils/fp.js';
import {getSocketedLabel} from '../utils/get-socketed-label.js';
import RunewordName from './runeword-name.js';
import Select from './ui/select.js';

const RunewordSelect = ({
  isMenuOpen = undefined,
  item,
  sockets,
  runes,
  value,
  onChange,
}) => {
  const options = useMemo(() => {
    const groupedRunewords = runewords
      .filter(tests({sockets, item, runes}))
      .reduce((acc, runeword) => {
        const runeCount = runeword.runes.length;
        if (!(runeCount in acc)) {
          acc[runeCount] = [];
        }

        acc[runeCount].push(runeword);
        return acc;
      }, {});

    return Object.entries(groupedRunewords).map(([runeCount, runewords]) => ({
      label: getSocketedLabel({max: runeCount}),
      options: runewords.map(runewordToOption),
    }));
  }, [sockets, item, runes]);

  return (
    <Select
      isMenuOpen={isMenuOpen}
      noOptionsMessage="No runewords found."
      options={options}
      placeholder="Search runewords..."
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
      () => {
        const runewordLength = runeword.runes.length;
        if (sockets === null && item) {
          return (
            runewordLength <= item.properties.base[BasePropertyType.MaxSockets]
          );
        }

        if (sockets > 0) {
          return runeword.runes.length === sockets;
        }

        return true;
      },
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

const runewordToOption = (runeword) => ({
  data: runeword,
  value: runeword.id,
  label: runeword.name,
});

const runewords = getRunewords();

export default RunewordSelect;
