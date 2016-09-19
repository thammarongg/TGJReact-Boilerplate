require('babel-polyfill');

// webpack config for develop
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var assetsPath = path.resolve(__dirname, '../webapp/dist');
var host = (process.env.HOST || 'localhost');
var port = (+process.env.PORT + 1 || 30001);
