const path = require("path");
module.exports = {
  entry: {
    app: './src/app.ts'
  },

  output: {
    path: path.resolve(__dirname, './dist1'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}