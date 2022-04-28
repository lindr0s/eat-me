import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-3-socket.io'

createApp(App).use(new VueSocketIO({
    debug: true,
    connection: 'http://metinseylan.com:1992',
})).mount('#app')
