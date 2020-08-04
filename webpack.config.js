const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];



module.exports = {
    entry: {
        app: './src/index.js',
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback:true,
        port: 9000,
        host: '0.0.0.0',
        hot:true

    },

    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html",
        favicon: "./public/asset/icons/magic.ico"
    })],


    module: {



        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader", options: { plugins: postCSSPlugins }
                    }]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },

            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',




};
