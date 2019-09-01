# vue-plugin-svg

## in vue.config.js

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
## symbolId

```
<svg>
  <use :xlink:href="`#${symbolId}`"/>
</svg>
``