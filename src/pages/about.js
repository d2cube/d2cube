import PageLayout from '../components/page-layout.js';
import BrandLogo from '../components/ui/brand-logo.js';
import ExternalLink from '../components/ui/external-link.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import {UrlType} from '../enums/url-type.js';

const Page = () => {
  const left = (
    <Frame title="About D2Cube">
      <div>
        <p>
          <BrandLogo /> is an unofficial non-profit Diablo 2 fansite and is not
          affiliated with Blizzard.
        </p>
        <p>
          It is an{' '}
          <ExternalLink href={UrlType.GithubRepo}>
            open-source project
          </ExternalLink>{' '}
          built and maintained by{' '}
          <ExternalLink href={UrlType.Author}>chrisrzhou</ExternalLink>. The
          site is built with{' '}
          <ExternalLink href={UrlType.UinixUi}>uinix-ui</ExternalLink> and
          served statically via{' '}
          <ExternalLink href={UrlType.NextJs}>Next.js</ExternalLink>.
        </p>
      </div>
      <hr />
      <div>
        <h3>Features</h3>
        <ul>
          <li>Open-source</li>
          <li>(Ads-)Free</li>
          <li>Public API</li>
          <li>Pure static site</li>
          <li>Searchable and complete item/sets/runewords database</li>
          <li>Unique companion experience adopting in-game UIUX</li>
          <li>
            Computational validation through the UI
            <ul>
              <li>
                <em>What can I cube given these components?</em>
              </li>
              <li>
                <em>What Runewords can I make given these components?</em>
              </li>
            </ul>
          </li>
          <li>
            Item simulation
            <ul>
              <li>Cubing</li>
              <li>Socketing</li>
            </ul>
          </li>
          <li>
            Upcoming
            <ul>
              <li>Character Stats</li>
              <li>Character Skills</li>
              <li>Gambling</li>
              <li>Quest enhancements (e.g. Larzuk, Anya, Charsi)</li>
            </ul>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <h3>Resources</h3>
        The following external links supplement the site.
        <ul>
          <li>
            <ExternalLink href={UrlType.GithubRepo}>Github</ExternalLink>
          </li>
          <li>
            <ExternalLink href={UrlType.DocsUi}>UI</ExternalLink>
          </li>
          <li>
            <ExternalLink href={UrlType.DocsApi}>API</ExternalLink>
          </li>
          <li>
            <ExternalLink href={UrlType.DocsRoadmap}>Roadmap</ExternalLink>
          </li>
        </ul>
      </div>
    </Frame>
  );

  return (
    <PageLayout title="About">
      <Interface left={left} />
    </PageLayout>
  );
};

export default Page;
