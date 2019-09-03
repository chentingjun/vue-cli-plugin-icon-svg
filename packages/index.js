import svgIcon from './svg-icon'

const install = (Vue) => {
  Vue.component(svgIcon.name, svgIcon)
}

export {
  install,
  svgIcon
}