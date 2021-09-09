import {saveAs} from 'file-saver';
import {useMemo, useState} from 'react';
import {prop} from 'uinix-fp';
import {Element, Layout} from 'uinix-ui';

import BrandIcon from './brand-icon.js';
import PageSelect from './page-select.js';
import Select from './select.js';

const Table = ({
  columns,
  data,
  visibleColumnKeys: initialVisibleColumnKeys = columns.map(prop('key')),
}) => {
  const [visibleColumnsKeys, setVisibleColumnKeys] = useState(
    initialVisibleColumnKeys,
  );
  const [page, setPage] = useState(0);

  const columnOptions = useMemo(
    () =>
      columns.map(({key, label}) => ({
        label,
        value: key,
      })),
    [columns],
  );

  const visibleColumns = useMemo(
    () => columns.filter((column) => visibleColumnsKeys.includes(column.key)),
    [columns, visibleColumnsKeys],
  );

  const handleExport = () => {
    const file = new File([JSON.stringify(data, null, 2)], 'items.json', {
      type: 'application/json',
    });
    saveAs(file);
  };

  const pageSize = 50;
  const totalCount = data.length;

  return (
    <Layout direction="column" spacing="s">
      <Layout alignSelf="flex-end" spacing="m" w="50%">
        <BrandIcon
          icon="download"
          tooltip="Export as JSON"
          onClick={handleExport}
        />
        <Select
          isMulti
          isClearable={false}
          shouldRenderValue={false}
          value={visibleColumnsKeys}
          options={columnOptions}
          placeholder="Show / Hide Columns"
          onChange={setVisibleColumnKeys}
        />
        <PageSelect
          page={page}
          pageSize={pageSize}
          totalCount={totalCount}
          onChange={setPage}
        />
      </Layout>
      <table>
        <thead>
          <tr>
            {visibleColumns.map(({key, label, width}) => (
              <Element key={key} as="th" w={width}>
                {label}
              </Element>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(page * pageSize, (page + 1) * pageSize).map((d, i) => (
            <tr key={i}>
              {visibleColumns.map(({key, render, width}) => (
                <Element key={key} as="td" w={width}>
                  {render(d)}
                </Element>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Table;
