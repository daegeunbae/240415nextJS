const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withFonts = require('next-fonts');

module.exports = withFonts(
  withBundleAnalyzer({
    distDir: '.next',
    webpack(config, { webpack }) {
      const prod = process.env.NODE_ENV === 'production';
      const plugins = [...config.plugins];
      return {
        ...config,
        mode: prod ? 'production' : 'development',
        devtool: prod ? 'hidden-source-map' : 'eval',
        plugins,
      };
    },
  }),
);
