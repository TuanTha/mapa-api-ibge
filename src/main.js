import { createApp } from 'vue'
import App from './App.vue'

// Imports Globais
import router from './router'
import vfmPlugin from 'vue-final-modal'

// Imports Globais de CSS's
import 'bootstrap/dist/css/bootstrap.min.css'

// Criando e montando o App usando as dependências
const app = createApp(App);
app.use(vfmPlugin)
app.use(router)
app.mount('#app')
