let path = require('path');

module.exports = {
  entry: {
    app: './src1/app.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist1'),
    chunkFilename: '[name].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              // minimize: true
              modules: true,
              localIdentName:  '[path][name]'
            }
          }
        ]
      }
    ]
  }

}
