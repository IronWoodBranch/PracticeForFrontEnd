

import { createApp } from 'vue'
import App from './App.vue'

const app =createApp(App).mount('#app')
app.config.globalProperties.alert = alert.bind(this)
