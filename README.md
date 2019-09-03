# vue-plugin-svg

## 安装包 npm i vue-cli-plugin-icon-svg
### vue.config.js
* 代码
```
module.exports = {
  pluginOptions: {
    /**
    * 路径名
    * 默认 ./src 下的 svg 文件
    */
    svgPath: '',
    /**
    * 生成的 symolId 名【即类名】
    * 默认文件生成 icon-[name] 形式的类名
    */
    symbolId: '',
  }
}
```
* symbolId

```
<svg>
  <use :xlink:href="`#${symbolId}`"/>
</svg>
```

## 引入 svg 组件
```
import { svgIcon } from 'vue-cli-plugin-icon-svg/lib'

Vue.use(svgIcon)
```

## 引入 svg 文件目录 svgPath 用户可以写个插件或直接引入在 main.js 中
```
/**
 * require.context("./test", false, /.test.js$/);
 * 这行代码就会去 test 文件夹（不包含子目录） 下面的找所有文件名以 .test.js 结尾的文件能被 require 的文件。
 * 更直白的说就是 我们可以通过正则匹配引入相应的文件模块。
 * require.context有三个参数：
 * directory：说明需要检索的目录
 * useSubdirectories：是否检索子目录
 * regExp: 匹配文件的正则表达式
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
requireAll(req)
```
