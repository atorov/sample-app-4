const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pkg = require('./package.json')

const APP_NAME = pkg.name
const APP_VERSION = pkg.version

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 8080

const NODE_MODULES = path.resolve(__dirname, 'node_modules')
const EXTERNALS = path.resolve(__dirname, 'externals')
const STORAGE = path.resolve(__dirname, '__storage__')
const EXCLUDE_DEFAULT = [NODE_MODULES, EXTERNALS, STORAGE]

const SRC = path.resolve(__dirname, 'src')
const DIST = path.resolve(__dirname, 'build/www/sample-app')

const NODE_ENV = process.env.NODE_ENV
const MODE = NODE_ENV !== 'development' ? 'production' : 'development'
process.env.BABEL_ENV = MODE

const config = {
    mode: MODE,

    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },

    entry: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        'whatwg-fetch',
        SRC,
    ],

    output: {
        path: DIST,
        publicPath: '/sample-app/',
    },

    devtool: 'source-map',

    performance: {
        maxEntrypointSize: MODE === 'production' ? 1000000 : 5000000,
        maxAssetSize: MODE === 'production' ? 1000000 : 5000000,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                include: SRC,
                exclude: EXCLUDE_DEFAULT,
                use: (() => {
                    if (MODE === 'development') {
                        return [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            [
                                                'postcss-preset-env',
                                                { /* Options */ },
                                            ],
                                        ],
                                    },
                                },
                            },
                        ]
                    }

                    return [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                            { /* Options */ },
                                        ],
                                    ],
                                },
                            },
                        },
                    ]
                })(),
            },
            {
                test: /\.less$/,
                include: SRC,
                exclude: EXCLUDE_DEFAULT,
                use: (() => {
                    if (MODE === 'development') {
                        return [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            [
                                                'postcss-preset-env',
                                                { /* Options */ },
                                            ],
                                        ],
                                    },
                                },
                            },
                            'less-loader',
                        ]
                    }

                    return [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                            { /* Options */ },
                                        ],
                                    ],
                                },
                            },
                        },
                        'less-loader',
                    ]
                })(),
            },
            {
                test: /\.scss$/,
                include: SRC,
                exclude: EXCLUDE_DEFAULT,
                use: (() => {
                    if (MODE === ':development') {
                        return [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            [
                                                'postcss-preset-env',
                                                { /* Options */ },
                                            ],
                                        ],
                                    },
                                },
                            },
                            'sass-loader',
                        ]
                    }

                    return [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                            { /* Options */ },
                                        ],
                                    ],
                                },
                            },
                        },
                        'sass-loader',
                    ]
                })(),
            },
            {
                test: /\.worker\.js$/,
                include: SRC,
                exclude: EXCLUDE_DEFAULT,
                use: {
                    loader: 'worker-loader',
                    options: {
                        filename: '[name].[hash:4].js',
                    },
                },
            },
            {
                test: /\.jsx?$/,
                include: SRC,
                exclude: EXCLUDE_DEFAULT,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    plugins: [
        new webpack.WatchIgnorePlugin(EXCLUDE_DEFAULT),

        new webpack.DefinePlugin({
            APP_NAME: JSON.stringify(APP_NAME),
            APP_VERSION: JSON.stringify(APP_VERSION),
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            'process.env.BABEL_ENV': JSON.stringify(process.env.BABEL_ENV),
        }),

        new HtmlWebpackPlugin({
            filename: DIST + '/index.html',
            template: SRC + '/index.ejs',
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:4].css',
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: SRC + '/assets/img/favicon.png',
                    to: DIST + '/favicon.png',
                    globOptions: {
                        ignore: ['.DS_Store'],
                    },
                },
                {
                    from: SRC + '/assets/img',
                    to: DIST + '/img',
                    globOptions: {
                        ignore: ['.DS_Store'],
                    },
                },
                {
                    from: SRC + '/assets/xdata',
                    to: DIST + '/xdata',
                    globOptions: {
                        ignore: ['.DS_Store'],
                    },
                },
            ],
        }),
    ],
}

// Production mode only settings -----------------------------------------------
if (MODE === 'production') {
    config.output.chunkFilename = '[name].[chunkhash:4].js'
    config.output.filename = '[name].[chunkhash:4].js'

    config.optimization = {
        splitChunks: {
            chunks: 'initial',
        },
        runtimeChunk: {
            name: 'manifest',
        },
    }
}

// Development mode only settings ----------------------------------------------
if (MODE === 'development') {
    config.devServer = {
        host: HOST,
        port: PORT,
        publicPath: '/sample-app/',
        historyApiFallback: {
            index: '/sample-app/index.html',
        },
        disableHostCheck: true,
        stats: 'errors-only',
        overlay: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: EXCLUDE_DEFAULT,
        },
    }
}

module.exports = config
