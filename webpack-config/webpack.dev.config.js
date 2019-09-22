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
        compress: true,
        hot: true,
        port: 9000,
        publicPath: '/',publicPath,
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/$/,
                    to: '/src/views/index.html'
                }
            ]
        }
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