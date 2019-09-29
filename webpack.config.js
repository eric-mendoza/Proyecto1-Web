const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
require("@babel/register");

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    // Plugins
    plugins: [
        new htmlWebpackPlugin({
            template: './output/index.html',
            filename: 'index.html',
            hash: true
        })
    ],

    // OPTIONAL
    // Reload On File Change
    //watch: true,
    // Development Tools (Map Errors To Source File)
    devtool: 'source-map',

    devServer: {
        contentBase: './output'
    }
};