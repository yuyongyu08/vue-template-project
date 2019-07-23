const path = require('path');
const entry = require('./entry');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpackDevConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '../build'),
        compress: true,
        hot: true,
        host: 'dev.m.58.com',
        port: 9000
    },
    plugins: []
};

Object.keys(entry).forEach((key) => {
    webpackDevConfig.plugins.push(
        new HtmlWebpackPlugin({
            filename: `${key}/index.html`,
            chunks: [`${key}`], //控制每个页面只引入与自己相关的资源（css、js）
            template: `src/views/${key}/index.html`
        })
    )
});

module.exports = merge(webpackBaseConfig, webpackDevConfig);