const path = require('path');

// 处理 vue 文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 清除文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, '../lib')

module.exports = {
  mode: 'production',
  entry: './packages/svg-icon',
  output: {
    path: distPath,
    filename: 'svg-icon.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}