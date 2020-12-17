const path = require('path');
const webpack = require('webpack');

const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/bundles/',
        path: path.join(__dirname, '../public/bundles'),
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
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
    plugins: [new LoadablePlugin()],
};
