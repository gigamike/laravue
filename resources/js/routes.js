import VueRouter from "vue-router";

import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";

const routes = [{
    path: "/",
    component: HomeComponent,
    name: "home",
}, {
    path: "/about",
    component: AboutComponent,
    name: "about",
}, {
    path: "/contact",
    component: ContactComponent,
    name: "contact",
}];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
