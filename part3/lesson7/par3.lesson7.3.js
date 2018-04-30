let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    app: './src4/app',
    app2: './src4/app2',
    vendor: ['lodash']
  },

  output: {
    path: path.resolve(__dirname, './dist3'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      async: 'async-common', //true 或者是 异步模块名称，
      children: true, //在入口的子级里面找,
      minChunks: 2
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    })
  ]

}