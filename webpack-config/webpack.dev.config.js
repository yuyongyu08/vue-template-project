const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        open: false,
        contentBase: path.resolve(__dirname, '../build'),
        compress: true,
        hot: true,
        host: 'dev.m.58.com',
        port: 9000
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: `index.html`,
            // chunks: [entry], //控制每个页面只引入与自己相关的资源（css、js）
            template: `src/views/list/index.html`
        })
    ]
});