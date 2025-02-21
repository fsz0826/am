import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//svg-icon
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'
//使用 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)

app.use(createPinia())
app.use(router)
router.afterEach((to) => {
  document.title = to.meta.title as string || 'am'
})

app.component('SvgIcon', SvgIcon)
app.mount('#app')
