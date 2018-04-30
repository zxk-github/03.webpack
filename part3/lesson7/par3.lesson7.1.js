let path = require('path');

module.exports = {
  entry: {
    app: './src/app'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash:5].js'
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