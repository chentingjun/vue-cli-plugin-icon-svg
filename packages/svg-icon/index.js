import svgIcon from './svg-icon.vue';

/* istanbul ignore next */
svgIcon.install = function (Vue) {
  Vue.component(svgIcon.name, svgIcon);
};

export default svgIcon;
