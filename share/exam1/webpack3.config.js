let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports  = {
  entry: {
    a: ['./src3/a', './src3/d'],
    b: './src3/b'
  },

  output: {
    path: path.resolve(__dirname, './dist3'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['a', 'b']
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src3/index.html'
    })
    
  ]

}