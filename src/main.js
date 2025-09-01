import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.scss'

// Prism.js
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-matlab'

const app = createApp(App)

// グローバルプロパティとして Prism を追加
app.config.globalProperties.$prism = Prism

console.log('main.js loaded')
app.use(store)
app.use(router)
app.mount('#app')
