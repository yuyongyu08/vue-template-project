const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
    ]
});