var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function ExamplesPlugin() {}
ExamplesPlugin.prototype.apply = function (compiler) {
  compiler.resolvers.normal.plugin('module', function(request, callback) {
    if(request.request === 'examples') {
      this.doResolve('module', { path: '', request: '' }, function () {
        callback(null, {
          path: path.join(__dirname, 'src/index.js'),
          query: '?examples',
          resolved: true
        });
      });
    } else {
      callback();
    }
  });
};

module.exports = {
  entry: path.join(__dirname, 'index.js'),

  output: {
    path: './src',
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    filename: './index.js',
    contentBase: './src'
  },

  devtool: 'source-map',

  resolveLoader: {
    alias: {
      'examples-loader': path.join(__dirname, 'src/examples-loader')
    }
  },

  resolve: {
    root: path.join(__dirname, 'components'),
    alias: {
      'react-desktop': path.join(__dirname, 'components')
    }
  },

  module: {
    loaders: [
      {
        test: /\?examples/,
        loaders: ['babel-loader?stage=0', 'examples-loader']
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new ExamplesPlugin()
  ]
};
