const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'es6-model': './index.js',
    'demo-newsarticle': './examples/NewsArticle/script.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  devServer: {
    contentBase: './',
    publicPath: './'
  }
};
