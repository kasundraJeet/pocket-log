import './assets/index.css'
import 'vue-fast-marquee/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Marquee from 'vue-fast-marquee'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Marquee)

app.mount('#app')
