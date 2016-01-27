var path = require('path');
var webpack = require('webpack');

var basic= require('./webpack.config');

basic.entry = './src/index';

basic.output = {
  path: path.join(__dirname, 'dist'),
  filename: 're-pubsub.js',
};

basic.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress:{
      warnings:false
    }
  })
]

module.exports = basic;