let path = require('path');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src2/app'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist2/'),
    publicPath: './dist2/',
    chunkFilename: '[name].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.less/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              transform: './src2/css.transform.js'
            }
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                // minimize: true,
                modules: true,
                localIdentName: '[path]-[name]_[local]'
              }
            },
            {
              loader: 'postcss-loader',
              options:{
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')()
                ]
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',
      allChunks: false
    })
  ]

}