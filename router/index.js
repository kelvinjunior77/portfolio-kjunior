import { createRouter, createWebHistory, createWebHashHistory} from "vue-router";
import Home from "../pages/Home.vue";
const lazyLoad = (view) => import(`../pages/${view}.vue`);
import Blogue from "../pages/Blogue.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

     {
        path: "/kelvinjunior/blogue",
        name: "Blogue",
        component: lazyLoad("Blogue"),
        //component: Blogue
     },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;