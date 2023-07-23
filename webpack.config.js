const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const path = require('path');

let commitHash = require('child_process').execSync('git rev-parse --short HEAD').toString().trim();

module.exports = {
  entry: ['babel-polyfill', './src/index.tsx'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js'),
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve('./src')],
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    open: true,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.ejs',
      templateParameters: {
        shortCommitHash: commitHash,
      },
    }),
    new MiniCssExtractPlugin({
      filename: './public/index.css',
    }),
    new CopyPlugin({
      patterns: [{ from: './public/favicon', to: 'favicon' }],
    }),
    new webpack.DefinePlugin({
      SHORT_COMMIT_HASH: JSON.stringify(commitHash),
    }),
    new Dotenv(),
  ],
};
