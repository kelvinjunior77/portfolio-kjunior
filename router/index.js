import { createRouter, createWebHistory, createWebHashHistory} from "vue-router";
import Home from "../pages/Home.vue";
//const lazyLoad = (view) => import(`../pages/${view}.vue`);
import Blogue from "../pages/Blogue.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

     {
        path: "/blogue",
        name: "Blogue",
        //component: lazyLoad("Blogue"),
        component: Blogue
     },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

/** Tive que comentar a linha do lazyLoad para que o componente Blogue carregasse no servidor, 
  na máquina local funciona perfeitamente. */