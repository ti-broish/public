const webpack = require('webpack');
const baseConfig = require('./base.config.js');
const merge = require('webpack-merge');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VITE_FORM_URL': JSON.stringify(
                process.env.VITE_FORM_URL || 'http://localhost:8787'
            )
        })
    ]
    //plugins: [
    //    new BundleAnalyzerPlugin()
    // ]
});
