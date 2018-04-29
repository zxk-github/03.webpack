let path = require('path');
module.exports = {
  entry: {
    app: './app'
  },

  output: {
    filename: '[name].[hash:5].js',
    path: path.resolve(__dirname, './dist1')
  },

  module: {
    rules: [
      {
        test: /.js$/,
        // use: 'babel-loader'  //use 可以直接是一个loader,也可以是一个对象， 也可以是一个数组
        use: {
          loader: 'babel-loader'
        }
      }

    ]
  }

}