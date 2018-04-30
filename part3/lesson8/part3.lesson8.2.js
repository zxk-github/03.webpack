let path = require('path');

module.exports = {
  entry: {
    app: './src/app'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist2/'),
    publicPath: './dist2/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader/url'
          },
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }

}

