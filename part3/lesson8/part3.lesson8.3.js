let path = require('path');

module.exports = {
  entry: {
    app: './src/app'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist3/'),
    publicPath: './dist3/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader/useable'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }

}

