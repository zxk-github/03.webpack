let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports  = {
  entry: {
    a: './src2/a',
    b: './src2/b'
  },

  output: {
    path: path.resolve(__dirname, './dist2.1'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new htmlWebpackPlugin({
      filename: 'index.html'
    })
  ]

}