<template>
  <svg class="svg-icon" :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    svgClass: {
      type: String,
      default: '',
    },
    symbolId: {
      type: String,
      default: ''
    },
  },
  computed: {
    iconName() {
      if (this.symbolId) {
        return `#${this.symbolId}`
      } else {
        return `#icon-${this.iconClass}`
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// 默认图标样式
.svg-icon {
  font-size: 18px;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
