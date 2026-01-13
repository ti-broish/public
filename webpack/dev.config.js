const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./base.config.js');
const merge = require('webpack-merge');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
            staticOptions: {
                index: 'index_dev.html',
            },
        },
        compress: true,
        port: 5001,
        historyApiFallback: {
            index: '/index_dev.html'
        },
        hot: true,
    },
    //plugins: [
    //    new BundleAnalyzerPlugin()
    // ]
});
