const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('../webpack.config');

module.exports = {
    module: webpackConfig.module,
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            tether: 'tether',
            Tether: 'tether',
            'window.Tether': 'tether',
            Popper: ['popper.js', 'default'],
        }),
    ]
};