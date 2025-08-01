const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/main.tsx',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
    },
    output: {
        publicPath: 'auto',
        clean: true,
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {},
            shared: {
                react: {
                    singleton: true,
                    eager: true,
                    requiredVersion: '18.2.0',
                },
                'react-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: '18.2.0',
                },
            },
        }),
    ],
};