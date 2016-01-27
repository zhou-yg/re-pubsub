var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    t:[
      'webpack-hot-middleware/client?reload=true',
      './test/t',
    ],
    're-pubsub':[
      './src/index',
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx|\.js$/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'src'),path.join(__dirname, 'test')]
    }]
  }
};
