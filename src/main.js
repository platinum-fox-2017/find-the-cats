// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import axios from 'axios'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyBqyuyv9cLau8z4pv6U_FDJvf2sR11PlDc',
  databaseURL: 'https://progressive-tamvan.firebaseio.com',
  projectId: 'progressive-tamvan'
}
const firebaseApp = firebase.initializeApp(config)

Vue.prototype.$http = axios
Vue.prototype.$db = firebaseApp.database()
Vue.use(VueFire)
Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  orange: {
    primary: 'orange',
    accent: 'green'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
