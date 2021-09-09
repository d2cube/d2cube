import {UrlType} from '../../enums/index.js';
import BrandIcon from './brand-icon.js';

const PaypalIcon = () => (
  <BrandIcon href={UrlType.Paypal} icon="paypal" tooltip="Paypal" />
);

export default PaypalIcon;
