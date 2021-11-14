import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/axios'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
