import {createApp} from 'vue'
import {connect} from "@vue/devtools";
import "./style.css"
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import router from "./router";
import socket from './plugin/socket'

connect()


const app = createApp(App);
app.use(ArcoVue).use(router).use(socket)
app.mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*')
    })
