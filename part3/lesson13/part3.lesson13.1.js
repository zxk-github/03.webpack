let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app'
  },

  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].bundle.js'

  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]

}



