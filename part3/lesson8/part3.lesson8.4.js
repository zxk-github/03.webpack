let path = require('path');

module.exports = {
  entry: {
    app: './src/app'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist4/'),
    publicPath: './dist4/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              transform: './src3/css.transform.js'
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }

}

