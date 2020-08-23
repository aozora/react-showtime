const path = require('path');

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])]
      }
    };

    // SCSS
    newConfig.module.rules.push(
      {
        test: /\.(s*)css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
        // include: path.resolve(__dirname, '../styles/app.scss')
      }
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   loaders: ['file-loader']
      //   include: path.resolve(__dirname, '../public')
      // }
    );

    // If you are using CSS Modules, check out the setup from Justin (justincy)
    // Many thanks to Justin for the inspiration
    // https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70#file-next-preset-js

    //
    // CSS Modules
    // Many thanks to https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
    //

    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    // newConfig.module.rules.find(
    //   rule => rule.test.toString() === '/\\.css$/'
    // ).exclude = /\.module\.css$/;
    //
    // // Then we tell webpack what to do with CSS modules
    // newConfig.module.rules.push({
    //   test: /\.module\.css$/,
    //   include: path.resolve(__dirname, '../components'),
    //   use: [
    //     'style-loader',
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         importLoaders: 1,
    //         modules: true
    //       }
    //     }
    //   ]
    // });

    return newConfig;
  }
};
