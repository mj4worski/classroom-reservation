const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      SERVICE_URL: JSON.stringify('http://localhost:3000'),
    }),
  ],
});
