import {UrlType} from '../../enums/index.js';
import BrandIcon from './brand-icon.js';

const GithubIcon = () => (
  <BrandIcon href={UrlType.GithubRepo} icon="github" tooltip="Github" />
);

export default GithubIcon;
