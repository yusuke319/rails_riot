const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        bundle: './frontend/javascripts/main.js'
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: '[name]-[hash].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: 'riotjs-loader',
                query: {
                    type: 'babel'
                }
            }
        ],
        loaders: [
            {
                test: /\.js$|\.tag$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({ // ビルド時に環境変数を置き換えてくれるように設定できるプラグイン
        //     'process.env': {
        //         NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        //     }
        // }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new ManifestPlugin(),
        new webpack.ProvidePlugin({
            riot: 'riot'
        })
    ]
};