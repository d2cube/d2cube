// eslint-disable-next-line unicorn/prefer-module
const withTM = require('next-transpile-modules')([
  'comma-separated-tokens',
  'hast-to-hyperscript',
  'property-information',
  'space-separated-tokens',
  'uinix-fp',
  'uinix-theme',
  'uinix-ui',
  'unist-util-is',
  'web-namespaces',
]);

// eslint-disable-next-line unicorn/prefer-module
module.exports = withTM({
  eslint: {
    ignoreDuringBuilds: true,
  },
});
