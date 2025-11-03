import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/style.css'

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'

const app = createApp(App)
import { inject } from '@vercel/analytics'
inject()
app.use(createPinia())
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
    