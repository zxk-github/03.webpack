const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    module: './src1/a.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist1')
  }
}