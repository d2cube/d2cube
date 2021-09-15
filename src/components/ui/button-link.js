import Link from 'next/link.js';
import {Element} from 'uinix-ui';

const ButtonLink = ({size = 'm', href, text}) => (
  <Link href={href}>
    <Element variant={`button.${size}`}>{text}</Element>
  </Link>
);

export default ButtonLink;
