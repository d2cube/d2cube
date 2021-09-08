import {useState} from 'react';
import {props} from 'uinix-fp';
import {Element, Layout} from 'uinix-ui';

import {isEmpty, isEmptyObject} from '../../utils/fp.js';
import PageSelect from './page-select.js';

const Table = ({columns, data}) => {
  const [page, setPage] = useState(0);
  const pageSize = 50;
  const totalCount = data.length;

  const filteredColumns = Object.fromEntries(
    Object.entries(columns).filter(filterColumnEntry(data)),
  );

  return (
    <Layout direction="column" spacing="s">
      <Layout alignSelf="flex-end">
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
            {Object.entries(filteredColumns).map(([key, column]) => (
              <Element key={key} as="th" w={column.width}>
                {column.label}
              </Element>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(page * pageSize, (page + 1) * pageSize).map((d, i) => (
            <tr key={i}>
              {Object.entries(filteredColumns).map(([key, column]) => (
                <Element key={key} as="td" w={column.width}>
                  {column.render(d)}
                </Element>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

const filterColumnEntry =
  (data) =>
  ([_, column]) =>
    !data.every((d) => {
      const v = props(column.key)(d);
      return isEmpty(v) || isEmptyObject(v);
    });

export default Table;
