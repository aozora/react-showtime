// Using the use the interoperable object-based format to support stoybook
// https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins
module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false
      }
    }
  }
};
