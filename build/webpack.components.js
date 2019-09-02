const path = require('path');

// 处理 vue 文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const distPath = path.resolve(__dirname, '../lib')

const components = {
  'svg-icon': './packages/svg-icon'
}

module.exports = {
  mode: 'production',
  entry: components,
  output: {
    path: distPath,
    filename: '[name].js',
    // 打包方式 改为 module.exports =
    libraryTarget: 'commonjs2'
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
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  optimization: {
    // 不压缩才能被使用成功 -- 否则会被 eslint 报错
    minimize: false
  }
}