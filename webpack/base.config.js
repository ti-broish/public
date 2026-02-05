const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/bundles/',
        path: path.join(__dirname, '../public/bundles'),
        filename: 'bundle.[contenthash].js',
        chunkFilename: '[name].[contenthash].bundle.js',
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                plugins: [
                    "@loadable/babel-plugin"
                ],
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }],
        }, {
            test: [/\.woff?$/, /\.woff2?$/, /\.otf?$/, /\.ttf?$/, /\.eot?$/, /\.svg?$/, /\.png?$/, /\.gif?$/],
            loader: 'url-loader'
        }]
    },
    plugins: [
        new LoadablePlugin(),
        new webpack.DefinePlugin({
            'process.env.DATA_URL': JSON.stringify(process.env.DATA_URL),
            'process.env.GOOGLE_RECAPTCHA_KEY': JSON.stringify(process.env.GOOGLE_RECAPTCHA_KEY),
        }),
    ],
};
