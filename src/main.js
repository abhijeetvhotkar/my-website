// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithubSquare, faFacebook, faTwitterSquare, faGratipay,  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueParticles from 'vue-particles'
import VueTyperPlugin from 'vue-typer';

Vue.use(VueTyperPlugin)
Vue.use(VueParticles)
Vue.use(VueMaterial)
library.add(faLinkedin, faGithubSquare, faFacebook, faTwitterSquare, faGratipay, faEnvelopeSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
