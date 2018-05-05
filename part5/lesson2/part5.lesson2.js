let path = require('path');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let purifycss = require('purifycss-webpack');
let glob = require('glob-all');
let htmlWebpackPlugin = require('html-webpack-plugin');
let htmlInlinePlugin = require('html-webpack-inline-chunk-plugin');
let webpack = require('webpack');
let cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist1'),
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
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
            loader: 'url-loader',
            options: {
              limit:10000
            }

          }
        ]
      },
      {
        test: /\.html/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'img:data-src']
            }
          }
        ]
      }
    ]
  },
  devServer: {
    proxy:{
     '/api': { //匹配到/api路径的 
      target: 'https://m.weibo.cn',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite:{
        '^/comments': '/api/comments' //页面中也comments为首的请求，重定向到/api/comments, 页面中就可以不需/api开头,这时候，匹配规则也可以省略为‘/’
      },
      hearders: {
        cookie: 'asddsafsafsdafdfsaf'  //模拟用户信息
      }
     },
     
    },
    port: 3000，
    hot: true,
    hotOnly: true
  },
  devtool: 'eval'

  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].css'
    }),

    new purifycss({
      paths: glob.sync([
        path.join(__dirname, './*.html'),
        path.join(__dirname, './src/*')
      ])
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new htmlInlinePlugin({
      inlineChunks: ['manifest']
    }),
    new htmlWebpackPlugin({
      filename: 'html/app.html',
      template: './index.html',
      // inject: false
    }),
    new webpack.optimize.UglifyJsPlugin(),

    new cleanWebpackPlugin(['dist1'])

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin()
  ]

}


