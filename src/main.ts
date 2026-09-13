import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'
import { reveal } from './reveal'

const app = createApp(App)

app.directive('reveal', reveal)
app.use(router)

app.mount('#app')
