import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resource from 'vue-resource'
import ElementUI from 'element-ui';
Vue.use(ElementUI)
Vue.use(resource)
Vue.config.productionTip = false;
//自定义过滤器，对数据进行处理
Vue.filter('toupperCase',function(value){
  return value.toUpperCase();
})
//自定义指令

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
