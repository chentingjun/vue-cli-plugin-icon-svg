const path = require('path')

module.exports = (api, projectOptions = { pluginOptions: {} }) => {
  const { pluginOptions = {} } = projectOptions
  const { svgPath = './src', symbolId = 'icon-[name]' } = pluginOptions || {}

  api.chainWebpack(webpackConfig => {
    // 通过 webpack-chain 修改 webpack 配置
    const svgRule = webpackConfig.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        include: path.resolve(__dirname, svgPath), // 只带自己人玩
        symbolId
      })
  })

  api.configureWebpack(webpackConfig => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
  })

  api.registerCommand('test', args => {
    // 注册 `vue-cli-service test`
  })
}
