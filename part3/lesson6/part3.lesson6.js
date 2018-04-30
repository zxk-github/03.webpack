let path = require('path');
let webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/app',
    app2: './src/app2',
    vendor: ['lodash']
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    })

  ]
}