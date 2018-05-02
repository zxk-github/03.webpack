let path = require('path');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let purifycss = require('purifycss-webpack');
let glob = require('glob-all');
let webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js',
    // publicPath: 'dist/'
  },

  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader'
          },
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash:5].[name].[ext]',
              outputPath: './img/',
              // useRelativePath: true
            }
          }
        ]
      },
      {
        test: path.resolve(__dirname, 'src/app.js'), //针对哪个模块
        use:[
          {
            loader: 'imports-loader',
            options: {
              $: 'jquery'  //找到的方式可以使模块中也可以是resolve.alias中
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].css'
    }),

    new purifycss({
      paths: glob.sync([
        path.join(__dirname, './*.html'),
        path.join(__dirname, './src/*')
      ])
    })
  ]

}


