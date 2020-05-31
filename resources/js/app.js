require('./bootstrap');

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from "vue-router";
import router from "./routes"
import Index from "./Index";

window.Vue = require('vue');

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        index: Index,
    }
});
