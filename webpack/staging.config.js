const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');
// const CompressionPlugin = require('compression-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        //new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.VITE_FORM_URL': JSON.stringify(
                process.env.VITE_FORM_URL || 'https://signup-staging.tibroish.bg'
            )
        }),
        //new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
        //new UglifyJsPlugin({sourceMap: false, uglifyOptions: {compress: true}}),
        new webpack.LoaderOptionsPlugin({minimize: true}),
        new webpack.optimize.AggressiveMergingPlugin(),
        // new CompressionPlugin({
        //     filename: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.js$|\.css$|\.html$/,
        //     //threshold: 10240,,
        //     minRatio: 0.8,
        // })
    ]
});
