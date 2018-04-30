let path = require('path');
let webpack = require('webpack');

module.exports  = {
  entry: {
    app: './src/app',
    app2: './src/app2',
    vendor: ['lodash']
  },

  output: {
    path: path.resolve(__dirname, './dist4'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['app', 'app2']
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ]

}