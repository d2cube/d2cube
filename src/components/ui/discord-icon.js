import {UrlType} from '../../enums/index.js';
import BrandIcon from './brand-icon.js';

const DiscordIcon = () => (
  <BrandIcon href={UrlType.Discord} icon="discord" tooltip="Discord" />
);

export default DiscordIcon;
