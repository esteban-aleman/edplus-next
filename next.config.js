/** @type {import('next').NextConfig}
 * */ // eslint-disable-next-line @typescript-eslint/no-var-requires
const withExportImages = require('next-export-optimize-images');
const nextConfig = withExportImages({
  reactStrictMode: true,
});

module.exports = nextConfig;
