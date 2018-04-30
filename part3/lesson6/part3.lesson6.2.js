let path = require('path');
let webpack = require('webpack');

module.exports  = {
  entry: {
    app: './src/app',
    app2: './src/app2',
    vendor: ['lodash']
  },

  output: {
    path: path.resolve(__dirname, './dist2'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity //这时候想把lodash和webpack生成的文件打包在一起，因为已经指定了vendor,我们不需要去其他模块中找了
    })
  ]

}