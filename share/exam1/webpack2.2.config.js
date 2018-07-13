let path = require('path');
let webpack = require('webpack');

module.exports  = {
  entry: {
    a: './src2/a',
    b: './src2/b'
  },

  output: {
    path: path.resolve(__dirname, './dist2.2'),
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
    })
  ]

}