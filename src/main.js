import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Flutterwave from 'flutterwave-vue3'

// createApp(App).use(Flutterwave).mount('#app')
createApp(App).use(Flutterwave).use(router).mount('#app')
