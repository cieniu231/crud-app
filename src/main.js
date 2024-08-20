import './assets/main.css'
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue'


import './index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';




createApp(App)
    .use(router)
    .use(store)  
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

