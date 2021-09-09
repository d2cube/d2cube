import ApiMethods from '../components/api-methods.js';
import PageLayout from '../components/page-layout.js';
import BrandLogo from '../components/ui/brand-logo.js';
import ExternalLink from '../components/ui/external-link.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import {API_METHODS as methods} from '../constants/api-methods.js';
import {UrlType} from '../enums/index.js';

const Page = () => {
  const left = (
    <Frame size="l" title="For Developers">
      <div>
        <p>
          <BrandLogo /> provides a public API accessible via{' '}
          <ExternalLink href="/api">/api</ExternalLink>. You can test the API
          methods below!
        </p>
        <p>An upcoming NodeJS API will be supported in the near future.</p>
        <p>
          Please refer to{' '}
          <ExternalLink href={UrlType.DocsApi}>
            the official documentation
          </ExternalLink>{' '}
          for more details and report any issues{' '}
          <ExternalLink href={UrlType.GithubIssues}>here</ExternalLink>.
        </p>
      </div>
      <hr />
      <div>
        <h3>API Methods</h3>
        <ul>
          {methods.map(({name}) => (
            <li key={name}>
              <a href={`#${name}`}>
                <code>{name}</code>
              </a>
            </li>
          ))}
        </ul>
        <ApiMethods methods={methods} />
      </div>
    </Frame>
  );

  return (
    <PageLayout title="Developers">
      <Interface left={left} />
    </PageLayout>
  );
};

export default Page;
