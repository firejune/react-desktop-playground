var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    path: './',
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    filename: 'index.js',
    contentBase: './'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0'
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin()]
};
