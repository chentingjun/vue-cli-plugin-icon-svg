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
## 引入 svg 文件目录 svgPath [默认为 ./src ]
```
import importSvg from 'vue-cli-plugin-icon-svg/plugins'

importSvg(svgPath)
```
