import './assets/styles/index.scss'
import '@arco-design/web-vue/dist/arco.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ArcoVue from '@arco-design/web-vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(createRouter({
  history: createWebHistory(),
}))

app.use(ArcoVue, {
  componentPrefix: 'A',
})

app.mount('#app')
