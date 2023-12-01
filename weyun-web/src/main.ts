import { createApp } from 'vue'
// import './style.css'
import App from './App'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/fon/iconfont.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
