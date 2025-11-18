import { createApp } from 'vue'

import ScrollReveal from 'scrollreveal';

import './style.css'
import App from './App.vue'
import router from '../router';


const app = createApp(App)

app.config.globalProperties.$scrollReveal = ScrollReveal()
app.use(router)
app.mount('#app')
