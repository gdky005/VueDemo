// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

// Vue 的使用
Vue.use(ElementUI);



// 层模板布局
Vue.component('layer', {
  props: ['item'],
  template: '<h1> {{ item.name }} </h1>'
});

// button 模板布局
Vue.component('WQButton', {
  props: ['name'],
  template: '<p><el-button>{{ name.name }}</el-button></p>'
});














/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
