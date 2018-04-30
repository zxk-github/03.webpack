let path = require('path');

module.exports = {
  entry: {
    app: './src2/app'
  },

  output: {
    path: path.resolve(__dirname, './dist2'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  // module: {
  //   rules: [
  //     {
  //       test: /.js$/,
  //       loader:
  //
  //     }
  //
  //   ]
  // }
}