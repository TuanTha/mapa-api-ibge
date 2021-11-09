import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vfmPlugin from 'vue-final-modal'

import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(vfmPlugin).use(router).mount('#app')
