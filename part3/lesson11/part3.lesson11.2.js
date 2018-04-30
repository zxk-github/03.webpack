let path = require('path');


module.exports = {
  entry: {
    app: './src1/app'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist1/'),
    publicPath: './dist1/',
    chunkFilename: '[name].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          {
            loader: 'style-loader',
            options: {
              transform: './src1/css.transform.js'
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              modules: true
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  }

}