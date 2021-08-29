import {Layout} from 'uinix-ui';

import ApiMethods from '../components/api-methods.js';
import PageLayout from '../components/page-layout.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import {API_METHODS as methods} from '../constants/api-methods.js';
import {UrlType} from '../enums/index.js';

const Page = () => {
  const left = (
    <Frame size="l" title="API">
      <Layout direction="column" overflow="auto">
        <p>
          D2Cube provides a public API accessible via <a href="/api">/api</a>.
        </p>
        <p>An upcoming NodeJS API will be supported in the near future.</p>
        <p>
          Please refer to{' '}
          <a href={UrlType.DocsApi}>the official documentation</a> for more
          details.
        </p>
        <ul>
          {methods.map(({name}) => (
            <li key={name}>
              <a href={`#${name}`}>
                <code>{name}</code>
              </a>
            </li>
          ))}
        </ul>
        <hr />
        <ApiMethods methods={methods} />
      </Layout>
    </Frame>
  );

  return (
    <PageLayout title="Develop">
      <Interface left={left} />
    </PageLayout>
  );
};

export default Page;
