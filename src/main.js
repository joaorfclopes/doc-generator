import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Right from './components/Right.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-right', Right)

new Vue({
  render: h => h(App),
}).$mount('#app')