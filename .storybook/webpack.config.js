const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('../webpack.config');

module.exports = (storybookBaseConfig, configType) => {

  storybookBaseConfig.module.rules = webpackConfig.module.rules;
  storybookBaseConfig.plugins.push(
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
    })
  );

  storybookBaseConfig.devServer = {
    hot: true,
    inline: true,
    poll: false,
  };


  return storybookBaseConfig;
};
