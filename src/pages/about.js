import PageLayout from '../components/page-layout.js';
import BrandLogo from '../components/ui/brand-logo.js';
import ExternalLink from '../components/ui/external-link.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import {UrlType} from '../enums/index.js';

const Page = () => {
  const left = (
    <Frame
      title={
        <div>
          About <BrandLogo />
        </div>
      }
    >
      <div>
        <p>
          <BrandLogo />, pronounced D2 Cube, is an unofficial non-profit Diablo
          2 fansite and is not affiliated with Blizzard.
        </p>
        <p>
          <BrandLogo /> takes an interactive and inquiry-based approach to
          deliver a unique D2 companion experience in teaching and answering
          questions about the game.
        </p>
        <p>
          <BrandLogo /> is (ads/login-)free 100% static site built with{' '}
          <ExternalLink href={UrlType.Uinix}>uinix</ExternalLink> and served via{' '}
          <ExternalLink href={UrlType.NextJs}>Next.js</ExternalLink>. It is an{' '}
          <ExternalLink href={UrlType.GithubRepo}>
            open-source project
          </ExternalLink>{' '}
          maintained by{' '}
          <ExternalLink href={UrlType.Author}>chrisrzhou</ExternalLink>.
        </p>
      </div>
      <hr />
      <div>
        <h3>Features</h3>
        <ul>
          <li>Open-source</li>
          <li>(Ads/login-)Free</li>
          <li>Public API</li>
          <li>100% static site</li>
          <li>Searchable item database</li>
          <li>Inquiry-based companion experience</li>
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
              <li>Quests (e.g. Larzuk, Anya, Charsi)</li>
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
