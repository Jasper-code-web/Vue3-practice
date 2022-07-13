import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.ts'

createApp(App)
        .use(router)
        .use(store)
        // .use(store)
        .mount('#app')
