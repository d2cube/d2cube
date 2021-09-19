import NextHead from 'next/head.js';

import pkg from '../../package.json';
import system from '../system/index.js';

const Head = ({title}) => (
  <NextHead>
    <title>{title}</title>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
    <link
      rel="mask-icon"
      href="/favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <link rel="manifest" href="/favicons/site.webmanifest" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={pkg.description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={`d2cube - ${title}`} />
    <meta property="og:description" content={pkg.description} />
    <meta property="og:url" content="https://d2cu.be" />
    <meta property="og:image" content="/images/logo.png" />
    <meta name="theme-color" content={system.theme.colors.brand.primary} />
  </NextHead>
);

export default Head;
