import {UrlType} from '../../enums/index.js';
import BrandIcon from './brand-icon.js';

const GithubSponsorIcon = () => (
  <BrandIcon
    href={UrlType.GithubSponsor}
    icon="githubSponsor"
    tooltip="Github Sponsor"
  />
);

export default GithubSponsorIcon;
