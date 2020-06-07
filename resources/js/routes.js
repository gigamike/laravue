import VueRouter from "vue-router";

import HomeComponent from "./components/HomeComponent";
import PostComponent from "./components/PostComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";

const routes = [{
    path: "/",
    component: HomeComponent,
    name: "home",
}, {
    path: "/post/:id",
    component: PostComponent,
    name: "post",
}, {
    path: "/about",
    component: AboutComponent,
    name: "about",
}, {
    path: "/contact",
    component: ContactComponent,
    name: "contact",
}, {
    path: "/auth/login",
    component: require("./components/auth/login").default,
    name: "login",
}];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
