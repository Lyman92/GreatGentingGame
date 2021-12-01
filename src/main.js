import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
const merge = Vue.config.optionMergeStrategies.computed;
Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
  if (!toVal) {
    console.log(fromVal);
    return fromVal;
  }
  if (!fromVal) {
    console.log(fromVal);
    return toVal;
  }
  return {
    getters: merge(toVal.getters, fromVal.getters),
    state: merge(toVal.state, fromVal.state),
    actions: merge(toVal.actions, fromVal.actions)
  }
}

Vue.mixin({
  created(){
    var myOption = this.$options.myOption;
    if(myOption){
      console.log(myOption);
    }
  }
})

import ElementUI from 'element-ui'

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
