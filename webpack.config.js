const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: ['./src/index.js'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    writeToDisk: true,
    overlay: true,
    open: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: false
        }
      }],
    },
    {
      test: /\.css$/i,
      use: [
        'style-loader',
        'css-loader'
      ],
    },
    {
      test: /\.(png|jp(e*)g|svg)$/,  
      use: [{
          loader: 'url-loader',
          options: { 
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[name].[ext]',
              publicPath: '../',
              useRelativePaths: true
          } 
      }]
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'file-loader',
          options: {
            name: 'css/[name].css',
          }
        },
        {
          loader: 'extract-loader'
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },        
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          }
        },
      ],
    },
  ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My Beets App',
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
