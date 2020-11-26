// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')
require('@babel/polyfill')

module.exports = {
    mode: 'development', // 开发模式
    entry: ['@babel/polyfill', path.resolve(__dirname, '../src/main.js')],    // 入口文件
    output: {
        filename: '[name].[hash:8].js',      // 打包后的文件名称
        path: path.resolve(__dirname, '../dist')  // 打包后的目录
    },
    devServer: {
        port: 3000,
        hot: true,
        contentBase: '../dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),//自动生成HTML文件
            title: 'webApp',//网页title

        }),
        new CleanWebpackPlugin(),
        new vueLoaderPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            ' @': path.resolve(__dirname, '../src')
        },
        extensions: ['*', '.js', '.json', '.vue']
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            use: ['vue-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] // 从右向左解析原则
        },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'] // 从右向左解析原则
        },
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            exclude: /node_modules/
        },
        {
            test: /\.(jpe?g|png|gif)$/i, //图片文件
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name].[hash:8].[ext]'
                            }
                        }
                    }
                }
            ],
            exclude: /node_modules/
        },
        ]
    }
}


