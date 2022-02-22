import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Tailwind css and app css
import './assets/css/tailwind.css'
import './assets/css/app.scss'
import 'remixicon/fonts/remixicon.css'

// form validators
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Smooth scroll 
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)

// Axios
import Axios from 'axios'
Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
