const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
];

  module.exports = {
    mode:"production",
    entry: {
        app: './src/index.js',
      },
      
      output: {
        filename: '[name].[contentHash].js',
        path: path.join(__dirname, 'dist'),
      },
      optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      },
      plugins: [
        new MiniCssExtractPlugin({filename:"[name].[contentHash].css"}),
        new HtmlWebpackPlugin({
          filename: "index.html", 
          template: "./public/index.html",
          favicon: "./public/asset/icons/magic.ico",
          minify:{
            removeAttributeQuotes:true,
            collapseWhitespace:true,
            removeComments:true
          }
        }),
        new CleanWebpackPlugin()
      ],

      module:{
          rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              use: [
                MiniCssExtractPlugin.loader, 
                "css-loader",
                {loader:"postcss-loader",options:{plugins:postCSSPlugins}
            }]
            },
            
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader:"file-loader",
                    options:{
                        name:"[name].[hash].[ext]",
                        outputPath:"imgs"
                    }
                }
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                     loader:'file-loader',
                     options:{
                      name:"[name].[hash].[ext]",
                      outputPath:"fnt"
                  }
                },
            },

            {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
          }
          ]
      },
      devtool:'cheap-module-eval-source-map'
  

  };
