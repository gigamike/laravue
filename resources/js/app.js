require('./bootstrap');

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from "vue-router";
import Vuex from "vuex";
import router from "./routes";
import storeDefinition from "./store";
import Index from "./Index";

window.Vue = require('vue');

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeDefinition);

// we dont want to always check auth for pages without auth
window.axios.interceptors.response.use(
    response => {
        return response;
    }, error => {
        if (401 === error.response.status) {
            store.dispatch("logout");
        }

        return Promise.reject(error);
    }
);

const app = new Vue({
    el: '#app',
    router,
    components: {
        index: Index,
    },
    store,
    async beforeCreate() {
        this.$store.dispatch("loadStoredState");
        this.$store.dispatch("loadUser");
    }
});
