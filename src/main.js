import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入 Element Plus 的样式
// if you just want to import css
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus) // 全局注册 Element Plus

app.mount('#app')
