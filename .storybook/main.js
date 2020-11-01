const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],

  babel: async options => ({
    ...options,
    presets: [
      ...options.presets,
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        },
        'preset-react-jsx-transform' // Can name this anything, just an arbitrary alias to avoid duplicate presets'
      ]
    ]
  }),

  // presets: [path.resolve(__dirname, './presets/next-preset.js')]
  webpackFinal: async (config, { configType }) => {
    // SCSS
    config.module.rules.push({
      test: /\.(s*)css$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    });

    // support the alias @
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../components'),
      '@/lib': path.resolve(__dirname, '../lib'),
      '@/containers': path.resolve(__dirname, '../containers'),
      '@/store': path.resolve(__dirname, '../store'),
      '@/styles': path.resolve(__dirname, '../styles')
    };

    // If you are using CSS Modules, check out the setup from Justin (justincy)
    // Many thanks to Justin for the inspiration
    // https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70#file-next-preset-js

    //
    // CSS Modules
    // Many thanks to https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
    //

    return config;
  }
};
