const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');

module.exports = {
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
            }),
            new webpack.HotModuleReplacementPlugin()
        ],

        devtool: 'source-map',

        devServer: {
            open: true,
            hot: true,
            contentBase: './output',
            port: 8008
        },
};
