const webpack = require('webpack');
const baseConfig = require('./base.config.js');
const merge = require('webpack-merge');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    mode: 'development',
    //plugins: [
    //    new BundleAnalyzerPlugin()
    // ]
});
