import { createApp } from 'vue'
import App from './App.vue'

// Imports Globais
import './index.css'
import router from './router'
import vfmPlugin from 'vue-final-modal'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Imports Globais de CSS's

import 'bootstrap/dist/css/bootstrap.min.css'

// Criando e montando o App usando as dependências
const app = createApp(App)
app.use(vfmPlugin)
app.use(router)
app.mount('#app')
app.use(ElementPlus)
