const path = require('path');
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');
const nodeExternals = require('webpack-node-externals');

module.exports = ({ mode } = { mode: 'production' }) => {
    console.log(`mode is: ${mode}`);
    return {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, 'output'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader'],
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader',
                },
                {
                    test: /\.(jpg|jpeg|png)$/,
                    exclude: /node_modules/,
                    loader: ["url-loader"] // file-loader

                },
            ],
        },

        // Plugins
        plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html',
                // filename: 'index.html',
                // hash: true,
            }),
            new webpack.HotModuleReplacementPlugin()
        ],

        // OPTIONAL
        // Reload On File Change
        //watch: true,
        // Development Tools (Map Errors To Source File)
        devtool: 'source-map',

        devServer: {
            open: true,
            hot: true,
            contentBase: './output',
        },
    };
};
